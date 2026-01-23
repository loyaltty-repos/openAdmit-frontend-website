import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

type Story = {
  quote: string;
  name: string;
  school: string;
  logos: string[];
};

const stories: Story[] = [
  {
    // Priyanka - Columbia
    quote:
      "With just days before deadlines, Sridhar’s structured prep and insights helped me secure an M7 admit.",
    name: "Priyanka",
    school: "Columbia Business School - 2027",
    logos: ["/images/school-logos/Columbia Business School.png"],
  },
  {
    // Jing - Columbia
    quote:
      "After two rejections, Sridhar’s structured prep and mock interviews gave me the confidence to finally secure my CBS admit.",
    name: "Jing",
    school: "Columbia Business School - 2027",
    logos: ["/images/school-logos/Columbia Business School.png"],
  },
  {
    // Ali - Kellogg + Ross
    quote:
      "Despite low GPA/GRE, Sridhar’s honest feedback and roadmap got me 6/7 interviews and admission at Kellogg.",
    name: "Ali",
    school: "Kellogg - 2027",
    logos: [
      "/images/school-logos/Kellogg.png",
      "/images/school-logos/Michigan Ross School of Business.png",
    ],
  },
  {
    // Ryan - MIT + Booth + HBS
    quote:
      "Sridhar helped me reflect on goals and broaden perspectives, which led me to secure admission to MIT LGO.",
    name: "Ryan",
    school: "MIT Sloan - 2027",
    logos: [
      "/images/school-logos/MIT Sloan.png",
      "/images/school-logos/Chicago Booth.png",
      "/images/school-logos/Harvard Business School.png",
    ],
  },
  {
    // Mridul - INSEAD
    quote:
      "With no international exposure, Sridhar’s support and essay guidance helped me win my place at INSEAD.",
    name: "Mridul",
    school: "INSEAD - 2026",
    logos: ["/images/school-logos/INSEAD.png"],
  },
  {
    // Salwadeshwar - Fuqua + Tuck + Darden
    quote:
      "Sridhar’s help secured admits with $40K at Cornell and $50K at Fuqua, along with other top schools.",
    name: "Salwadeshwar",
    school: "Fuqua, Tuck, Darden - 2027",
    logos: [
      "/images/school-logos/Duke Fuqua.png",
      "/images/school-logos/Tuck.png",
      "/images/school-logos/UV Darden.png",
    ],
  },
  {
    // Aditi - Kellogg
    quote:
      "With only 2.5 years’ work experience, Sridhar turned my strengths into a winning strategy, getting me into Kellogg.",
    name: "Aditi",
    school: "Kellogg - 2027",
    logos: ["/images/school-logos/Kellogg.png"],
  },
  {
    // Nora - HBS + Wharton
    quote:
      "Sridhar inspired me to apply and supported me throughout. Result: admits to HBS and Wharton. I joined HBS.",
    name: "Nora",
    school: "HBS & Wharton - 2026",
    logos: [
      "/images/school-logos/Harvard Business School.png",
      "/images/school-logos/Wharton.png",
    ],
  },
  {
    // May - HBS + Tuck
    quote:
      "With Sridhar’s help, I secured 100% scholarships at Yale & Tuck, plus admission to HBS. Dream achieved!",
    name: "May",
    school: "HBS & Tuck - 2026",
    logos: [
      "/images/school-logos/Harvard Business School.png",
      "/images/school-logos/Tuck.png",
    ],
  },
  {
    // Ramakrishna - LBS + Darden
    quote:
      "With GMAT 675 and entrepreneurial background, Sridhar’s tailored approach got me into LBS.",
    name: "Ramakrishna",
    school: "London Business School - 2027",
    logos: [
      "/images/school-logos/London Business School.png",
      "/images/school-logos/UV Darden.png",
    ],
  },
  {
    // Danish - HBS + Wharton + Darden
    quote:
      "Sridhar’s outstanding guidance led to admits at HBS, other M7s, and T10 programs — with scholarships.",
    name: "Danish",
    school: "HBS, Wharton & Darden - 2026",
    logos: [
      "/images/school-logos/Harvard Business School.png",
      "/images/school-logos/Wharton.png",
      "/images/school-logos/UV Darden.png",
    ],
  },
];

function StarRow() {
  return (
    <span
      className="text-[#FDB022] text-xl leading-none"
      role="img"
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </span>
  );
}

export function SuccessStoriesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#181D27]">
            Success Stories that Inspire
          </h2>
          <p className="text-[#535862] text-lg md:text-xl">
            Hear directly from those who turned their MBA dreams into reality
            with Open Admits by their side.
          </p>
        </div>
      </div>
      <div>
        <div className="space-y-8">
          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {stories.slice(0, 5).map((story) => (
              <div
                key={`top-${story.name}`}
                className="min-w-[320px] max-w-[360px]"
              >
                <div className="bg-[#FAFAFA] border-[#D9AF3C] border-2 rounded-lg p-8 h-full">
                  <div className="space-y-4">
                    <div className="flex justify-start items-center gap-4 mb-2">
                      {story.logos.map((logo, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: Index is used as a key
                        <div key={index} className="flex-shrink-0">
                          <Image
                            src={logo}
                            alt="School logo"
                            width={80}
                            height={40}
                            className="object-contain max-h-10"
                          />
                        </div>
                      ))}
                    </div>
                    <StarRow />
                    <p className="text-[#535862] text-base leading-6">
                      {story.quote}
                    </p>
                    <div className="pt-2">
                      <p className="text-[#181D27] font-semibold">
                        {story.name}
                      </p>
                      <p className="text-[#535862] text-sm">{story.school}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          <Marquee className="[--gap:1.5rem]" reverse pauseOnHover>
            {stories.slice(5).map((story) => (
              <div
                key={`bottom-${story.name}`}
                className="min-w-[320px] max-w-[360px]"
              >
                <div className="bg-[#FAFAFA] border-[#D9AF3C] border-2 rounded-lg p-8 h-full">
                  <div className="space-y-4">
                    <div className="flex justify-start items-center gap-4 mb-2">
                      {story.logos.map((logo, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: Index is used as a key
                        <div key={index} className="flex-shrink-0">
                          <Image
                            src={logo}
                            alt="School logo"
                            width={80}
                            height={40}
                            className="object-contain max-h-10"
                          />
                        </div>
                      ))}
                    </div>
                    <StarRow />
                    <p className="text-[#535862] text-base leading-6">
                      {story.quote}
                    </p>
                    <div className="pt-2">
                      <p className="text-[#181D27] font-semibold">
                        {story.name}
                      </p>
                      <p className="text-[#535862] text-sm">{story.school}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
