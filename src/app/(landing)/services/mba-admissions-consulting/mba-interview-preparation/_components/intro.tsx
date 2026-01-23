import Image from "next/image";

export function IntroSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-16 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-5 my-auto">
          <h1 className="font-bold text-3xl lg:text-4xl text-[#181D27]">
            Why MBA Interview Prep is Critical
          </h1>
          <p className="text-lg lg:text-xl text-[#535862]">
            Securing an MBA admit often comes down to the interview. Even the
            strongest profiles can fall short without clear communication,
            confidence, and well-structured answers. Our MBA interview
            preparation ensures you’re ready to shine when it matters most.
          </p>
        </div>
        <div className="relative lg:h-140 w-full">
          <Image
            src="/images/mba/services/mba-interview-prep/intro.jpg"
            alt="About Us"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
