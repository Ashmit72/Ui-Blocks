import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'Terms of Service', href: '#'},
    { name: 'Privacy Policy', href: '#'},
    { name: 'Cookie Policy', href: '#'},
    { name: 'Other Policies', href: '#'},
]

export function LegalAccordion() {
    return (
        <AccordionItem value="legal-accordion">
            <AccordionTrigger className='text-[1rem] leading-[1.5rem] font-medium text-primary'>Legal</AccordionTrigger>
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