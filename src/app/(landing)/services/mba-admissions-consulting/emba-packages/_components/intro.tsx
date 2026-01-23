import Image from "next/image";

export function IntroSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-16 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-5 my-auto">
          <h1 className="font-bold text-3xl lg:text-4xl text-[#181D27]">
            What is an EMBA & Who is it For?
          </h1>
          <p className="text-lg lg:text-xl text-[#535862]">
            An Executive MBA (EMBA) is a graduate-level program designed for
            experienced professionals aiming to accelerate their career growth
            while continuing to work. Ideal for executives, managers, and
            entrepreneurs, EMBA programs help you gain leadership skills,
            strategic insight, and a strong professional network.
            <br />
            Key Highlights: Flexible schedules for working professionals;
            Leadership and strategic management focus; Opportunities for
            networking with peers and industry leaders
          </p>
        </div>
        <div className="relative lg:h-140 w-full">
          <Image
            src="/images/mba/services/emba/intro.png"
            alt="About Us"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
