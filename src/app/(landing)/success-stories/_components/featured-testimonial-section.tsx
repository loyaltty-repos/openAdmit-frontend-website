import Image from "next/image";

type FeaturedTestimonial = {
  name: string;
  quote: string;
  background: string;
  caption: string;
  approach: string;
  image: string;
  schools: string[];
  caseStudyUrl: string;
};

export function FeaturedTestimonialSection({
  testimonial,
}: {
  testimonial: FeaturedTestimonial;
}) {
  const {
    name,
    quote,
    background,
    caption,
    approach,
    image,
    schools,
    caseStudyUrl,
  } = testimonial;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center md:items-start">
        <div>
          <h3 className="text-sm mb-3 font-semibold text-[#004182]">
            {name || ""}
          </h3>
          <blockquote className="text-[#181D27] text-4xl mb-12 font-medium">
            “{quote || ""}”
          </blockquote>
          <hr className="mb-8" />
          <div className="space-y-2 text-lg text-[#535862] mb-12">
            <p>
              <span className="font-semibold text-[#181D27]">Background:</span>{" "}
              {background || ""}
            </p>
            <p>
              <span className="font-semibold text-[#181D27]">
                Our Approach:
              </span>{" "}
              {approach || ""}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-[#E9EAEB] p-8">
            <h3 className="mb-4">Admit:</h3>
            <div className="flex gap-2 flex-wrap">
              {schools?.map((s) => (
                <div
                  className="size-16 flex items-center justify-center bg-[#E6F0FB] border border-[#99C4EF] rounded-full"
                  key={s}
                >
                  <Image
                    src={s}
                    alt="School logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {caseStudyUrl ? (
            <a
              href={caseStudyUrl}
              className="inline-flex items-center text-sm rounded-full px-4 py-2 border border-[#E9EAEB] text-[#002B56] bg-white w-max"
            >
              Read case study
            </a>
          ) : null}
        </div>

        <div className="relative w-full h-140 md:max-h-160 md:h-full">
          {image && (
            <Image
              src={image}
              alt={name || "Student"}
              fill
              className="object-cover rounded-t-2xl"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/30 backdrop-blur-xl flex flex-col-reverse md:flex-row md:items-center justify-center md:justify-between px-8">
            <span className="text-2xl text-white font-semibold">{caption}</span>
            <span className="text-xl text-white">
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
