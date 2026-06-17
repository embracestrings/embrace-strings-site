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
      <SetupGuide />
      <SetupStruggles />
    </>
  );
}
