import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Bean Chinrest",
};

export default function BeanPage() {
  return (
    <ProductPage
      name="Bean"
      tagline="A compact, rounded profile designed for players who prefer a smaller contact footprint."
      intro="The Bean takes the same tool-free adjustability as the Original and wraps it in a smaller, rounded form. Specifications and detailed measurements will appear here."
      features={[
        {
          title: "Compact Contact Surface",
          body: "A smaller, rounded cup reduces contact area while still supporting full height and tilt adjustment for a precise, personal fit.",
        },
        {
          title: "Lightweight Feel",
          body: "Designed to feel nearly invisible under the jaw, the Bean suits players who want adjustability without extra bulk.",
        },
        {
          title: "Great for Smaller Frames",
          body: "Its reduced footprint makes the Bean a popular choice for players with shorter necks or more petite builds.",
        },
      ]}
    />
  );
}
