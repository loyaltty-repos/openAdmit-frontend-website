import Image from "next/image";
import { Award02, Globe02, Shield01, Users01 } from "@/components/icons";

export function WhySection() {
  const features = [
    {
      icon: Shield01,
      title: "Experienced Consultants",
      description:
        "Alumni and experts familiar with M7, T15, and Ivy League expectations.",
    },
    {
      icon: Globe02,
      title: "Proven Success",
      description: "Hundreds of admits across MBA and specialized programs.",
    },
    {
      icon: Users01,
      title: "Tailored Support",
      description: "Customized strategies to fit each applicant’s profile.",
    },
    {
      icon: Award02,
      title: "Comprehensive Guidance",
      description:
        "End-to-end support from essays and recommendations to interviews.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16 space-y-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mr-auto">
          <h2 className="mb-5 text-3xl sm:text-4xl font-semibold text-[#181D27]">
            Why Choose Us
          </h2>
          <p className="text-xl text-[#535862] mb-3">
            OpenAdmits combines Ivy League expertise with personalized,
            results-driven guidance.
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
              <p className="text-[#535862]">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="relative h-140 w-full">
          <Image
            src="/images/mba/services/comprehensive-mba/why.png"
            alt="About Us"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
