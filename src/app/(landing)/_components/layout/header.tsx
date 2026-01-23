"use client";

import {
  BookOpen,
  ChevronRight,
  ExternalLink,
  FileText,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { env } from "@/env";


export function Header() {
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>("mba");
const pathname = usePathname();
  const searchParams = useSearchParams();

  const [receivedKeyword, setReceivedKeyword] = useState<string | null>(null);
const SIGNIN_URL = env.NEXT_PUBLIC_SIGNIN_URL;
// console.log(SIGNIN_URL)
useEffect(() => {
  let keyword;
  try {
    const data = window.name ? JSON.parse(window.name) : null;
    keyword = data?.navKeyword;
  } catch {
    keyword = window.name;
  }

  if (keyword) {
    setReceivedKeyword(keyword);
  }
}, [pathname]);

  const goToLink = (url: string) => {
    router.push(url);
    setSheetOpen(false);
  };
const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();          
  window.name = "";           
  setReceivedKeyword(null);   
   if (SIGNIN_URL) {
    window.location.href = SIGNIN_URL;
  }   
};
  return (
 <header className="-my-8 sticky top-0 z-100 bg-[#031A30]/95 py-4 text-white backdrop-blur-sm">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-16">
    {/* 1. Logo - Always on the left */}
    <Link href="/">
      <Image
        src="/images/logo-light.svg"
        alt="Logo"
        width={150}
        height={20}
      />
    </Link>

    {/* 2. Desktop Navigation - Only visible on md+ screens, centered using flex-1 + justify-center */}
    <nav className="hidden md:flex flex-1 justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-[#f2e3bb]/10 hover:text-[#F2E3BB]">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#00162B]">
              <div className="p-4 md:w-[720px] lg:w-[920px]">
                {/* biome-ignore lint/a11y: Mouse events on container are needed for hover menu behavior */}
                <div
                  className="grid grid-cols-1 gap-6 md:grid-cols-12"
                  onMouseLeave={() => setHoveredCategory("mba")}
                >
                  {/* Left column: Categories */}
                  <div className="flex flex-col gap-8 rounded-lg bg-[#071F37] p-4 md:col-span-5">
                    <div>
                      <div className="mb-2 text-sm text-white/60 uppercase tracking-wider">
                        Category
                      </div>
                      <Link
                        href="/services/mba-admissions-consulting"
                        className="flex items-center justify-between font-semibold text-white text-xl hover:text-[#F2E3BB] transition-colors"
                        onMouseEnter={() => setHoveredCategory("mba")}
                      >
                        MBA Admissions Consulting
                        <ChevronRight className="h-5 w-5 text-white/60" />
                      </Link>
                    </div>

                    <div className="space-y-6 text-xl">
                      <div>
                        <Link
                          href="/services/graduate-admissions"
                          className="mb-2 font-semibold text-white"
                        >
                          Master’s
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/services/undergraduate-admissions"
                          className="mb-2 font-semibold text-white"
                        >
                          Undergrad
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/services/6th-8th-grade"
                          className="flex items-center justify-between font-semibold text-white text-xl hover:text-[#F2E3BB] transition-colors"
                          onMouseEnter={() =>
                            setHoveredCategory("pre-college")
                          }
                        >
                          Pre-College Programs
                          <ChevronRight className="h-5 w-5 text-white/60" />
                        </Link>
                      </div>

                      <div>
                        <Link
                          href="/services/a-la-carte-services"
                          className="mb-2 font-semibold text-white"
                        >
                          A-La-Carte Services
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right column: Sub-items based on hovered category */}
                  <div className="md:col-span-7">
                    {hoveredCategory === "mba" ? (
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/services/mba-admissions-consulting/comprehensive-mba-packages"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            Comprehensive MBA Packages
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/mba-admissions-consulting/deferred-mba-packages"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            Deferred MBA Packages
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/mba-admissions-consulting/emba-packages"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            EMBA packages
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/mba-admissions-consulting/mba-interview-preparation"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            MBA interview Preparation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/mba-admissions-consulting/mba-ding-analysis"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            MBA Ding Analysis
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/services/6th-8th-grade"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            6th-8th Grade
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/9th-10th-grade"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            9th-10th Grade
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/11th-grade"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            11th Grade
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/12th-grade"
                            className="block rounded-md p-3 font-semibold text-lg text-white hover:bg-[#0C2A4A]"
                          >
                            12th Grade
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-white/90 hover:text-[#F2E3BB]"
            >
              <Link href="/success-stories">Success Stories</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white/90 hover:bg-[#f2e3bb1a] hover:text-[#F2E3BB]">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#00162B]">
              <div className="w-70 gap-2 p-3">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 rounded-md p-3 hover:bg-accent/20"
                >
                  <BookOpen className="size-5 text-white" />
                  <div className="font-medium text-white">Blog</div>
                </Link>
                <Link
                  href="/case-studies"
                  className="flex items-center gap-2 rounded-md p-3 hover:bg-accent/20"
                >
                  <FileText className="size-5 text-white" />
                  <div className="font-medium text-white">Case Studies</div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-white/90 hover:text-[#F2E3BB]"
            >
              <Link href="/about-us">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-white/90 hover:text-[#F2E3BB]"
            >
              <Link href="https://tally.so/r/wdBxJK">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Commented items kept exactly as in your original code */}
          {/* <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="flex flex-row items-center gap-2 text-[#F2E3BB] hover:text-[#F2E3BB] rounded-md px-3 py-2 hover:bg-[#F2E3BB]/10"
            >
              <Link href="https://luma.com/user/openatlas" target="_blank">
                Free Webinar
                <ExternalLink className="size-4" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem> */}

          {/* <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-white/90 hover:text-[#F2E3BB]"
            >
              <Link href="/pricing-plans/inr">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    {/* This div pushes the mobile menu button to the right on mobile (restores original behavior) */}
    <div className="grow md:hidden"></div>

    {/* 3. Sign In + Book Consultation Buttons - Only visible on desktop, aligned to the right */}
    <div className="hidden md:flex items-center space-x-2">
      <Button
        asChild
        variant="outline"
        className="group cursor-pointer gap-1 rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
      >
  <Link
  href={SIGNIN_URL}
  onClick={receivedKeyword ? handleDashboardClick : undefined}
>
  {receivedKeyword ? "Dashboard" : "Student Login"}
  <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
</Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="group cursor-pointer gap-1 rounded-full border-[#F2E3BB] bg-transparent text-[#F2E3BB] hover:bg-transparent hover:text-[#F2E3BB]"
      >
        <Link href="https://meet.openadmits.com/#/IvyLeague" target="_blank">
          Book Your Free Consultation
          <ChevronRight className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>

    {/* Mobile Menu Button - Only visible on mobile */}
    <div className="md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Menu className="mr-2 h-5 w-5" />
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="z-60 inset-x-0 top-[68px] h-[calc(100vh-68px)] w-full border-white/10 bg-[#00162B] p-0 text-white"
        >
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="p-4">
              <Accordion
                type="single"
                collapsible
                defaultValue="services"
                className="w-full p-3"
              >
                <AccordionItem value="services" className="border-none">
                  <AccordionTrigger className="py-4 text-left text-lg font-semibold text-white hover:no-underline">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-4">
                      <div>
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full"
                        >
                          <AccordionItem
                            value="mba-consulting"
                            className="border-none"
                          >
                            <AccordionTrigger className="py-2 text-left font-semibold text-white hover:no-underline">
                              MBA Admissions Consulting
                            </AccordionTrigger>
                            <AccordionContent className="pb-2">
                              <div className="space-y-2 pl-4">
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink(
                                      "/services/mba-admissions-consulting/comprehensive-mba-packages",
                                    )
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  Comprehensive MBA Packages
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink(
                                      "/services/mba-admissions-consulting/deferred-mba-packages",
                                    )
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  Deferred MBA Packages
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink(
                                      "/services/mba-admissions-consulting/emba-packages",
                                    )
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  EMBA packages
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink(
                                      "/services/mba-admissions-consulting/mba-interview-preparation",
                                    )
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  MBA interview Preparation
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink(
                                      "/services/mba-admissions-consulting/mba-ding-analysis",
                                    )
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  MBA Ding Analysis
                                </button>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="gap-y-4 flex flex-col">
                        <button
                          type="button"
                          onClick={() =>
                            goToLink("/services/graduate-admissions")
                          }
                          className="mb-2 text-left font-semibold text-white"
                        >
                          Master's
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            goToLink("/services/undergraduate-admissions")
                          }
                          className="mb-2 text-left font-semibold text-white"
                        >
                          Undergrad
                        </button>
                      </div>

                      <div>
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full"
                        >
                          <AccordionItem
                            value="pre-college-programs"
                            className="border-none"
                          >
                            <AccordionTrigger className="py-2 text-left font-semibold text-white hover:no-underline">
                              Pre-College Programs
                            </AccordionTrigger>
                            <AccordionContent className="pb-2">
                              <div className="space-y-2 pl-4">
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink("/services/6th-8th-grade")
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  Grades 6-8
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink("/services/9th-10th-grade")
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  Grades 9-10
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink("/services/11th-grade")
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  Grade 11
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    goToLink("/services/12th-grade")
                                  }
                                  className="block w-full rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                                >
                                  Grade 12
                                </button>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="gap-y-4 flex flex-col">
                        <button
                          type="button"
                          onClick={() =>
                            goToLink("/services/a-la-carte-services")
                          }
                          className="mb-2 text-left font-semibold text-white"
                        >
                          A-La-Carte Services
                        </button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={() => goToLink("/success-stories")}
                  className="block w-full rounded-md p-3 text-left text-lg font-medium text-white hover:bg-[#0C2A4A]"
                >
                  Success Stories
                </button>

                <Accordion type="single" collapsible className="w-full p-3">
                  <AccordionItem value="resources" className="border-none">
                    <AccordionTrigger className="py-3 text-left text-lg font-medium text-white hover:no-underline">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      <button
                        type="button"
                        onClick={() => goToLink("/blog")}
                        className="flex w-full items-center gap-2 rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                      >
                        <BookOpen className="size-4 text-white" />
                        <div className="font-medium text-white">Blog</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => goToLink("/case-studies")}
                        className="flex w-full items-center gap-2 rounded-md p-3 text-left text-white hover:bg-[#0C2A4A]"
                      >
                        <FileText className="size-4 text-white" />
                        <div className="font-medium text-white">
                          Case Studies
                        </div>
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <button
                  type="button"
                  onClick={() => goToLink("/about-us")}
                  className="block w-full rounded-md p-3 text-left text-lg font-medium text-white hover:bg-[#0C2A4A]"
                >
                  About Us
                </button>
                <button
                  type="button"
                  onClick={() => goToLink("https://tally.so/r/wdBxJK")}
                  className="block w-full rounded-md p-3 text-left text-lg font-medium text-white hover:bg-[#0C2A4A]"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile bottom buttons - Sign In & Book Consultation */}
            <div className="mt-auto border-t border-white/10 p-4 space-y-2">
              <Button
                asChild
                variant="outline"
                className="w-full cursor-pointer gap-1 rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
      <Link
  href={SIGNIN_URL}
  onClick={receivedKeyword ? handleDashboardClick : undefined}
>
  {receivedKeyword ? "Dashboard" : "Student Login"}
  <ChevronRight className="ml-1 h-4 w-4" />
</Link>

              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full cursor-pointer gap-1 rounded-full border-[#F2E3BB] bg-transparent text-[#F2E3BB] hover:bg-transparent hover:text-[#F2E3BB]"
              >
                <Link href="https://meet.openadmits.com/#/IvyLeague" target="_blank">
                  Book Your Free Consultation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>
  );
}
