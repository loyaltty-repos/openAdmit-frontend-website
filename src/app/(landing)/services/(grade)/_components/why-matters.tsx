interface WhyMattersProps {
  heading: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
}

export function WhyMatters({ heading, description, steps }: WhyMattersProps) {
  return (
    <section className="bg-[#062746] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-white font-serif font-bold text-[32px] sm:text-[40px] lg:text-[48px]">
              {heading}
            </h2>
            <p className="text-[#C5CACF] text-base sm:text-lg">{description}</p>
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
