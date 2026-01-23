import { CalendarCheck, ShoppingCart, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Select Your Service",
      description:
        "Pick a targeted à la carte service tailored to your admissions needs.",
    },
    {
      icon: CalendarCheck,
      title: "Book or Upload",
      description:
        "Secure a mentor session or share your materials with our team.",
    },
    {
      icon: Zap,
      title: "Receive Results",
      description:
        "Get polished deliverables or strategic feedback within 48–72 hours.",
    },
  ];

  return (
    <section className="bg-[#002B56] py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white">
            GET EXPERT ADMISSIONS HELP IN JUST 3 STEPS
          </h2>
          <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto">
            A quick, seamless process designed to deliver expert guidance
            exactly when you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-white rounded-lg shadow-sm p-6 lg:p-8 space-y-4 text-center"
              >
                <div className="size-12 lg:size-16 rounded-lg bg-[#0056AD] flex items-center justify-center mx-auto">
                  <Icon className="size-6 lg:size-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#181D27] text-lg lg:text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-[#535862] text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
