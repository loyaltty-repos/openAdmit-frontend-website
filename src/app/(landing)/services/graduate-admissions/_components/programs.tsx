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
    title: "Masters in Management (MIM)",
    subtitle:
      "Designed for early-career professionals, our MIM consulting services emphasize leadership potential and academic excellence.",
    bullets: [
      "Strategic School Selection: Identify programs that align with your career goals.",
      "Compelling Application Essays: Craft narratives that highlight your strengths and aspirations.",
      "Interview Coaching: Prepare effectively for admissions interviews.",
    ],
    image: "/images/services/graduate-admissions/programs/mim.png",
    imageAlt: "Management class presentation",
  },
  {
    title: "Masters in Finance (MIF)",
    subtitle:
      "Our MIF consulting focuses on showcasing your quantitative skills and financial acumen to top finance programs.",
    bullets: [
      "Resume Optimization: Highlight relevant experiences and achievements.",
      "Essay Guidance: Develop essays that demonstrate your passion for finance.",
      "Mock Interviews: Simulate real interview scenarios to boost confidence.",
    ],
    image: "/images/services/graduate-admissions/programs/mif.png",
    imageAlt: "Finance program discussion",
  },
  {
    title: "Masters in Information Systems (MIS)",
    subtitle:
      "Tailored for tech enthusiasts, our MIS consulting services emphasize technical expertise and innovation.",
    bullets: [
      "Project Portfolio Review: Showcase relevant projects and technical skills.",
      "Application Strategy: Develop a cohesive narrative that aligns with program objectives.",
      "Interview Preparation: Prepare for both technical and behavioral interview questions.",
    ],
    image: "/images/services/graduate-admissions/programs/mis.png",
    imageAlt: "Students studying in library",
  },
];

export function GraduateServicesPrograms() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-16 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-serif font-bold text-[#181D27]">
          Programs We Focus On
        </h2>
        <p className="text-[#535862] text-base sm:text-lg mt-4">
          Structured guidance tailored to your background and goals across top
          specialized master’s degrees.
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
