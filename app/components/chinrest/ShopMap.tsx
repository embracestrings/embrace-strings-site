"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Papa from "papaparse";

// ─── Types ────────────────────────────────────────────────────────────────────

type Shop = {
  name: string;
  address: string;
  lat?: number;
  lng?: number;
};

// Minimal ambient types so we don't need the full @types/google.maps at
// compile time — the real object is loaded at runtime.
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
  }
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1fKwLklEk4SSILyzrng32lVq6DOqOo0JIaBd7XqDzGno/export?format=csv";

// Subtle greyscale map style that keeps the brand feeling clean
const MAP_STYLES = [
  { featureType: "all", elementType: "geometry.fill", stylers: [{ saturation: -30 }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#d4dde8" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#e8e4de" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#d4c9b8" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dde8d8" }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#16335b" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ShopMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

  const mapDivRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const infoWindowRef = useRef<any>(null);

  const [shops, setShops] = useState<Shop[]>([]);
  const [mapsReady, setMapsReady] = useState(false);

  // ── 1. Fetch + parse CSV ────────────────────────────────────────────────────
  useEffect(() => {
    Papa.parse<{ name: string; address: string }>(CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: ({ data }) => {
        setShops(
          data
            .filter((r) => r.name?.trim() && r.address?.trim())
            .map((r) => ({ name: r.name.trim(), address: r.address.trim() }))
        );
      },
    });
  }, []);

  // ── 2. Load Maps JS API ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!apiKey) return;
    if (window.google?.maps) { setMapsReady(true); return; }

    const id = "gmap-script";
    if (document.getElementById(id)) return; // already injecting

    const script = document.createElement("script");
    script.id = id;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapsReady(true);
    document.head.appendChild(script);
  }, [apiKey]);

  // ── 3. Init map + geocode + pin markers ────────────────────────────────────
  useEffect(() => {
    if (!mapsReady || !mapDivRef.current || shops.length === 0) return;
    // Only init once
    if (mapRef.current) return;

    const g = window.google.maps;

    const map = new g.Map(mapDivRef.current, {
      center: { lat: 29.9, lng: -98.5 },
      zoom: 8,
      styles: MAP_STYLES,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
    mapRef.current = map;
    infoWindowRef.current = new g.InfoWindow();

    const geocoder = new g.Geocoder();
    const bounds = new g.LatLngBounds();

    shops.forEach((shop, i) => {
      geocoder.geocode({ address: shop.address }, (results: google.maps.GeocoderResult[], status: string) => {
        if (status !== "OK" || !results?.[0]) return;

        const pos = results[0].geometry.location;
        bounds.extend(pos);

        const marker = new g.Marker({
          position: pos,
          map,
          title: shop.name,
          icon: {
            path: g.SymbolPath.CIRCLE,
            scale: 9,
            fillColor: "#ba9e78",
            fillOpacity: 1,
            strokeColor: "#16335b",
            strokeWeight: 2,
          },
        });

        markersRef.current[i] = marker;

        // Store coords back for the strip click handler
        setShops((prev) =>
          prev.map((s, idx) =>
            idx === i ? { ...s, lat: pos.lat(), lng: pos.lng() } : s
          )
        );

        marker.addListener("click", () => {
          infoWindowRef.current.setContent(
            `<div style="font-family:'Montserrat',sans-serif;color:#16335b;padding:2px 4px;max-width:200px">
               <p style="font-weight:600;margin:0 0 4px">${shop.name}</p>
               <p style="margin:0;font-size:13px;color:#16335b99">${shop.address}</p>
             </div>`
          );
          infoWindowRef.current.open(map, marker);
        });

        // Fit after every geocode so it updates incrementally
        map.fitBounds(bounds);
      });
    });
  }, [mapsReady, shops.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Pan map to a shop and open its info window ─────────────────────────────
  function focusShop(index: number) {
    const marker = markersRef.current[index];
    const map = mapRef.current;
    if (!marker || !map) return;
    map.panTo(marker.getPosition());
    map.setZoom(14);
    infoWindowRef.current?.setContent(
      `<div style="font-family:'Montserrat',sans-serif;color:#16335b;padding:2px 4px;max-width:200px">
         <p style="font-weight:600;margin:0 0 4px">${shops[index].name}</p>
         <p style="margin:0;font-size:13px;color:#16335b99">${shops[index].address}</p>
       </div>`
    );
    infoWindowRef.current?.open(map, marker);
  }

  // ── Scrolling strip helpers ────────────────────────────────────────────────
  // Duplicate list so the marquee loops seamlessly
  const stripItems = [...shops, ...shops];

  return (
    <section className="border-t border-[#ba9e78]/25 bg-[#f2f2f3] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
            Find Us In Person
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#16335b]/65 sm:text-base">
            Want to try an Embrace Strings chinrest before you buy? Visit one of our partner shops.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-10 w-full overflow-hidden rounded-2xl border border-[#ba9e78]/30 shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          {apiKey ? (
            <div ref={mapDivRef} className="h-[450px] w-full" />
          ) : (
            <div className="flex h-[450px] w-full items-center justify-center bg-[#e5e5e7] text-sm text-[#16335b]/40">
              Map unavailable — add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment.
            </div>
          )}
        </motion.div>

        {/* Scrolling shop strip */}
        {shops.length > 0 && (
          <div className="relative mt-8 overflow-hidden">
            <div className="shop-map-strip">
              {stripItems.map((shop, i) => (
                <button
                  key={`${shop.address}-${i}`}
                  onClick={() => focusShop(i % shops.length)}
                  className="mx-3 flex w-52 shrink-0 flex-col rounded-xl border border-[#ba9e78]/30 bg-white px-5 py-4 text-left shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78]"
                >
                  <p
                    className="font-[var(--font-cormorant)] text-lg font-medium leading-tight text-[#16335b]"
                    style={{ color: "#16335b" }} // override global hover rule
                  >
                    {shop.name}
                  </p>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-[#16335b]/55">
                    {shop.address}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer line */}
        <p className="mt-8 text-center text-sm font-light text-[#16335b]/50">
          Are you a shop owner interested in carrying Embrace Strings?{" "}
          <Link
            href="/contact"
            className="font-medium text-[#ba9e78] underline-offset-2 hover:underline"
          >
            Get in touch
          </Link>
        </p>

      </div>
    </section>
  );
}
