import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkC } from "./ui/link";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "./ui/typography";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import Navigation from "./navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemInterface {
  title: string;
  subtitle: string;
  active?: boolean;
  children: ReactNode;
}

// Static template on every page.
export function TimelineItem({
  title,
  subtitle,
  active,
  children,
}: TimelineItemInterface) {
  return (
    <div className={cn("pl-8 relative")}>
      <span className={cn("absolute left-0 top-0 h-full")}>
        <span
          className={cn(
            "absolute left-1 top-0 w-1 inline-block h-screen border-black border-r-2"
          )}
        />
        <span
          className={cn(
            "absolute h-3 w-3 rounded-full bg-white left-px top-1.5 border border-black",
            active && "bg-black"
          )}
        />
      </span>
      <TypographyH3>{title}</TypographyH3>
      <TypographyP size="small">{subtitle}</TypographyP>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className={cn("mt-6")}>
      <TypographyH2>Experience</TypographyH2>
      <div className={cn("flex flex-col gap-8 overflow-hidden mt-2")}>
        {children}
      </div>
    </div>
  );
}
