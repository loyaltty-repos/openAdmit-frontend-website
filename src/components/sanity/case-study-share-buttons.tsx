"use client";

import { Copy } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook } from "@/components/ui/svgs/facebook";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { X } from "@/components/ui/svgs/x";

interface CaseStudyShareButtonsProps {
  title?: string | null;
}

export function CaseStudyShareButtons({ title }: CaseStudyShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (currentUrl) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="bg-[#FBF7EC] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-16">
        <div className="flex justify-start gap-4">
          <Button
            type="button"
            onClick={handleCopyLink}
            variant="ghost"
            className="gap-2"
          >
            <Copy />
            <span>{copied ? "Copied!" : "Copy link"}</span>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="Share on X (Twitter)"
          >
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title || "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <X />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="Share on Facebook"
          >
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="Share on LinkedIn"
          >
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title || "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
