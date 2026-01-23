import Image from "next/image";

export function IntroSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-16 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-5 my-auto">
          <h1 className="font-bold text-3xl lg:text-4xl text-[#181D27]">
            What is MBA Ding Analysis?
          </h1>
          <p className="text-lg lg:text-xl text-[#535862]">
            A Ding Analysis is a detailed review of your MBA application that
            uncovers the reasons behind a rejection. It provides actionable
            insights into areas that need improvement and highlights your
            strengths, helping you position yourself more effectively for the
            next application cycle.
            <br />
            At Open Admits, our team conducts a comprehensive MBA profile
            evaluation and profile review, analyzing essays, recommendations,
            academic records, and professional achievements. With our guidance,
            you gain a clear understanding of how admissions committees view
            your profile and what steps are required to maximize your chances of
            success.
          </p>
        </div>
        <div className="relative lg:h-140 w-full">
          <Image
            src="/images/mba/services/mba-ding-analysis/intro.png"
            alt="About Us"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
