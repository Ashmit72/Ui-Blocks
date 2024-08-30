import { useState } from 'react';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp } from '@untitled-ui/icons-react';

const faqs = [
  {
    question: "What is Radian?",
    answer: "",
  },
  {
    question: "How can Radian speed up my development process?",
    answer: "",
  },
  {
    question: "Which technologies does Radian support?",
    answer: "Radian accelerates development by offering ready-to-use components that eliminate the need to start from scratch. This allows you to build and deploy beautiful products in weeks rather than months.",
  },
  {
    question: "Is Radian suitable for developers of all skill levels?",
    answer: "",
  },
  {
    question: "Can I customize the components provided by Radian?",
    answer: "",
  },
  {
    question: "Does Radian offer documentation and support?",
    answer: "",
  },
  {
    question: "How do I get started with Radian?",
    answer: "",
  },
  {
    question: "Is Radian compatible with existing projects?",
    answer: "",
  },
  {
    question: "Can Radian be used for large-scale projects?",
    answer: "",
  },
  {
    question: "What makes Radian different from other UI component libraries?",
    answer: "",
  },
];

const FAQ4 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-xl flex flex-col lg:flex-row mx-auto pt-14 md:pt-20 lg:pt-20 px-5 md:px-6 lg:space-x-20 space-y-10 md:space-y-12 lg:space-y-0">
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
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4 space-y-3">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ4;




