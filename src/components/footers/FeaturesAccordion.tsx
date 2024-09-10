import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'



const solutions = [
    { name: 'Radian Components', href: '#'},
    { name: 'Starter Kit', href: '#'},
    { name: 'Modular Themes', href: '#'},
    { name: 'Logo Dark Mode', href: '#'},
    { name: 'Build me a webiste', href: '#'},
]

export function FeaturesAccordion() {
    return (
        <AccordionItem value="features-accordion">
            <AccordionTrigger className="text-[1rem] leading-[1.5rem] font-medium text-primary">Features</AccordionTrigger>
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