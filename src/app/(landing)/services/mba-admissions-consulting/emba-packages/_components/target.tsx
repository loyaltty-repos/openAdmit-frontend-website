import { AlertTriangle, MessageSquareText, Zap } from "lucide-react";
import Image from "next/image";

export function TargetSection() {
  const reasons = [
    {
      icon: MessageSquareText,
      title: "Working Professionals in the U.S.",
      description:
        "Advance your education without interrupting your career or daily commitments.",
    },
    {
      icon: Zap,
      title: "Executives Seeking Leadership Growth",
      description:
        "Develop strategic thinking, management capabilities, and executive presence.",
    },
    {
      icon: AlertTriangle,
      title: "Applicants Targeting Top U.S. Programs",
      description:
        "Receive expert guidance to navigate competitive executive MBA admissions.",
    },
    {
      icon: AlertTriangle,
      title: "Candidates Exploring Online EMBA Programs",
      description:
        "Benefit from flexible, high-quality learning while balancing professional responsibilities.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#181D27]">
            Who Should Choose Our EMBA Packages?
          </h2>
          <p className="text-[#535862] max-w-2xl text-xl">
            Our EMBA consulting services are designed for professionals looking
            to accelerate their careers, enhance leadership skills, and gain
            admission to top U.S. programs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="bg-[#0056AD] rounded-xl size-14 flex items-center justify-center shrink-0">
                  <reason.icon className="size-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[#181D27] font-semibold text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-[#535862] max-w-xl">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full h-80 sm:h-[28rem] lg:h-140 overflow-hidden">
            <Image
              src="/images/mba/services/emba/target.png"
              alt="Deferred MBA Reasons"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
