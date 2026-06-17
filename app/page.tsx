import Hero from "./components/home/Hero";
import WhatEmbraceMeans from "./components/home/WhatEmbraceMeans";
import TheFeeling from "./components/home/TheFeeling";
import HowWeDoIt from "./components/home/HowWeDoIt";
import FromTheStandBanner from "./components/home/FromTheStandBanner";
import StayConnected from "./components/home/StayConnected";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatEmbraceMeans />
      <TheFeeling />
      <HowWeDoIt />
      <FromTheStandBanner />
      <StayConnected />
    </>
  );
}
