import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Tall Chinrest — Embrace Strings",
};

export default function TallPage() {
  return (
    <ProductPage
      name="Tall"
      identity="Necessary"
      opener={`For players the standard never fit. Raising your shoulder rest seems like the obvious fix for a long neck — but it lifts the instrument off your collarbone, destabilizing everything.`}
      descriptionRest={`The Tall chinrest solves the actual problem: it fills the gap between your jaw and your instrument, keeping everything correctly placed and your neck aligned. Built on the same classic Guarneri shape as the Original, with the Embrace Dial System extending from 1.5 to 2 inches. If you're roughly 6'2" or taller and have never felt truly settled on your instrument, this was made for you.`}
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
