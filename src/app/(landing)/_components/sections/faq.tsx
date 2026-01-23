import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/faq-accordion";

type Faq = {
  question: string;
  answer: string;
};

export function FaqsSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-24">
      <div className="flex flex-col items-center gap-y-5 px-4 md:px-0">
        <div className="px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#535862] text-lg md:text-xl">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="flex flex-col items-start w-full mt-8 gap-y-1">
          <Accordion
            className="max-w-3xl mx-auto w-full"
            type="single"
            defaultValue={faqs[0]?.question}
            collapsible
          >
            {faqs.map((faq) => (
              <AccordionItem
                value={faq.question}
                key={faq.question}
                className="w-full"
              >
                <AccordionTrigger className="font-semibold text-[#181d27] w-full text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#535862] text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
