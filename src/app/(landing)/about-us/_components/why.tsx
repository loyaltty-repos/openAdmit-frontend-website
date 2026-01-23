export function AboutUsWhy() {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "Hundreds of successful admits to top programs",
    },
    {
      title: "Tailored Guidance",
      description: "Every student receives a strategy unique to their profile",
    },
    {
      title: "Experienced Consultants",
      description:
        "Deep understanding of admissions expectations across programs",
    },
    {
      title: "Comprehensive Support",
      description: "Essays, applications, interviews, and beyond",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="space-y-5 max-w-3xl">
        <h1 className="font-bold text-3xl lg:text-4xl text-[#181D27]">
          Why Choose Us
        </h1>
      </div>
      <div className="flex flex-wrap gap-8">
        {reasons.map((reason) => (
          <div key={reason.title} className="min-w-80 w-min">
            <h2 className="font-bold text-lg text-[#181D27]">{reason.title}</h2>
            <p className="text-base text-[#535862]">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
