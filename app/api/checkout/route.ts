import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";

export async function POST(req: NextRequest) {
  const { productId } = await req.json();

  if (!productId) {
    return NextResponse.json({ error: "Missing productId" }, { status: 400 });
  }

  // Look up the active price for the given product
  const prices = await stripe.prices.list({
    product: productId,
    active: true,
    limit: 1,
  });

  if (!prices.data.length) {
    return NextResponse.json({ error: "No active price found for product" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? "https://embracestrings.com";

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [{ price: prices.data[0].id, quantity: 1 }],
    mode: "payment",
    return_url: `${origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return NextResponse.json({ clientSecret: session.client_secret });
}
