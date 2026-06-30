import type { Metadata } from "next";
import TestingHero from "../components/testing/TestingHero";
import TrialDetails from "../components/testing/TrialDetails";
import TestingFaq from "../components/testing/TestingFaq";

export const metadata: Metadata = {
  title: "Violin Chinrest Home Trial | 14-Day Try-Out",
  description:
    "Try an Embrace Strings chinrest at home with our 14-day test kit. $25 trial fee, simple return or keep options, and answers to common questions.",
};

export default function TestingPage() {
  return (
    <>
      <TestingHero />
      <TrialDetails trialProductId={process.env.STRIPE_PRODUCT_TRIAL ?? ""} />
      <TestingFaq />
    </>
  );
}
