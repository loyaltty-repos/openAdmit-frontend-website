import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { avatars } from "@/lib/avatars";

export function TestimonialsSection() {
  const testimonials = [
    {
      avatar: avatars.notion_11,
      name: "Sophia",
      content:
        "The guidance I received was beyond admissions—it was a masterclass in positioning myself as an exceptional candidate for EB-1A.",
    },
    {
      avatar: avatars.notion_5,
      name: "Liam",
      content:
        "The workshops provided insightful strategies that helped refine my approach to the application process.",
    },
    {
      avatar: avatars.notion_6,
      name: "Maya",
      content:
        "Thanks to the mentorship, I was able to showcase my accomplishments in a way that truly resonated with the review board.",
    },
    {
      avatar: avatars.notion_14,
      name: "Ethan",
      content:
        "The personalized feedback on my portfolio made all the difference; it transformed my narrative into a compelling story.",
    },
    {
      avatar: avatars.notion_11,
      name: "Ava",
      content:
        "I felt empowered throughout the journey, knowing I had support that understood the nuances of the EB-1A process.",
    },
    {
      avatar: avatars.notion_5,
      name: "Liam",
      content:
        "The guidance I received was pivotal, helping me navigate the complexities of my application with confidence.",
    },
    {
      avatar: avatars.notion_6,
      name: "Sofia",
      content:
        "By sharing my experiences, I discovered a community that fostered growth and provided invaluable insights.",
    },
    {
      avatar: avatars.notion_14,
      name: "Noah",
      content:
        "Every step felt less daunting with mentors who were genuinely invested in my success.",
    },
  ];

  return (
    <section
      className="py-10 lg:py-20 space-y-16 bg-[#FBF7EC]"
      id="testimonials"
    >
      <div className="text-center max-w-200 mx-auto space-y-4">
        <h2 className="text-[28px] md:text-[40px] font-bold text-[#00162B] font-serif">
          Student Success Stories
        </h2>
        <p className="text-lg md:text-xl font-sans text-[#59626B]">
          We prioritize our students, shaping their future with expert-driven,
          results-focused guidance.
        </p>
      </div>
      <Marquee className="[--gap:40px] [--duration:40s]">
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="bg-white w-60 p-8 rounded-4xl flex flex-col items-center text-center justify-start h-full"
          >
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={42}
              height={42}
              className="mb-4"
            />
            <p className="text-2xl text-[#183B5D] mb-8">{testimonial.name}</p>
            <div className="font-sans text-base md:text-xl text-[#274C70]">
              {testimonial.content}
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
