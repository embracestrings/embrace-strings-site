import { stripe } from "@/app/lib/stripe";
import Link from "next/link";

export default async function CheckoutReturnPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f2f2f3] px-4">
        <div className="text-center">
          <h1 className="font-[var(--font-cormorant)] text-4xl font-medium text-[#16335b]">
            Something went wrong
          </h1>
          <p className="mt-4 text-sm text-[#16335b]/60">No session found.</p>
          <Link href="/" className="mt-6 inline-block text-sm text-[#ba9e78] underline">
            Return home
          </Link>
        </div>
      </main>
    );
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);
  const paid = session.payment_status === "paid";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2f2f3] px-4">
      <div className="mx-auto max-w-md text-center">
        {paid ? (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ba9e78]/15">
              <svg
                className="h-8 w-8 text-[#ba9e78]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-medium text-[#16335b]">
              Order Confirmed
            </h1>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/65">
              Thank you for your order. A confirmation has been sent to{" "}
              <span className="font-medium text-[#16335b]">
                {session.customer_details?.email ?? "your email"}
              </span>
              . We&apos;ll be in touch with shipping details shortly.
            </p>
            <p className="mt-2 text-xs text-[#16335b]/40">
              Order #{session.id.slice(-8).toUpperCase()}
            </p>
            <Link
              href="/chinrest"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 text-sm font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78]"
            >
              Back to Chinrests
            </Link>
          </>
        ) : (
          <>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-medium text-[#16335b]">
              Payment Pending
            </h1>
            <p className="mt-4 text-sm font-light text-[#16335b]/65">
              Your payment is still processing. You&apos;ll receive a confirmation email once it clears.
            </p>
            <Link href="/" className="mt-6 inline-block text-sm text-[#ba9e78] underline">
              Return home
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
