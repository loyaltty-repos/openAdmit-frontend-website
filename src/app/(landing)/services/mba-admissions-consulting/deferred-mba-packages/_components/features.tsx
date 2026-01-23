import { Expand, RotateCcw, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: RotateCcw,
      title: "Lock in Admission Early",
      description: "Gain peace of mind by securing a seat before graduation.",
    },
    {
      icon: Zap,
      title: "Accelerate Your Career",
      description:
        "Focus on meaningful pre‑MBA experiences knowing your MBA future is secure.",
    },
    {
      icon: Expand,
      title: "Global Advantage",
      description:
        "Join elite business school networks years before you step into the classroom.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16 bg-[#002B56]">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 text-4xl sm:text-5xl leading-tight font-bold text-white">
          What is a Deferred MBA?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="bg-[#0056AD] rounded-xl size-16 flex items-center justify-center">
                <item.icon className="size-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-[#99C4EF] text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
