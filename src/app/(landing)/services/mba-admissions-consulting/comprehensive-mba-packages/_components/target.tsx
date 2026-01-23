export function TargetSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Early-Career Professionals",
      description:
        "Position your profile effectively for competitive MBA programs.",
    },
    {
      title: "Career Switchers",
      description:
        "Highlight transferable skills and demonstrate potential for growth.",
    },
    {
      title: "Aspiring Leaders",
      description:
        "Showcase leadership impact and strategic thinking to impress admissions committees.",
    },
    {
      title: "Applicants Targeting Elite Schools",
      description:
        "Receive guidance tailored to M7, Ivy League, and other top-tier programs.",
    },
  ];

  return (
    <section className="bg-[#062746] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              Who is This Package For?
            </h2>
            <p className="text-[#99C4EF] text-base sm:text-xl">
              Our Comprehensive MBA Package is designed for applicants aiming to
              maximize their chances at top business schools. It provides
              personalized guidance to highlight achievements, leadership, and
              career potential.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 lg:col-span-2">
            {steps.map((step) => (
              <div key={step.title} className="space-y-2">
                <h3 className="text-white font-semibold text-lg sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-[#99C4EF] text-base sm:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
