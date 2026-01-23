import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 flex flex-col gap-y-8 items-center justify-center bg-[#002B56]">
      <div className="space-y-5 max-w-3xl text-center">
        <h1 className="font-bold text-3xl lg:text-4xl text-white">
          Start Your Journey Today
        </h1>
        <p className="text-[#99C4EF] text-lg lg:text-xl">
          With our guidance, you can secure a seat at a top global MBA program
          while still in school, giving you the confidence and freedom to focus
          on building a strong career foundation before starting your MBA
          journey.
        </p>
      </div>
      <Button
        asChild
        size="lg"
        className="w-fit p-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
      >
        <Link href="https://meet.openadmits.com/#/IvyLeague" target="_blank">
          Book Your Free Consultation
        </Link>
      </Button>
    </section>
  );
}
