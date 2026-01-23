import Image from "next/image";

type Program = {
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

const programs: Program[] = [
  {
    title: "Bachelors Programs (BBA, BSc, BA)",
    subtitle:
      "Our experts guide students applying to undergraduate programs, ensuring each application effectively showcases academic achievements and personal strengths.",
    bullets: [
      "Customized essay and application guidance",
      "Academic profile assessment and enhancement",
      "Personalized school selection strategies",
    ],
    image: "/images/services/undergraduate-admissions/programs/bachelors.png",
    imageAlt: "Students celebrating undergraduate admissions",
  },
  {
    title: "Undergraduate Business Programs",
    subtitle:
      "We provide targeted support for students pursuing BBA or business-focused undergraduate degrees, emphasizing leadership potential and career readiness.",
    bullets: [
      "Emphasis on business achievements and extracurriculars",
      "Tailored application strategy for top business schools",
      "Interview preparation for business program admissions",
    ],
    image: "/images/services/undergraduate-admissions/programs/bba.png",
    imageAlt: "Undergraduate business program preparation",
  },
  {
    title: "STEM & Liberal Arts Programs",
    subtitle:
      "Our specialized team helps applicants showcase strengths in science, technology, engineering, mathematics, and liberal arts, ensuring applications reflect both skill and passion.",
    bullets: [
      "Highlight academic and research accomplishments",
      "Strong narrative for extracurricular and personal achievements",
      "Guidance for competitive program requirements",
    ],
    image: "/images/services/undergraduate-admissions/programs/bachelors.png",
    imageAlt: "STEM and liberal arts preparation",
  },
  {
    title: "Top International & Ivy League Universities",
    subtitle:
      "We assist students aiming for elite institutions, focusing on crafting highly competitive applications that stand out in a global pool.",
    bullets: [
      "Expert insights on Ivy League and top global university expectations",
      "Strategic application planning and timeline management",
      "Tailored essays and recommendation guidance",
    ],
    image: "/images/services/undergraduate-admissions/programs/bba.png",
    imageAlt: "Top international and Ivy League applications",
  },
];

export function UnderGraduateServicesPrograms() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-16 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#181D27]">
          Programs We Focus On
        </h2>
        <p className="text-[#535862] text-base sm:text-lg mt-4">
          Structured guidance tailored to your background and goals across top
          undergraduate programs.
        </p>
      </div>

      <div className="space-y-20">
        {programs.map((program, index) => (
          <div
            key={program.title}
            className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <h3 className="text-[#181D27] font-semibold text-[24px] sm:text-[32px]">
                {program.title}
              </h3>
              <p className="text-[#535862] mt-4 text-base sm:text-lg max-w-xl">
                {program.subtitle}
              </p>
              <ul className="mt-6 space-y-3 text-[#535862]">
                {program.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-[#535862]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-80 lg:min-h-140 w-full">
              <Image
                src={program.image}
                alt={program.imageAlt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
