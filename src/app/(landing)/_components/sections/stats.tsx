const statsData = [
  {
    value: "130+",
    description: "Admits across top schools (HSW + M7)",
  },
  {
    value: "$7Mn+",
    description: "Scholarships secured for our clients & students",
  },
  {
    value: "97%",
    description: "Student and Client satisfaction rate",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-[#F7EFD8] border-b border-[#B18F31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full">
          {statsData.map((stat) => (
            <div
              key={stat.description}
              className="flex text-left gap-x-4 items-center justify-center w-full"
            >
              <p className="text-[40px] font-bold text-[#002B56]">
                {stat.value}
              </p>
              <p className="text-base text-[#002B56] font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
