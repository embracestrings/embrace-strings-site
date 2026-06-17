import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Morawetz Chinrest — Embrace Strings",
};

export default function MorawetzPage() {
  return (
    <ProductPage
      name="Morawetz"
      identity="Built to Settle. Designed to Embrace."
      opener="For players who require precision and comfort."
      descriptionRest="The Morawetz shape is built around precision. Its contour promotes exact placement underneath the chin with a secure, defined connection. Players who reach for a Morawetz want to know their position is stable in every rehearsal and every performance. The Embrace Dial System takes that precision further, adding full height and tilt adjustability to a shape that's never had it before. If you've always played Morawetz, this is the upgrade. If you are looking for more stability in your setup, this is the answer."
      whoItsFor="Players who prioritize exact, repeatable chin placement and love the Morawetz profile."
      specHeight='0.9″ – 1.5″'
      specMaterial="3D-printed nylon"
      specInstruments="Violin and Viola"
      features={[
        {
          title: "Defined Chin Cradle",
          body: "The Morawetz profile guides your chin into a specific, secure position — so every time you pick up the instrument, you're already settled.",
        },
        {
          title: "Adjustability Meets Tradition",
          body: "The Embrace Dial System brings height control to a shape that's never had it. All the precision of Morawetz, none of the compromise.",
        },
        {
          title: "Consistent Across Every Performance",
          body: "Lock in your position once. Return to it every time — through long rehearsals, dress rehearsals, and concert nights.",
        },
      ]}
    />
  );
}
