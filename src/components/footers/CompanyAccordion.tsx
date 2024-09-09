import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'About', href: '#' },
    { name: 'Carrers', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Newsroom', href: '#' },
    { name: 'Become a partner', href: '#' },
]

export function CompanyAccordion() {
    return (
        <AccordionItem value="company-accordion">
            <AccordionTrigger className="text-[1rem] leading-[1.5rem] font-medium text-primary">Company</AccordionTrigger>
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