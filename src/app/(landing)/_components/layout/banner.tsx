"use client";

import { XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

export function Banner() {
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("oa_marquee_banner_dismissed");
      if (stored === "true") setDismissed(true);
    } catch {}
  }, []);

  if (dismissed) return null;

  return (
    <div className="mt-16 relative flex w-full items-center gap-3 overflow-hidden px-3 py-2 text-amber-950 ring-1 ring-inset ring-amber-200 [background:linear-gradient(90deg,_#E8CF8A_0%,_#F0DFB1_100%)]">
      <div className="min-w-0 flex-1 overflow-hidden">
        <Marquee pauseOnHover className="[--gap:2.5rem] [--duration:10s]">
          <Link
            href="https://luma.com/n6tbjge2"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-10 inline-block font-medium underline underline-offset-4"
          >
            Free Workshop: Crafting Successful Business School Applications —
            Oct 31 → Join Now
          </Link>
        </Marquee>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setDismissed(true);
          try {
            window.localStorage.setItem("oa_marquee_banner_dismissed", "true");
          } catch {}
        }}
        aria-label="Dismiss announcement"
      >
        <XIcon className="size-4" />
      </Button>
    </div>
  );
}
