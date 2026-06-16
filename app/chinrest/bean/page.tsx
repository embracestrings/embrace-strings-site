import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Bean Chinrest — Embrace Strings",
};

export default function BeanPage() {
  return (
    <ProductPage
      name="Bean"
      identity="Open"
      opener="The Bean's wider surface area doesn't lock you in — it opens you up. More chin positions, more freedom to shift and breathe through your playing without losing contact with the instrument."
      descriptionRest="Where the Original and Morawetz guide you toward a specific placement, the Bean gives you a range. Combined with the Embrace Dial System, it's the most expressive setup in the Embrace Strings line. For players whose playing is fluid, physical, and alive."
      whoItsFor="Players who want freedom of movement and a wider range of natural chin positions."
      specHeight='0.9″ – 1.5″'
      specMaterial="3D-printed nylon"
      specInstruments="Violin and Viola"
      features={[
        {
          title: "Wider Contact Surface",
          body: "More surface area means more freedom to shift, breathe, and move through your playing — without losing connection to the instrument.",
        },
        {
          title: "A Range, Not a Position",
          body: "The Bean doesn't guide you to one spot. It gives you a zone of natural placement, so your chin lands where it wants to be.",
        },
        {
          title: "The Most Expressive Setup",
          body: "Fluid playing needs a fluid setup. The Bean paired with the Embrace Dial System is built for players who bring their whole body to the music.",
        },
      ]}
    />
  );
}
