import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutUsLeadConsultant() {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="my-auto space-y-12">
          <h1 className="font-semibold text-3xl lg:text-4xl text-[#181D27]">
            Meet Your Lead Consultant
          </h1>
          <div className="text-lg text-[#535862] whitespace-break-spaces">
            <p>
              Sridhar, a Columbia Business School graduate and Ivy League
              admissions strategist, has personally guided more than 130
              candidates into top M7 and T15 programs, collectively securing
              over $7 million in scholarships. Combining 94th-percentile scores
              on the GRE and GMAT with deep storytelling expertise, he helps
              applicants translate their achievements into narratives that
              inspire and persuade. Featured on Poets & Quants and consistently
              rated 9.78/10 by students, Sridhar is known for his hands-on,
              high-touch mentorship that blends analytical precision with
              creative vision — helping every client present their most
              compelling and authentic self to the world’s leading universities.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Button
              asChild
              size="lg"
              className="w-fit p-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
            >
              <Link
                href="https://meet.openadmits.com/#/IvyLeague"
                target="_blank"
              >
                Book Your Free Consultation
              </Link>
            </Button>
            <Image
              src="/images/poets-and-quants-rating.png"
              alt="Poets & Quants"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="relative h-60 lg:h-160 w-full">
          <Image
            src="/images/about-us/sridhar.png"
            alt="Sridhar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
