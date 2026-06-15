import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Original Chinrest",
};

export default function OriginalPage() {
  return (
    <ProductPage
      name="Original"
      tagline="The chinrest that started it all—fully adjustable, tool-free, and built for everyday comfort."
      intro="The Original is the foundation of the Embrace Strings line: a balanced, versatile chinrest designed to adapt to a wide range of players and playing styles. Specifications and detailed measurements will appear here."
      features={[
        {
          title: "Full Height Adjustment",
          body: "Dial the height up or down with a simple side wheel, so your jaw and neck stay relaxed no matter how your posture shifts during the day.",
        },
        {
          title: "Tilt That Follows You",
          body: "Independent tilt control lets you angle the cup to match your jawline, reducing pressure points during long rehearsals and performances.",
        },
        {
          title: "Balanced for Everyday Play",
          body: "A versatile shape and weight distribution make the Original a natural starting point for players moving from a fixed chinrest.",
        },
      ]}
    />
  );
}
