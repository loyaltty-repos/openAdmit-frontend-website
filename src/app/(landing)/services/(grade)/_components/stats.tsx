import { FileCheck, GraduationCap, HeartHandshake } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: GraduationCap,
      text: "500+ Students Mentored",
    },
    {
      icon: FileCheck,
      text: "Expert essay and strategy guidance",
    },
    {
      icon: HeartHandshake,
      text: "Complete UC and Common App support",
    },
  ];

  return (
    <section className="bg-[#FBF7EC] border-t border-b border-[#D4A574] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.text} className="flex items-center gap-4 sm:gap-6">
                <div className="shrink-0 size-12 sm:size-16 rounded-full bg-white flex items-center justify-center border border-[#E5E5E5]">
                  <Icon className="size-6 sm:size-8 text-[#8B6F47]" />
                </div>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-[#181D27]">
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
