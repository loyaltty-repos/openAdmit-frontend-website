import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="bg-cover bg-center"
      style={{
        background: `url('/images/mba/hero-bg.jpg'), #00162B`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="grid lg:grid-cols-2 items-center h-full">
        <div className="lg:max-w-2xl lg:ml-auto">
          <div className="lg:max-w-160 lg:mr-auto py-16 lg:py-24 px-4 lg:px-8 space-y-12 my-auto">
            <div className="space-y-6">
              <h1 className="text-[64px] font-bold font-serif text-white leading-tight">
                MBA Admissions Consulting For Ivy League & Top Schools
              </h1>
              <p className="text-lg lg:text-xl text-[#C5CACF] leading-relaxed">
                OpenAdmits provides personalized guidance for M7, Ivy League,
                and top global programs. From essays and interviews to school
                selection, our MBA consultants help you present your strongest
                application.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full lg:min-w-85">
          <Image
            src="/images/mba/hero.jpg"
            alt="Blink app showing real-time bus tracking"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
