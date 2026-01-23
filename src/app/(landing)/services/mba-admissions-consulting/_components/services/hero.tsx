export function ServiceHero({
  banner,
  title,
  description,
}: {
  banner: string;
  title: string;
  description: string;
}) {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#00162B] text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="font-semibold text-sm lg:text-base text-[#99C4EF]">
          {banner}
        </h1>
        <h2 className="font-semibold text-4xl lg:text-5xl text-white">
          {title}
        </h2>
        <p className="text-lg lg:text-xl text-[#99C4EF]">{description}</p>
      </div>
    </section>
  );
}
