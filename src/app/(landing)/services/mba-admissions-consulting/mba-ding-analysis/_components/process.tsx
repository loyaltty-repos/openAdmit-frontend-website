export function ProcessSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Application Review",
      description:
        "We examine every component of your MBA application, including essays, recommendations, and professional experience.",
    },
    {
      title: "Profile Gap Analysis",
      description:
        "Identify weaknesses and opportunities that may have impacted past admissions decisions.",
    },
    {
      title: "Strategic Feedback",
      description:
        "Receive personalized advice on essay improvement, school selection, and interview preparation.",
    },
    {
      title: "Actionable Plan",
      description:
        "Get a step-by-step roadmap to enhance your profile and strengthen your chances in the next application cycle.",
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
              At Open Admits, we take a structured approach to ensure a
              comprehensive MBA profile review:
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
