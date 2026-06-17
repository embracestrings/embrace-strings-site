import type { Metadata } from "next";
import ProductPage from "../../components/chinrest/ProductPage";

export const metadata: Metadata = {
  title: "Original Chinrest — Embrace Strings",
};

export default function OriginalPage() {
  return (
    <ProductPage
      name="Original"
      identity="Built to Adapt. Designed to Embrace."
      opener="A classic Embrace with modern adjustability."
      descriptionRest="The Original is built on a classic Guarneri shape — a familiar shape to bring immediate comfort, but built to perform at the highest level. Whether you're a student working through setup changes or a professional looking for everyday adaptability to attire and setup, the Original adapts with you. The Embrace Dial System provides full height and tilt adjustment from 0.9 to 1.5 inches, tool-free, in seconds. If you've never found a chinrest that felt quite right, this is where you start."
      whoItsFor="Dedicated players at any level who want a classic shape with modern adjustability."
      specHeight='0.9″ – 1.5″'
      specMaterial="3D-printed nylon"
      specInstruments="Violin and Viola"
      features={[
        {
          title: "Full Height Adjustment",
          body: "The Embrace Dial System lets you dial height from 0.9 to 1.5 inches — no tools, no luthier, no waiting. Adjust in seconds before a lesson or between pieces.",
        },
        {
          title: "Guarneri Side-Mount Shape",
          body: "A classic profile that string players have trusted for generations, refined with modern manufacturing precision. Familiar from day one.",
        },
        {
          title: "Built for Any Level",
          body: "From student to concert soloist, the Original meets you where you are. As your technique grows, your setup grows with you.",
        },
      ]}
    />
  );
}
