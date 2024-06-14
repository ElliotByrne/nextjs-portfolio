import { ReactNode } from "react";
import { bitter_serif } from "../../app/fonts";
import { cn } from "@/lib/utils";

interface TypographyInterface {
  children: ReactNode;
  size?: "small";
}

export function TypographyP({ children, size }: TypographyInterface) {
  return <p className={cn("", size === "small" && "text-sm")}>{children}</p>;
}

export function TypographyH1({ children }: TypographyInterface) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-xl font-bold tracking-tight font-serif",
        bitter_serif.variable
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: TypographyInterface) {
  return (
    <h2 className="scroll-m-20 pb-2 text-lg font-medium tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: TypographyInterface) {
  return (
    <h3 className="scroll-m-20 text-md font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: TypographyInterface) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyBlockquote({ children }: TypographyInterface) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyList({ children }: TypographyInterface) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyInlineCode({ children }: TypographyInterface) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}
