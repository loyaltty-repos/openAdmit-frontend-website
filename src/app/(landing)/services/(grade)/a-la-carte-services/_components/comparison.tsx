import { Check, ChevronRightIcon, ChevronUp, Minus, X } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type IconType = "included" | "not-included" | "optional";

interface ComparisonRow {
  feature: string;
  aLaCarte: string;
  preCollege: string;
  aLaCarteIcon?: IconType;
  preCollegeIcon?: IconType;
}

export function Comparison() {
  const rows: ComparisonRow[] = [
    {
      feature: "Commitment",
      aLaCarte: "Single service",
      preCollege: "6-12 month plan",
    },
    {
      feature: "Personal Mentorship",
      aLaCarte: "Optional",
      preCollege: "Included",
      aLaCarteIcon: "optional",
      preCollegeIcon: "included",
    },
    {
      feature: "Projects / Profile Building",
      aLaCarte: "Not included",
      preCollege: "Included",
      aLaCarteIcon: "not-included",
      preCollegeIcon: "included",
    },
    {
      feature: "Best For",
      aLaCarte: "Quick fixes, essay help, or final application review",
      preCollege: "Long-term Ivy League profile development",
    },
  ];

  const renderCellContent = (text: string, iconType?: IconType): ReactNode => {
    if (!iconType) {
      return <span>{text}</span>;
    }

    let icon: ReactNode;
    let iconBgColor: string;

    if (iconType === "included") {
      icon = <Check className="size-4 text-white" />;
      iconBgColor = "bg-[#12B76A]";
    } else if (iconType === "not-included") {
      icon = <X className="size-4 text-white" />;
      iconBgColor = "bg-[#F04438]";
    } else {
      icon = <Minus className="size-4 text-white" />;
      iconBgColor = "bg-[#F79009]";
    }

    return (
      <div className="flex items-center gap-2">
        <div
          className={`size-5 rounded-full ${iconBgColor} flex items-center justify-center shrink-0`}
        >
          {icon}
        </div>
        <span>{text}</span>
      </div>
    );
  };

  return (
    <section className="bg-[#FBF7EC] py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-sm sm:text-base text-[#0056AD] font-medium">
            A La Carte vs Pre-College Program
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#181D27]">
            A LA CARTE VS PRE-COLLEGE PROGRAM
          </h2>
          <p className="text-lg lg:text-xl text-[#535862] max-w-3xl mx-auto">
            A quick way to understand which option is right for your admissions
            journey.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#181D27]">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#181D27]">
                    À La Carte Services
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#181D27]">
                    Pre-College Program
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index % 2 === 1
                        ? "bg-gray-50/50 border-b border-gray-100"
                        : "bg-white border-b border-gray-100"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#181D27]">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#535862] text-center">
                      {renderCellContent(row.aLaCarte, row.aLaCarteIcon)}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#535862] text-center">
                      {renderCellContent(row.preCollege, row.preCollegeIcon)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-fit p-6 text-white bg-[#0056AD] hover:bg-[#0056AD]/90"
          >
            <Link href="#">
              View Full Programs
              <ChevronRightIcon />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-fit p-6 text-[#181D27] border-[#0056AD] hover:bg-gray-50"
          >
            <Link href="#">
              Back to Services
              <ChevronUp />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
