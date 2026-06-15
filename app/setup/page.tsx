import type { Metadata } from "next";
import SetupHero from "../components/setup/SetupHero";
import SetupGuide from "../components/setup/SetupGuide";
import SetupStruggles from "../components/setup/SetupStruggles";

export const metadata: Metadata = {
  title: "Violin Chinrest Setup Guide | Installation and Care",
};

export default function SetupPage() {
  return (
    <>
      <SetupHero />
      <div className="h-px w-full bg-[#ba9e78]/35" />
      <SetupGuide />
      <SetupStruggles />
    </>
  );
}
