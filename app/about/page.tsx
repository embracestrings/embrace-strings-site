import type { Metadata } from "next";
import Story from "../components/about/Story";
import Values from "../components/about/Values";
import Team from "../components/about/Team";

export const metadata: Metadata = {
  title: "About Embrace Strings | Our Story and Team",
};

export default function AboutPage() {
  return (
    <>
      <Story />
      <div className="h-px w-full bg-[#ba9e78]/35" />
      <Values />
      <div className="h-px w-full bg-[#ba9e78]/35" />
      <Team />
    </>
  );
}
