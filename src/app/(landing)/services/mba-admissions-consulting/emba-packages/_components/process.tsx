export function ProcessSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Profile Assessment",
      description:
        "Evaluate career achievements, leadership potential, and academic background.",
    },
    {
      title: "Program Selection",
      description:
        "Identify EMBA programs online or in-person that align with your goals.",
    },
    {
      title: "Application Strategy & Essays",
      description:
        "Craft compelling essays and tailor applications to highlight leadership and impact.",
    },
    {
      title: "Recommendations & Interview Prep",
      description:
        "Ensure strong endorsements and practice executive-level interview scenarios.",
    },
    {
      title: "Final Submission Support",
      description:
        "Review and polish all components to maximize your chances of admission.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#002B56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              Our Process (Step-by-Step)
            </h2>
            <p className="text-[#99C4EF] text-base sm:text-lg">
              We provide structured, end-to-end support to maximize your EMBA
              admission success:
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
