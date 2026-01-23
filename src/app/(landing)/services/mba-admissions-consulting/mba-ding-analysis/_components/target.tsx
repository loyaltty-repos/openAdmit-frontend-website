export function TargetSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Expert Admissions Consultants",
      description:
        "Work with seasoned MBA admissions professionals who know what top programs are looking for.",
    },
    {
      title: "Tailored Approach",
      description:
        "Every Ding Analysis is customized to your unique profile, strengths, and career goals.",
    },
    {
      title: "Proven Success",
      description:
        "We’ve helped countless applicants turn past rejections into admissions at leading business schools.",
    },
    {
      title: "Comprehensive Insights",
      description:
        "From essays to interviews, we analyze every aspect of your application to provide actionable recommendations.",
    },
  ];

  return (
    <section className="bg-[#062746] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              Why Choose Us
            </h2>
            <p className="text-[#99C4EF] text-base sm:text-xl">
              Experience personalized guidance and proven strategies to
              transform your MBA application.
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
