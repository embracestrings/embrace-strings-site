import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Embrace Strings | Adjustable Violin Chinrest for Comfort and Fit",
    template: "%s | Embrace Strings",
  },
  description:
    "Tool-free adjustable chinrests for violinists and violists. Designed by string players for comfort, fit, and uncompromised sound.",
  metadataBase: new URL("https://embracestrings.com"),
  openGraph: {
    siteName: "Embrace Strings",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f2f2f3] text-[#16335b]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
