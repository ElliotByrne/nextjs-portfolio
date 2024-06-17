import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  TypographyH2,
  TypographyInlineCode,
  TypographyList,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";

export default function About() {
  return (
    <>
      <TypographyP>
        My toolkit is always evolving, encompassing both hardware and software,
        and I make every effort to keep it current. Let me know if you know of
        any tools worth including or swapping into my arsenal.
      </TypographyP>
      <div className="mt-6">
        <TypographyH2>Hardware</TypographyH2>
        <TypographyList>
          <li>Fully Remi Bamboo Standing Desk</li>
          <li>Macbook Air 13-inch, M3, 2024</li>
          <li>AOC CQ27G3Z QHD 240Hz Adaptive-Sync Curved 27in Monitor</li>
          <li>
            PCCG Pestilence 4080 Super Gaming PC (Intel Core i7 14700K
            Processor, MSI GeForce RTX 4080 Super Gaming X Trio 16GB, Team
            T-Force Delta RGB 32GB (2x16GB) 6000MHz CL38 DDR5)
          </li>
          <li>Keychron K7 Keyboard</li>
          <li>Logitech MX Master 3S Wireless Mouse</li>
          <li>Apple Airpods</li>
          <li>Sony WH-1000XM4 Headphones</li>
          <li>T5 Samsung Portable SSD 1TB</li>
        </TypographyList>
        <TypographyH2>Software</TypographyH2>
        <TypographyList>
          <li>Visual Studio Code - Code editor</li>
          <li>Google Chrome - Browser</li>
          <li>Figma - Prototyping and wireframing</li>
          <li>Spotify - podcasts and music</li>
        </TypographyList>
      </div>
    </>
  );
}
