import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'Help Center', href: '#'},
    { name: 'Blog Articles', href: '#'},
    { name: 'FAQs', href: '#'},
    { name: 'Contact us', href: '#'},
    { name: 'Community', href: '#'},
]

export function ResourceAccordion() {
    return (
        <AccordionItem value="resource-accordion">
            <AccordionTrigger className="text-[1rem] leading-[1.5rem] font-medium text-primary">Resource</AccordionTrigger>
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