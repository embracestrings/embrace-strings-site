import type { Metadata } from "next";
import ChinrestHero from "../components/chinrest/ChinrestHero";
import ProductHighlight from "../components/chinrest/ProductHighlight";
import ForPlayers from "../components/chinrest/ForPlayers";
import ShopMap from "../components/chinrest/ShopMap";
import Reviews from "../components/chinrest/Reviews";
import Faq from "../components/chinrest/Faq";
import TrialAndFeedback from "../components/chinrest/TrialAndFeedback";

export const metadata: Metadata = {
  title: "Violin Chinrest | Adjustable Comfort and Fit",
};

export default function ChinrestPage() {
  return (
    <>
      <ChinrestHero />
      <ProductHighlight />
      <ForPlayers />
      <ShopMap />
      <Reviews />
      <Faq />
      <TrialAndFeedback />
    </>
  );
}
