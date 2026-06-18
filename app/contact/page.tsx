import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import ContactLayout from "../components/contact/ContactLayout";

export const metadata: Metadata = {
  title: "Contact Embrace Strings | Free Fittings, Wholesale, and Support",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLayout />
    </>
  );
}
