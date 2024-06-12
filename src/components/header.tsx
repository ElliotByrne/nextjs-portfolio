import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link, LinkC } from "./ui/link";
import { TypographyH1, TypographyH2, TypographyP } from "./ui/typography";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import Navigation from "./navigation";

// Static template on every page.
export default function Header() {
  return (
    <>
      <Avatar>
        <AvatarImage src="profilepic.jpeg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <TypographyH1>Elliot Byrne</TypographyH1>
      <TypographyH2>Senior Front-End Engineer at Companion Group</TypographyH2>
      <TypographyP>Sydney, Australia</TypographyP>
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
      <Navigation />
    </>
  );
}
