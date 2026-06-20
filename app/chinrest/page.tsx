import type { Metadata } from "next";
import ChinrestHero from "../components/chinrest/ChinrestHero";
import ProductHighlight from "../components/chinrest/ProductHighlight";
import Reviews from "../components/chinrest/Reviews";
import ShopMap from "../components/chinrest/ShopMap";
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
      <Reviews />
      <ShopMap />
      <Faq />
      <TrialAndFeedback />
    </>
  );
}
