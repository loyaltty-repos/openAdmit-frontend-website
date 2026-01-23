"use client";

import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { urlFor } from "@/sanity/lib/image";
import type {
  CASE_STUDIES_QUERYResult,
  CASE_STUDY_CATEGORIES_QUERYResult,
} from "../../../sanity.types";

export function CaseStudies({
  caseStudies: allCaseStudies,
  categories,
}: {
  caseStudies: CASE_STUDIES_QUERYResult;
  categories: CASE_STUDY_CATEGORIES_QUERYResult;
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<
    "recent" | "oldest" | "title-asc" | "title-desc"
  >("recent");

  const count = useMemo(() => {
    const count: Record<string, number> = {
      all: allCaseStudies.length,
    };

    categories.forEach((category) => {
      count[category.title as string] = allCaseStudies.filter(
        (caseStudy) => caseStudy.category === category.title,
      ).length;
    });

    return count;
  }, [allCaseStudies, categories]);

  const caseStudies = useMemo(() => {
    if (selectedCategory === "all") {
      return allCaseStudies;
    }

    return allCaseStudies.filter(
      (caseStudy) => caseStudy.category === selectedCategory,
    );
  }, [selectedCategory, allCaseStudies]);

  const sortedCaseStudies = useMemo(() => {
    const items = [...caseStudies];
    if (sortBy === "recent") {
      items.sort((a, b) => {
        const ad = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const bd = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return bd - ad;
      });
    } else if (sortBy === "oldest") {
      items.sort((a, b) => {
        const ad = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const bd = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return ad - bd;
      });
    } else if (sortBy === "title-asc") {
      items.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortBy === "title-desc") {
      items.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    }
    return items;
  }, [caseStudies, sortBy]);

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 px-4 sm:px-16">
        <div className="flex w-full items-center justify-center">
          <div className="relative flex w-full max-w-4xl flex-wrap items-center justify-start gap-2 border-b border-border pb-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              aria-pressed={selectedCategory === "all"}
              className={`group inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm transition-colors ${
                selectedCategory === "all"
                  ? "bg-transparent text-primary"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>View all</span>
              <span
                className={`rounded-full bg-background px-2 py-0.5 text-xs shadow-sm ring-1 ring-border ${selectedCategory === "all" ? "" : "opacity-90"}`}
              >
                {count.all}
              </span>
            </button>
            {categories
              .filter((c) => Boolean(c.title))
              .map((category) => {
                const title = category.title as string;
                const isActive = selectedCategory === title;
                return (
                  <button
                    key={category._id}
                    type="button"
                    onClick={() => setSelectedCategory(title)}
                    aria-pressed={isActive}
                    className={`group inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm transition-colors ${
                      isActive
                        ? "bg-transparent text-primary"
                        : "bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{title}</span>
                    <span
                      className={`rounded-full bg-background px-2 py-0.5 text-xs shadow-sm ring-1 ring-border ${isActive ? "" : "opacity-90"}`}
                    >
                      {count[title] ?? 0}
                    </span>
                  </button>
                );
              })}
            <div className="ml-auto">
              <Select
                value={sortBy}
                onValueChange={(v) => setSortBy(v as typeof sortBy)}
              >
                <SelectTrigger size="sm" aria-label="Sort case studies">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most recent</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="title-asc">Title A–Z</SelectItem>
                  <SelectItem value="title-desc">Title Z–A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {sortedCaseStudies.map(
            (caseStudy) =>
              caseStudy.slug && (
                <Link
                  key={caseStudy._id}
                  href={`/case-studies/${caseStudy.slug.current}`}
                  className="flex flex-col overflow-clip rounded-xl border border-border"
                >
                  <div className="relative aspect-[16/9] w-full">
                    {caseStudy.mainImage ? (
                      <Image
                        src={urlFor(caseStudy.mainImage?.asset?._ref ?? "")
                          .width(600)
                          .height(400)
                          .url()}
                        alt={caseStudy.title ?? "Case study image"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className="flex flex-grow flex-col px-6 py-8">
                    <div className="flex-grow">
                      <h3 className="mb-3 line-clamp-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                        {caseStudy.title}
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <p className="mb-4 text-sm text-muted-foreground">
                        {caseStudy.publishedAt &&
                          format(
                            new Date(caseStudy.publishedAt),
                            "do MMMM, yyyy",
                          )}
                      </p>
                      <p className="flex items-center hover:underline">
                        Read more
                        <ArrowRight className="ml-2 size-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
