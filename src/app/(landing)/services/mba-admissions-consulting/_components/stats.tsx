export function StatsSection() {
  const stats = [
    {
      value: "130+",
      label: "Admits across top schools (HSW + M7)",
    },
    {
      value: "$7M+",
      label: "Scholarship awarded",
    },
    {
      value: "97%",
      label: "Success rate",
    },
  ];
  return (
    <section className="bg-[#F7EFD8] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 px-8 w-fit mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center max-w-60 w-full space-y-4"
          >
            <p className="text-[40px] font-bold text-[#002B56] leading-tight font-crimson-text">
              {stat.value}
            </p>
            <p className="text-lg font-sans text-[#59626B]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
