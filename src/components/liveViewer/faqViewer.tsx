import { useComponentContext } from "@/providers/ComponentProvider"
import FAQ1 from "../FAQs/FAQ1";
import FAQ2 from "../FAQs/FAQ2";
import FAQ3 from "../FAQs/FAQ3";
import FAQ4 from "../FAQs/FAQ4";
import FAQ5 from "../FAQs/FAQ5";
import FAQ6 from "../FAQs/FAQ6";


export type FaqVariationKeys = 'faq 1' | 'faq 2' | 'faq 3' | 'faq 4' | 'faq 5' | 'faq 6'

export const faqVariations: Record<FaqVariationKeys, React.ReactNode> = {
    "faq 1": <FAQ1 />,
    "faq 2": <FAQ2 />,
    "faq 3": <FAQ3 />,
    "faq 4": <FAQ4 />,
    "faq 5": <FAQ5 />,
    "faq 6": <FAQ6 />
}

function FAQViewer() {
    const { selectedComponents } = useComponentContext();
    return (
        <>
            {faqVariations[selectedComponents.faq as FaqVariationKeys]}
        </>
    )
}

export default FAQViewer;