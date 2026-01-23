import Link from "next/link";
import { ServiceHero } from "@/app/(landing)/services/mba-admissions-consulting/_components/services/hero";
import { Button } from "@/components/ui/button";

type Plan = {
  name: string;
  price: string;
  validity: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Indian Business School Package",
    price: "₹66,000",
    validity: "Valid for 12 months",
    features: [
      "1 School Application Package",
      "Comprehensive Application Strategy Session",
      "Professional Resume Review and Edits",
      "Expert Essay Review and Edits",
      "Mock Advising via Phone, Video, and Email",
      "Interview Preparation",
      "Scholarship Application Guidance",
      "Waitlist Support",
      "Background Check Advice",
      "Financial Advice (Banking, Loans)",
      "Personalized Feedback on Additional Application Materials",
    ],
  },
  {
    name: "Bronze Package",
    price: "₹1,32,000",
    validity: "Valid for 12 months",
    features: [
      "1 School Application Package",
      "Comprehensive Application Strategy Session",
      "Tailored School Selection Guidance",
      "Professional Resume Review and Edits",
      "Expert Essay Review and Edits",
      "Mock Advising via Phone, Video, and Email",
      "Interview Preparation",
      "Scholarship Application Guidance",
      "Waitlist Support",
      "Admission Decision Consulting",
      "Background Check Advice",
      "Financial Advice (Banking, Loans)",
      "Access to Exclusive Webinars and Workshops",
      "Personalized Feedback on Additional Application Materials",
    ],
  },
  {
    name: "Silver Package",
    price: "₹3,32,000",
    validity: "Valid for 12 months",
    features: [
      "Up to 3 School Applications",
      "Everything in the Bronze Package",
      "+ Priority Email Support",
      "+ Complimentary Access to Resource Library",
      "+ Additional Mock Interview Session",
      "+ Personalized Application Timeline",
      "Bonus: Early-bird discount on future services.",
    ],
    highlight: true,
  },
  {
    name: "Gold Package",
    price: "₹4,56,000",
    validity: "Valid for 12 months",
    features: [
      "Up to 5 School Applications",
      "Everything in the Silver Package",
      "+ Unlimited Essay Reviews and Edits",
      "+ Dedicated Admissions Consultant",
      "+ Personal Branding Strategy Session",
      "+ Post-Admission Support (Visa & Housing Assistance)",
      "+ Exclusive Insider Tips from Successful Alumni",
      "Bonus: Free enrollment in our Career Development Workshop.",
    ],
  },
  {
    name: "Platinum Package",
    price: "₹4,98,000",
    validity: "Valid for 12 months",
    features: [
      "Up to 7 School Applications",
      "Everything in the Gold Package",
      "+ Exclusive 45-60 Minute Zoom Call with a Career/School Advisor",
      "+ Lifetime Access to All Resources and Updates",
      "+ Networking Opportunities with Alumni and Professionals",
      "+ Career Planning and Internship Placement Assistance",
      "+ Guaranteed 48-Hour Turnaround on All Document Reviews",
      "+ Personalized Scholarship Search and Application Assistance",
    ],
  },
  {
    name: "Rejection Report Analysis",
    price: "₹66,000",
    validity: "Valid for 6 months",
    features: [
      "Comprehensive Application Review and Report",
      "Two 60-Minute Zoom Consultations with an Expert",
      "Discussion on Your Overall Story",
      "Gap Analysis in Your Application",
      "Suggestions to Bridge Identified Gaps",
      "Strategic Next Steps to Improve Your Chances",
      "Plan Upgrade at a Discounted Price",
    ],
  },
  {
    name: "Hourly Consulting",
    price: "₹31,000",
    validity: "Valid for 6 months",
    features: [
      "Time spent on all calls and offline profile work is tracked",
      "All Kickoff calls are minimum 120 minutes",
      "A 3-hour engagement includes the MBA Application Strategy",
      "A 2-hour engagement includes consultation form Strategy",
      "Hours must be used within one year of purchase",
      "Unused hours are non-refundable; please plan well",
      "Two hour minimum charges apply",
      "Full payment is required before any services are delivered",
      "Non refundable once payment is made",
    ],
  },
];

export default function Page() {
  return (
    <main className="bg-[#FBF7EC]">
      <ServiceHero
        banner="Pricing"
        title="Choose Your Pricing Plan"
        description="Find one that works for you. Transparent, flexible, and designed for success."
      />

      <section className="px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group flex h-full flex-col rounded-2xl border border-[#B18F31] bg-[#FBF7EC] px-6 py-8 shadow-sm transition-all duration-300 ease-out hover:bg-linear-to-t hover:from-[#F0DFB1] hover:to-[#F7EFD8] ${plan.highlight ? "ring-2 ring-[#B18F31]" : ""}`}
              >
                <div className="space-y-2">
                  <h3 className="font-semibold text-2xl text-[#00162B]">
                    {plan.name}
                  </h3>
                  <p className="font-bold text-3xl text-[#00162B]">
                    {plan.price}
                  </p>
                  <p className="text-[#59626B] text-sm">{plan.validity}</p>
                </div>
                <ul className="mt-6 list-outside list-disc space-y-2 pl-5 text-[#00162B]">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3 pt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="!bg-transparent rounded-lg border-2 border-[#00162B] px-4 py-2 font-semibold"
                  >
                    <Link
                      href="https://meet.openadmits.com/#/IvyLeague"
                      target="_blank"
                    >
                      Book Your Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
