import { AlertTriangle, BadgeDollarSign, Users, Zap } from "lucide-react";

export function ChallengesSection() {
  const challenges: {
    icon: typeof BadgeDollarSign;
    title: string;
    description: string;
  }[] = [
    {
      icon: BadgeDollarSign,
      title: "Balancing Work & Application",
      description: "Limited time for essays, interviews, and research.",
    },
    {
      icon: Zap,
      title: "Highlighting Leadership Impact",
      description: "Demonstrating professional achievements effectively.",
    },
    {
      icon: Users,
      title: "Selecting the Right Program",
      description:
        "Choosing a program that aligns with career goals and schedule.",
    },
    {
      icon: AlertTriangle,
      title: "Navigating Online EMBA Options",
      description:
        "Understanding differences between in-person and online programs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#002B56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 space-y-12">
        <h2 className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
          Challenges in EMBA Applications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {challenges.slice(0, 3).map((item) => (
            <div key={item.title} className="space-y-2">
              <div className="bg-[#0056AD] rounded-xl size-14 flex items-center justify-center">
                <item.icon className="size-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-[#99C4EF] text-base sm:text-lg max-w-prose">
                {item.description}
              </p>
            </div>
          ))}

          <div className="lg:col-span-3 space-y-2">
            <div className="bg-[#0B63E5] rounded-xl size-14 flex items-center justify-center">
              <AlertTriangle className="size-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg sm:text-2xl">
              {challenges[3].title}
            </h3>
            <p className="text-[#99C4EF] text-base sm:text-lg max-w-4xl">
              {challenges[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
