import type { Metadata } from "next";
import ChinrestHero from "../components/chinrest/ChinrestHero";
import ProductHighlight from "../components/chinrest/ProductHighlight";
import YourEmbrace from "../components/chinrest/YourEmbrace";
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
      <YourEmbrace />
      <Reviews />
      <ShopMap />
      <Faq />
      <TrialAndFeedback />
    </>
  );
}
