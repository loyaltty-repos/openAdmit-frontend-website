export function ProcessSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Profile Assessment",
      description:
        "Evaluate academic, professional, and extracurricular strengths.",
    },
    {
      title: "Program & School Selection",
      description:
        "Identify schools that align with career goals and profile strengths.",
    },
    {
      title: "Application Strategy & Essays",
      description:
        "Craft compelling narratives and tailor essays for each program.",
    },
    {
      title: "Recommendations",
      description:
        "Select and guide recommenders to provide impactful endorsements.",
    },
    {
      title: "Interview Preparation",
      description: "Conduct mock interviews and provide personalized feedback.",
    },
    {
      title: "Final Review & Submission",
      description:
        "Ensure polished, cohesive applications ready for submission.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-[#181D27] font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              Our Process
            </h2>
            <p className="text-[#535862] text-base sm:text-lg">
              A structured, step-by-step approach ensures every aspect of your
              application is optimized for success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 lg:col-span-2">
            {steps.map((step) => (
              <div key={step.title} className="space-y-2">
                <h3 className="text-[#181D27] font-semibold text-lg sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-[#535862] text-base sm:text-lg">
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
