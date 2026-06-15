import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Tall Chinrest",
};

export default function TallPage() {
  return (
    <ProductPage
      name="Tall"
      tagline="Extra height for players who need more lift to reach a natural, relaxed posture."
      intro="The Tall model offers an elevated base for players who need significant additional height to bridge the gap between shoulder and jaw. Specifications and detailed measurements will appear here."
      features={[
        {
          title: "Maximum Height Range",
          body: "An elevated base extends the adjustment range well beyond standard models, giving taller players room to find a natural angle.",
        },
        {
          title: "Designed for Long Necks",
          body: "Built with players like Embrace Strings founder Turner Rey in mind—tall musicians who have struggled with chinrests that simply don't reach.",
        },
        {
          title: "Same Tool-Free Adjustment",
          body: "All the effortless side-dial height and tilt control of the rest of the line, just with more room to work with.",
        },
      ]}
    />
  );
}
