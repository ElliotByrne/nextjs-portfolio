import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkC } from "./ui/link";
import { TypographyH1, TypographyH2, TypographyP } from "./ui/typography";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import Navigation from "./navigation";
import { cn } from "@/lib/utils";

// Static template on every page.
export default function Footer() {
  return (
    <footer className="mt-10">
      <TypographyP size="small">
        © {new Date().getFullYear()} - Elliot Byrne.
      </TypographyP>
    </footer>
  );
}
