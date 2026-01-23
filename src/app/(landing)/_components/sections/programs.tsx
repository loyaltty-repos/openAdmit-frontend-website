"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProgramsSection() {
  const programs = [
    {
      icon: "/images/icons/fluent_certificate-16-filled.svg",
      name: "Undergraduate",
      title: "Bachelors Degree Programs",
      description: "Foundations for academic excellence",
      details: [
        "Strategic Test Preparation",
        "Standout extracurricular development",
        "Compelling essay crafting",
      ],
      url: "https://openadmits.com/services/undergraduate-admissions",
    },
    {
      icon: "/images/icons/streamline-plump_graduation-cap-solid.svg",
      name: "Masters Programs",
      title: "MFin • MIM • MIS • Marketing • More",
      description: "Specialized degrees for career acceleration",
      details: [
        "Strengthen your research profile",
        "Craft compelling purpose statements",
        "Secure strong recommendation letters",
      ],
      url: "https://openadmits.com/services/graduate-admissions",
    },
    {
      icon: "/images/icons/fa6-solid_scroll.svg",
      name: "MBA Programs",
      title: "Master of Business Administration",
      description: "Transform your Career with top MBA programs",
      details: [
        "M7 and Top European Business Schools",
        "Leadership Essay and Interview Coaching",
        "97% Success Rate with Merit Scholarships",
      ],
      url: "https://openadmits.com/services/mba-admissions-consulting",
    },
  ];

  return (
    <section className="py-30 bg-[#FBF7EC]">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-16 space-y-8">
        <div className="flex flex-col max-w-200 mx-auto text-center items-center justify-center gap-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-16"
          >
            <title>Logo</title>
            <path
              d="M9.85073 2.46874L1.26071 6.62612V11.0257C1.28044 11.0719 1.72379 11.3839 1.81804 11.3839C1.91229 11.3839 1.94973 11.2915 1.95667 11.2453V7.75387C2.38721 7.96241 3.31598 8.38594 5.10809 9.29007C6.54501 8.14376 8.86857 7.83028 9.85073 7.81682V2.46874Z"
              fill="#1D2348"
            />
            <path
              d="M1.12238 7.32998V6.67758L0.449371 7.02781L1.12238 7.32998Z"
              fill="#1D2348"
            />
            <path
              d="M5.10809 9.84755V13.3792C6.30402 11.9614 7.29561 10.9108 9.85073 10.9108V8.25705C7.72456 8.25705 5.72836 9.29007 5.10809 9.84755Z"
              fill="#1D2348"
            />
            <path
              d="M12.9155 8.26108H10.2804L12.9155 10.8962V8.26108Z"
              fill="#2B5CAB"
            />
            <path
              d="M10.2804 10.8962L12.9155 13.5313L12.9155 10.8962L10.2804 8.26108L10.2804 10.8962Z"
              fill="#F79236"
            />
            <path
              d="M10.2804 7.81914H15.5506L10.2804 2.54895V7.81914Z"
              fill="#E34B3A"
            />
          </svg>
          <h1 className="font-bold text-[28px] sm:text-[40px] text-[#181D27]">
            Admissions Excellence Across Every Academic Level
          </h1>
          <p className="text-lg text-[#535862]">
            From your first college application to advanced graduate studies and
            executive education, we provide specialized guidance tailored to
            your unique academic journey.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Link key={program.name} href={program.url} target="_blank">
              <div className="group bg-[#FBF7EC] hover:bg-linear-to-t hover:from-[#F0DFB1] hover:to-[#F7EFD8] transition-all duration-300 ease-out border border-[#B18F31] rounded-2xl px-4 py-8 flex flex-col items-center justify-between h-90 text-center gap-y-4 overflow-hidden">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <Image
                    src={program.icon}
                    alt={program.name}
                    width={48}
                    height={48}
                  />
                  <h2 className="font-semibold text-2xl text-[#00162B]">
                    {program.name}
                  </h2>
                </div>
                <div>
                  <div className="space-y-2 text-center transition-all duration-300 ease-out group-hover:opacity-0 group-hover:max-h-0 overflow-hidden">
                    <p className="text-base text-[#59626B]">{program.title}</p>
                    <p className="font-bold text-[#59626B]">
                      {program.description}
                    </p>
                  </div>
                  <ul
                    className="text-[#00162B] text-left space-y-1 list-disc list-outside px-4 transition-all duration-300 ease-out opacity-0 translate-y-2 max-h-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40"
                    aria-hidden="true"
                  >
                    {program.details.map((point) => (
                      <li key={point} className="list-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="flex items-center gap-x-2 font-semibold text-[#535862]">
                  Learn More <ArrowRightIcon className="size-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
