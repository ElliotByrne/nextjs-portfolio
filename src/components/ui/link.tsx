import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import Link from "next/link";

export function LinkC({
  children,
  ...rest
}: {
  children: ReactNode;
  href: string;
}) {
  return <Link {...rest}>{children}</Link>;
}
