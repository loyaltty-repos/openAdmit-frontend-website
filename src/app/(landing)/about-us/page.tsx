import type { Metadata } from "next";
import { ContactUsSection } from "../_components/sections/contact-us";
import { ServiceHero } from "../services/mba-admissions-consulting/_components/services/hero";
import { AboutUsCta } from "./_components/cta";
import { AboutUsLeadConsultant } from "./_components/lead-consultant";
import { AboutUsStats } from "./_components/stats";
import { AboutUsWhoWeAre } from "./_components/who-we-are";
import { AboutUsWhy } from "./_components/why";

export const metadata: Metadata = {
  title: "About Us | Open Admits – Trusted Admissions Consulting Experts",
  description:
    "Learn about Open Admits, a leading admissions consulting firm. We guide students in undergraduate, graduate, and MBA admissions with proven global success.",
};

export default function Page() {
  return (
    <main>
      <ServiceHero
        banner="About Open Admits"
        title="Guiding Students to Admissions Success Worldwide"
        description="Open Admits provides expert admissions consulting for undergraduate, graduate, and MBA programs, helping students craft standout applications and achieve their academic goals."
      />
      <AboutUsWhoWeAre />
      <AboutUsStats />
      <AboutUsLeadConsultant />
      <AboutUsWhy />
      <AboutUsCta />
      <ContactUsSection />
    </main>
  );
}
