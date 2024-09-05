import { useState } from 'react';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp } from '@untitled-ui/icons-react';
import faqs from "./faq-content.json"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './customAccordion';



const FAQ6 = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
      setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <section className="max-w-screen-xl flex flex-col lg:flex-row mx-auto py-14 md:py-20 lg:py-20 px-5 md:px-6 lg:space-x-20 space-y-10 md:space-y-12 lg:space-y-0">
      <div className="lg:w-2/5 w-full space-y-6">
        <div className="space-y-3">
          <Badge variant={"outline"} className="bg-background rounded-full px-3 py-1 w-fit">
            <span className="text-sm font-medium text-foreground capitalize">FAQ</span>
          </Badge>
          <h2 className="text-[2rem] text-left leading-130 lg:text-[3rem] lg:leading-[3.75rem] md:text-[2.25rem] md:leading-[2.75rem] font-semibold text-foreground">
            Frequently asked questions        
          </h2>
        </div>
        <div className="text-left text-base text-foreground">
          <p>
            Most commonly asked questions about Radian. Can't find what you're looking for?
            Check out full <a href="#" className="underline">documentation</a> here
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/5 lg:pt-6">
        <div className="max-w-3xl mx-auto border rounded-[0.75rem]">
          {/* {faqs.map((faq, index) => (
            <div key={index} className="border-b p-4 md:p-5 lg:p-5 space-y-3">
              <button
                className="w-full flex justify-between items-center text-left text-base focus:outline-none font-medium text-foreground"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="ml-1">
                  {activeIndex === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div>
                  <p className="text-muted-foreground text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))} */}

{
  faqs.map((faq, index) => (
    <Accordion key={index} type="single" collapsible className="w-full">
      <AccordionItem value={`item-${index + 1}`} className='border-b px-4 md:px-5 lg:px-5 '>
        <AccordionTrigger className='w-full flex justify-between items-center text-left text-base focus:outline-none font-medium text-foreground hover:no-underline'>
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className='text-muted-foreground text-base'>
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ))
}
        </div>
      </div>
    </section>
  );
};

export default FAQ6;




