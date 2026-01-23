import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-16">
      <div className="bg-[#002B56] w-full rounded-2xl p-16 flex flex-col items-center justify-center text-center gap-y-8">
        <div className="space-y-5 max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl text-white">
            Ready to Start Your Journey?
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
      </div>
    </section>
  );
}
