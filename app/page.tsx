import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import ChinrestCarousel from "./components/home/ChinrestCarousel";
import ShopPartners from "./components/home/ShopPartners";
import StayConnected from "./components/home/StayConnected";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ChinrestCarousel />
      <ShopPartners />
      <StayConnected />
    </>
  );
}
