"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function CaseStudiesHero() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-[url('/images/case-studies-bg.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#99C4EF] font-semibold">Browse Success Stories</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Student Success Stories
          </h1>
          <p className="mt-4 text-[#99C4EF]">
            Explore case studies of OpenAdmits students.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="pl-9 bg-white"
                aria-label="Search case studies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
