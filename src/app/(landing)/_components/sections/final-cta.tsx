import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-16 py-24">
      <div className="w-full rounded-2xl p-16 flex flex-col items-center justify-center text-center gap-y-8 bg-[url('/images/cta-bg.png')] bg-cover bg-center">
        <div className="space-y-5 max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl text-white">
            Join The Elite Circle
          </h1>
          <p className="text-xl text-[#99C4EF]">
            Book a free consultation to discuss your goals and create a
            personalized admissions strategy.
          </p>
        </div>
        <Button asChild className="bg-[#0056AD] hover:bg-[#0056AD]/90">
          <Link href="https://meet.openadmits.com/#/IvyLeague" target="_blank">
            Book Your Free Consultation
          </Link>
        </Button>
        <Button asChild className="bg-white text-[#002B56] hover:bg-white/90">
          <Link href="/success-stories">View Success Stories</Link>
        </Button>
      </div>
    </section>
  );
}
