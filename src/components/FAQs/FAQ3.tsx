import { Badge } from "../ui/badge";
import faqs from "./faq-content.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./customAccordion";

const FAQ3 = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-8 md:py-15 lg:py-15 space-y-10 md:space-y-12 lg:space-y-12 px-5 md:px-6">
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

      <div className="mt-10 lg:pt-6">
        <div className="max-w-3xl mx-auto border rounded-[0.75rem]">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem
                value={`item-${index + 1}`}
                className="border-b px-4 md:px-5 lg:px-5 "
              >
                <AccordionTrigger className="w-full flex justify-between items-center text-left font-medium text-base text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ3;
