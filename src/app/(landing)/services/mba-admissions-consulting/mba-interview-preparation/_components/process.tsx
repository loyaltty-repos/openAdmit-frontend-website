export function ProcessSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Initial Assessment",
      description:
        "We evaluate your profile, target schools, and potential interview formats.",
    },
    {
      title: "Mock Interviews",
      description:
        "Simulated sessions replicate real MBA interviews with detailed feedback.",
    },
    {
      title: "Storytelling & Strategy",
      description:
        "We help refine your leadership stories and career goals for maximum impact.",
    },
    {
      title: "Interview Report",
      description:
        "Post our call, we provide complete interview report with our suggestions and areas for improvement",
    },
    {
      title: "Final Readiness Check",
      description:
        "A complete run-through to polish delivery, tone, and confidence before the big day.",
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-[#181D27] font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              Our Step-by-Step Process
            </h2>
            <p className="text-[#535862] text-base sm:text-lg">
              We follow a proven framework to ensure you enter your MBA
              interview with clarity, confidence, and a compelling story.
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
