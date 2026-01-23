import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export function SchoolsSection() {
  return (
    <section className="py-10 lg:py-20 bg-[#FBF7EC] space-y-8">
      <div className="text-center space-y-8">
        <h2 className="text-[28px] md:text-[40px] font-bold text-[#00162B] font-serif">
          Our Students are Admitted to
        </h2>
        <p className="text-lg md:text-xl font-sans text-[#59626B]">
          the world's most prestigious MBA programs, from M7 schools to top
          international business schools.
        </p>
      </div>
      <Marquee className="[--gap:8px] [--duration:40s]">
        {Array.from({ length: 9 }).map((_, index) => (
          <Image
            // biome-ignore lint/suspicious/noArrayIndexKey: The index is used as a key
            key={index}
            src={`/images/mba/schools/Logo Frame-${index}.png`}
            alt={`School ${index + 1}`}
            width={140}
            height={72}
            className="object-contain h-auto w-full"
          />
        ))}
      </Marquee>
    </section>
  );
}
