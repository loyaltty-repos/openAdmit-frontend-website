export function TargetSection() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Final-year undergraduates planning ahead",
      description: "",
    },
    {
      title: "Master’s students with less than 2 years of experience",
      description: "",
    },
    {
      title: "Candidates targeting deferred admission at global MBA programs",
      description: "",
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
            <p className="text-[#99C4EF] text-base sm:text-xl"></p>
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
