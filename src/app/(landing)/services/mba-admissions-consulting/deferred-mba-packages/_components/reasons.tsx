import { AlertTriangle, MessageSquareText, Zap } from "lucide-react";
import Image from "next/image";

export function ReasonsSection() {
  const reasons = [
    {
      icon: MessageSquareText,
      title: "Guaranteed admit early",
      description:
        "You secure your MBA seat while still in undergrad or grad school, before entering the workforce.",
    },
    {
      icon: Zap,
      title: "Career freedom",
      description:
        "With admission locked in, you can take risks: join startups, pursue social impact work, or explore non-traditional roles without worrying about future MBA admissions.",
    },
    {
      icon: AlertTriangle,
      title: "Scholarship potential",
      description:
        "Many deferred admits are awarded fellowships or merit-based funding at the time of acceptance.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#181D27]">
            Why is Deferred MBA Different ?
          </h2>
          <p className="text-[#535862] max-w-2xl text-xl">
            Deferred programs are among the most competitive entry routes in the
            MBA world. Deferred MBA programs combine the prestige of early
            admission with the flexibility of joining later.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="bg-white rounded-xl size-14 flex items-center justify-center shrink-0">
                  <reason.icon className="size-6 text-[#181D27]" />
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
              src="/images/mba/services/deferred-mba/reasons.png"
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
