import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Tall Chinrest — Embrace Strings",
};

export default function TallPage() {
  return (
    <ProductPage
      name="Tall"
      identity="Built to Reach. Designed to Embrace."
      opener="For players who need more than &ldquo;standard&rdquo;."
      descriptionRest={`Raising your shoulder rest or dropping your head is a natural reaction to a short chinrest — but can be a deadly mistake for your setup, body, and performance. The Tall chinrest solves the problem correctly: it fills the gap between your jaw and your instrument, keeping your shoulder relaxed, your spine aligned, and your body tension free. Built on the same classic Guarneri shape as the Original, with the Embrace Dial System extending from 1.5 to 2 inches. If you're roughly 6'2" or taller and have never felt truly settled on your instrument, this was made for you.`}
      whoItsFor="Players with extra-long necks who need real height without sacrificing stability."
      specHeight='1.5″ – 2″'
      specMaterial="3D-printed nylon"
      specInstruments="Violin and Viola"
      features={[
        {
          title: "Extended Height Range",
          body: "The Embrace Dial System reaches from 1.5 to 2 inches — filling the gap that no standard chinrest can, without touching your shoulder rest.",
        },
        {
          title: "Keeps the Instrument in Place",
          body: "More height at the chin means the instrument stays on the collarbone where it belongs, preserving tone, bow arm freedom, and stability.",
        },
        {
          title: "Guarneri Foundation",
          body: "The same proven side-mount shape as the Original. You get the height you need without learning an entirely new feel.",
        },
      ]}
    />
  );
}
