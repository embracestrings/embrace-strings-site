import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Morawetz Chinrest",
};

export default function MorawetzPage() {
  return (
    <ProductPage
      name="Morawetz"
      tagline="An extended, side-mounted design for players who need more reach across the lower bout."
      intro="The Morawetz is built for players who need a chinrest that extends further across the instrument. Specifications and detailed measurements will appear here."
      features={[
        {
          title: "Extended Reach",
          body: "A longer profile gives players with broader jaws or longer necks more surface to rest on, without sacrificing tool-free adjustment.",
        },
        {
          title: "Side-Mounted Stability",
          body: "Designed to sit securely off to the side of the tailpiece, the Morawetz keeps the instrument stable through fast position changes.",
        },
        {
          title: "Built for Bigger Players",
          body: "A favorite among taller violinists and violists who have struggled to find a fixed chinrest that fits comfortably.",
        },
      ]}
    />
  );
}
