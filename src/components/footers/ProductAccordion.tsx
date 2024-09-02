import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'

const solutions = [
    { name: 'Watch Demo', href: '#'},
    { name: 'Pricing', href: '#'},
    { name: 'Features', href: '#'},
    { name: 'Product Roadmap', href: '#'},
    { name: 'Download app', href: '#'},
    { name: 'My Custom Link', href: '#'},
]


export function ProductAccordion() {
    return (
        <AccordionItem value="product-accordion">
            <AccordionTrigger className='text-[1rem] leading-[1.5rem] text-primary font-medium'>Product</AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col">
                    {solutions.map((item, index) => (
                        <div key={index} className='py-3 text-muted-foreground text-sm cursor-pointer hover:bg-border/50'>
                            {item.name}
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}