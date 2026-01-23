import { GraduationCap } from "lucide-react";

interface WhoIsThisForProps {
  heading: string;
  subheading: string;
  audiences: Array<{ title: string; description: string }>;
}

export function WhoIsThisFor({
  heading,
  subheading,
  audiences,
}: WhoIsThisForProps) {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181D27]">
            {heading}
          </h2>
          <p className="text-lg lg:text-xl text-[#535862] max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 space-y-4 text-center"
            >
              <div className="size-12 rounded-lg bg-[#0056AD] flex items-center justify-center mx-auto">
                <GraduationCap className="size-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[#181D27] text-lg font-semibold">
                  {audience.title}
                </h3>
                <p className="text-[#535862] text-sm sm:text-base">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
