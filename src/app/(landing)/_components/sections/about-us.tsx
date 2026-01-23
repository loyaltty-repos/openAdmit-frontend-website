import Image from "next/image";
import { Award02, Globe02, Shield01, Users01 } from "@/components/icons";

export function AboutUsSection() {
  const features = [
    {
      icon: Shield01,
      title: "Proven Track Record",
      description:
        "130+ admits across M7 and T15 programs, including multiple admits in a single round at Harvard Business School.",
    },
    {
      icon: Globe02,
      title: "Personalized & Quality-Driven Support",
      description:
        "We limit ourselves to just 20 clients per round, ensuring each applicant receives dedicated, focused guidance.",
    },
    {
      icon: Users01,
      title: "Global Success",
      description:
        "Admissions achieved across MBA, MiM, MiF, and other top programs worldwide — including Harvard, Stanford, Columbia, Duke, and beyond.",
    },
    {
      icon: Award02,
      title: "Recognized Excellence",
      description: (
        <div className="flex flex-col gap-2">
          Rated 9.78/10 by Poets & Quants, reflecting our expertise and
          commitment to student success.
          <Image
            src="/images/poets-and-quants-rating.png"
            alt="Poets & Quants"
            width={200}
            height={200}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16 space-y-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mr-auto">
          <h1 className="mb-3 font-semibold text-[#004182]">About Us</h1>
          <h2 className="mb-5 text-3xl sm:text-4xl font-semibold text-[#181D27]">
            Your Ivy League Dreams, Elevated with us
          </h2>
          <p className="text-xl text-[#535862] mb-3">
            Open Admits is led by Ivy League MBA alumni with top admission
            success rates(97%) into elite universities, including Harvard,
            Stanford, Wharton and Columbia.Our team is powered by Ivy League
            graduates who have personally navigated the admissions journey,
            earning multiple admits and scholarships.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="bg-[#0056AD] rounded-lg size-12 flex items-center justify-center mb-4">
                <feature.icon className="size-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#181D27] mb-1">
                {feature.title}
              </h3>
              {/* <p className="text-[#535862]">{feature.description}</p> */}
              <div className="text-[#535862]">
  {typeof feature.description === "string" ? (
    <p>{feature.description}</p>
  ) : (
    feature.description
  )}
</div>

            </div>
          ))}
        </div>
        <div className="relative h-140 w-full">
          <Image
            src="/images/about-us.png"
            alt="About Us"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
