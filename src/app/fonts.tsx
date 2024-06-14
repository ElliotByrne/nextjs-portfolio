import { Libre_Baskerville, Instrument_Sans } from "next/font/google";

export const bitter_serif = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
