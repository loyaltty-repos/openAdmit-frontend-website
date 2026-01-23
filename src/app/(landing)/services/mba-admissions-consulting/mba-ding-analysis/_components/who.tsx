export function WhoSection() {
  const reasons = [
    {
      title: "Candidates Rejected from Top MBA Programs",
      description:
        "Gain insights into why your previous application wasn’t successful and learn how to improve.",
    },
    {
      title: "Applicants Seeking Personalized Feedback",
      description:
        "Receive expert, tailored advice on essays, recommendations, school selection, and interview preparation.",
    },
    {
      title: "Professionals Wanting to Strengthen Their Profile",
      description:
        "Identify gaps in academics, leadership, or extracurriculars and get actionable steps to enhance your application.",
    },
    {
      title: "Students Planning Their Next MBA Application",
      description:
        "Get a clear roadmap to refine your strategy and maximize your chances of admission in the next cycle.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 max-w-7xl mx-auto space-y-16">
      <div className="space-y-5 max-w-3xl">
        <h1 className="font-bold text-3xl lg:text-4xl text-[#181D27]">
          Who Is This For
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
