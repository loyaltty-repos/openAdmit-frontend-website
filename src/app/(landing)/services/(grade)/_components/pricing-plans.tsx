import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PricingPlansProps {
  badge: string;
  heading: string;
  note: string;
  plans: Array<{ title: string; includesText?: string; features: string[] }>;
  compareLink: string;
  compareText: string;
  customPricingLink: string;
  customPricingText: string;
}

export function PricingPlans({
  badge,
  heading,
  note,
  plans,
  compareLink,
  compareText,
  customPricingLink,
  customPricingText,
}: PricingPlansProps) {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm sm:text-base text-[#0056AD] font-medium">
            {badge}
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181D27]">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl lg:text-2xl font-semibold p-6 lg:p-8 border-b border-gray-200 text-[#181D27] mb-6">
                {plan.title}
              </h3>

              <div className="space-y-4 p-6 lg:p-8">
                <p className="font-bold text-[#181D27] text-sm uppercase tracking-wide">
                  Features
                </p>

                {plan.includesText && (
                  <p className="text-[#535862] text-sm sm:text-base mb-4">
                    {plan.includesText}
                  </p>
                )}

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[#181D27]"
                    >
                      <Check className="size-5 text-[#0056AD] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 mt-8 text-center">
          <p className="text-[#535862] text-sm sm:text-base">{note}</p>
        </div>

        <div className="mt-12 flex flex-col gap-4 justify-center items-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-[#0056AD] text-white hover:bg-[#0056AD]/90 rounded-lg px-6 py-3 font-medium"
          >
            <Link href={customPricingLink} target="_blank">
              {customPricingText}
            </Link>
          </Button>
          <Button asChild variant="link">
            <Link href={compareLink} target="_blank">
              {compareText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
