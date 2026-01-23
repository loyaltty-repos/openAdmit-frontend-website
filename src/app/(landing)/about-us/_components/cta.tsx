import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutUsCta() {
  return (
    <section className="bg-[#002B56] py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Ready to Start Your Journey?
        </h2>
        <Button
          asChild
          size="lg"
          className="w-fit p-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
        >
          <Link href="https://meet.openadmits.com/#/IvyLeague" target="_blank">
            Book Your Free Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
}
