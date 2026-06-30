"use client";

import { useState, useCallback, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type Props = {
  productId: string;
  buttonLabel?: string;
  buttonClassName?: string;
};

export default function EmbeddedCheckoutButton({
  productId,
  buttonLabel = "Purchase",
  buttonClassName,
}: Props) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const fetchClientSecret = useCallback(async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    const data = await res.json();
    return data.clientSecret as string;
  }, [productId]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          buttonClassName ??
          "hover-white inline-flex w-full items-center justify-center rounded-lg bg-[#ba9e78] px-8 py-3 font-medium tracking-[0.12em] text-[#16335b] transition hover:bg-[#16335b] sm:w-auto"
        }
        style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#ba9e78]/25 px-6 py-4">
              <p
                className="font-medium tracking-[0.08em] text-[#16335b]"
                style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: "1.2rem" }}
              >
                Embrace Strings
              </p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close checkout"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#16335b]/50 transition hover:bg-[#f2f2f3] hover:text-[#16335b]"
              >
                ✕
              </button>
            </div>

            {/* Stripe Embedded Checkout */}
            <div className="max-h-[80vh] overflow-y-auto p-2">
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ fetchClientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
