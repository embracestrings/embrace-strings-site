import type { Metadata } from "next";
import ChinrestHero from "../components/chinrest/ChinrestHero";
import Difference from "../components/chinrest/Difference";
import ProductHighlight from "../components/chinrest/ProductHighlight";
import ForPlayers from "../components/chinrest/ForPlayers";
import Faq from "../components/chinrest/Faq";
import TrialAndFeedback from "../components/chinrest/TrialAndFeedback";
import Reviews from "../components/chinrest/Reviews";

export const metadata: Metadata = {
  title: "Violin Chinrest | Adjustable Comfort and Fit",
};

export default function ChinrestPage() {
  return (
    <>
      <ChinrestHero />
      <Difference />
      <ProductHighlight />
      <ForPlayers />
      <Faq />
      <TrialAndFeedback />
      <Reviews />
    </>
  );
}
