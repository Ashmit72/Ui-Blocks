import { Badge } from "../ui/badge";
import faqs from "./faq-content.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./customAccordion";

const FAQ1 = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-8 md:py-[3.75rem] lg:py-15 space-y-10 md:space-y-12 lg:space-y-12 px-5 md:px-6">
      <div className="mx-auto text-center space-y-6 px-6">
        <div className="space-y-3">
          <Badge
            variant={"outline"}
            className="bg-background rounded-full px-3 py-1 w-fit"
          >
            <span className="text-sm font-medium text-foreground capitalize">
              FAQ
            </span>
          </Badge>
          <h2 className="text-[2rem] leading-130 lg:text-[3rem] lg:leading-[3.75rem] md:text-[2.25rem] md:leading-[2.75rem] font-semibold text-foreground">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-4 text-base text-foreground">
          <p>
            Most commonly asked questions about Radian. Can't find what you're
            looking for?<br></br>
            Check out full{" "}
            <a href="#" className="underline">
              documentation
            </a>{" "}
            here
          </p>
        </div>
      </div>

      <div className="mt-10 pt-6">
        <div className="max-w-3xl mx-auto space-y-2">
          {/* old */}
          {/* {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4 space-y-3">
              <button
                className="w-full flex justify-between items-center text-left text-base font-medium focus:outline-none text-foreground"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="ml-1">
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              {activeIndex === index && (
                <div>
                  <p className="text-muted-foreground text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))} */}

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="border rounded-xl pl-4 pr-4"
              >
                <AccordionTrigger className="w-full flex justify-between items-center text-left text-base font-medium  text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ1;
