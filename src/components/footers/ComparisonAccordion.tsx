import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'Radian vs Product a', href: '#' },
    { name: 'Radian vs Product b', href: '#' },
    { name: 'Radian vs Product x', href: '#' },
    { name: 'Radian vs Product y', href: '#' },
    { name: 'Radian vs Product z', href: '#' },
    { name: 'See all comparison', href: '#' },
]

export function ComparisonAccordion() {
    return (
        <AccordionItem value="comparison-accordion">
            <AccordionTrigger className="text-[1rem] leading-[1.5rem] font-medium text-primary">Comparison</AccordionTrigger>
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