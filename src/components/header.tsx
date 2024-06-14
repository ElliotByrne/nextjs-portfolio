import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link, LinkC } from "./ui/link";
import { TypographyH1, TypographyH2, TypographyP } from "./ui/typography";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import Navigation from "./navigation";
import { cn } from "@/lib/utils";

// Static template on every page.
export default function Header() {
  return (
    <header>
      <div className="flex flex-col gap-4">
        <Avatar>
          <AvatarImage src="profilepic.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <TypographyH1>Elliot Byrne</TypographyH1>
          <TypographyP>Senior Front-End Engineer</TypographyP>
          <TypographyP size="small">Sydney (sun), Australia</TypographyP>
        </div>

        <div className="flex gap-4">
          <LinkC href="https://x.com/elliotbyrn">
            <Twitter className="mr-2 h-4 w-4" />
          </LinkC>
          <LinkC href="https://x.com/elliotbyrn">
            <Linkedin className="mr-2 h-4 w-4" />
          </LinkC>
          <LinkC href="https://x.com/elliotbyrn">
            <Github className="mr-2 h-4 w-4" />
          </LinkC>
        </div>
        <Separator />
      </div>
      <Navigation />
    </header>
  );
}
