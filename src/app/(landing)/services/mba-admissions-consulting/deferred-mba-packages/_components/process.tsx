export function ProcessSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Profile assessment & school fit analysis",
      description:
        "Evaluate your strengths and match you with the best deferred MBA programs.",
    },
    {
      title: "Application strategy tailored to deferred programs",
      description:
        "Craft a step-by-step plan designed for early-career applicants.",
    },
    {
      title: "Essay brainstorming + unlimited edits",
      description:
        "Develop compelling essays with unlimited rounds of refinement.",
    },
    {
      title:
        "Resume building (highlighting academics, internships, leadership)",
      description:
        "Transform your resume to showcase impact and leadership potential.",
    },
    {
      title: "LOR guidance for professors or early-career managers",
      description: "To write strong, outcome-focused letters.",
    },
    {
      title:
        "Interview preparation (focus on future vision and leadership potential)",
      description:
        "Mock interviews to highlight your career vision and leadership skills.",
    },
    {
      title: "Final application review before submission",
      description: "Ensure every element of your application is cohesive.",
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
            <p className="text-[#535862] text-base sm:text-lg"></p>
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
