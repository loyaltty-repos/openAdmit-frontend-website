export function GraduateServicesProcess() {
  const steps: { title: string; description: string }[] = [
    {
      title: "Profile Assessment",
      description:
        "Evaluate your academic background, professional experience, and extracurricular activities to identify strengths and areas for improvement.",
    },
    {
      title: "Strategic Planning",
      description:
        "Develop a personalized application strategy, including school selection, timeline management, and resource allocation.",
    },
    {
      title: "Application Development",
      description:
        "Assist in crafting compelling essays, optimizing your resume, and securing strong letters of recommendation.",
    },
    {
      title: "Interview Preparation",
      description:
        "Conduct mock interviews to refine your responses and enhance your presentation skills.",
    },
    {
      title: "Final Review and Submission",
      description:
        "Ensure all application materials are polished and submitted on time, meeting each program's specific requirements.",
    },
  ];

  return (
    <section className="bg-[#062746] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-white font-serif font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              Our End-to-End Process
            </h2>
            <p className="text-[#C5CACF] text-base sm:text-lg">
              Our structured approach ensures a seamless application experience,
              enhancing your chances of admission to top graduate programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {steps.map((step) => (
              <div key={step.title} className="space-y-2">
                <h3 className="text-white font-semibold text-[18px] sm:text-[20px]">
                  {step.title}
                </h3>
                <p className="text-[#C5CACF] text-sm sm:text-base">
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
