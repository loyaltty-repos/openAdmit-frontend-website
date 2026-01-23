import { Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProgramsSection() {
  const bullets: { title: string; description: string }[] = [
    {
      title:
        "Specialized experience with HBS 2+2, Yale Silver Scholars, Wharton Advance Access, ISB YLP, and more",
      description: "",
    },
    {
      title:
        "Proven record of successful admits into top deferred MBA programs.",
      description: "",
    },
    {
      title: "1:1 mentoring focused on your long-term career story.",
      description: "",
    },
    {
      title: "Unlimited editing & support until your application is submitted.",
      description: "",
    },
  ];

  const programs: { name: string; src: string }[] = [
    {
      name: "Harvard Business School 2+2",
      src: "/images/mba/schools/Logo Frame-0.png",
    },
    {
      name: "Yale Silver Scholars",
      src: "/images/mba/schools/Logo Frame-1.png",
    },
    {
      name: "Stanford GSB Deferred Enrollment",
      src: "/images/mba/schools/Logo Frame-2.png",
    },
    {
      name: "Wharton Moelis Advance Access",
      src: "/images/mba/schools/Logo Frame-3.png",
    },
    {
      name: "Chicago Booth Scholars",
      src: "/images/mba/schools/Logo Frame-4.png",
    },
    {
      name: "Columbia Business School Deferred Enrollment",
      src: "/images/mba/schools/Logo Frame-5.png",
    },
    {
      name: "INSEAD Early Admission Program",
      src: "/images/mba/schools/Logo Frame-6.png",
    },
    {
      name: "ISB Young Leaders Programme (YLP)",
      src: "/images/mba/schools/Logo Frame-7.png",
    },
    {
      name: "Kellogg Future Leaders Program",
      src: "/images/mba/schools/Logo Frame-8.png",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3">
          <h2 className="text-[#181D27] text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Why Choose Our Deferred MBA Packages?
          </h2>
          <p className="text-[#535862] max-w-3xl text-base sm:text-xl">
            Unlimited editing & support until your application is submitted.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-12">
            {bullets.map((b) => (
              <div key={b.title} className="flex gap-8">
                <div className="size-10 shrink-0 rounded-lg bg-[#12B76A]/20 flex items-center justify-center">
                  <Check className="size-5 text-[#12B76A]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#181D27] text-lg sm:text-2xl font-semibold">
                    {b.title}
                  </h3>
                  <p className="text-[#535862] text-sm sm:text-lg max-w-xl">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map((program, index) => (
              <div
                key={program.name}
                className={cn(
                  "rounded-xl bg-white border border-[#E9EAEB] shadow-sm",
                  index % 3 === 2 && "sm:col-span-2",
                )}
              >
                <div className="rounded-lg bg-white flex items-center justify-center">
                  <div className="relative h-18 max-w-40 w-full">
                    <Image
                      src={program.src}
                      alt={program.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
