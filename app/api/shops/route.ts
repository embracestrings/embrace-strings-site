import { NextResponse } from "next/server";
import Papa from "papaparse";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1fKwLklEk4SSILyzrng32lVq6DOqOo0JIaBd7XqDzGno/export?format=csv&gid=0";

// Hardcoded fallback — always shown if the sheet is unavailable or not yet set up
const FALLBACK_SHOPS = [
  { name: "Terra Nova Violins", address: "6983 Blanco Road, San Antonio, TX 78216", phone: "(210) 349-4700" },
  { name: "Terra Nova Violins", address: "7795 Burnet Road, Austin, TX 78757", phone: "(512) 640-4072" },
  { name: "Westbank Violin Shop", address: "6301 Menchaca Rd, Austin, TX 78745", phone: "" },
];

export async function GET() {
  try {
    const res = await fetch(SHEET_URL, {
      cache: "no-store",
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (res.ok) {
      const text = await res.text();

      // If Google redirected us to a sign-in page, text will be HTML
      if (!text.trimStart().startsWith("<")) {
        const { data } = Papa.parse<Record<string, string>>(text, {
          header: true,
          skipEmptyLines: true,
        });

        const shops = data.filter((r) => r.name?.trim() && r.address?.trim()).map((r) => ({
          name: r.name.trim(),
          address: r.address.trim(),
          phone: (r.phone ?? "").trim(),
        }));

        if (shops.length > 0) {
          return NextResponse.json(shops);
        }
      }
    }
  } catch {
    // fall through to hardcoded data
  }

  return NextResponse.json(FALLBACK_SHOPS);
}
