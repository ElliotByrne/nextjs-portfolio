"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

// Static template on every page.
export default function Navigation() {
  const router = useRouter();
  return (
    <div className="flex gap-4 margin-bottom-24">
      <Button onClick={() => router.push("/")}>About</Button>
      <Button onClick={() => router.push("/blog")}>Blog</Button>
      <Button onClick={() => router.push("/tools")}>Tools</Button>
      <Button onClick={() => router.push("/contact")}> Contact</Button>
    </div>
  );
}
