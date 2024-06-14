"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const useGetActiveLink = (str: string) =>
  usePathname() === str ? "default" : "link";

// Static template on every page.
export default function Navigation() {
  const router = useRouter();

  return (
    <div className="flex gap-4 mt-4 mb-10 align-start flex-wrap">
      <Button
        size="sm"
        variant={useGetActiveLink("/")}
        onClick={() => router.push("/")}
      >
        About
      </Button>
      <Button
        size="sm"
        variant={useGetActiveLink("/blog")}
        onClick={() => router.push("/blog")}
      >
        Blog
      </Button>
      <Button
        size="sm"
        variant={useGetActiveLink("/tools")}
        onClick={() => router.push("/tools")}
      >
        Tools
      </Button>
      <Button
        size="sm"
        variant={useGetActiveLink("/contact")}
        onClick={() => router.push("/contact")}
      >
        {" "}
        Contact
      </Button>
    </div>
  );
}
