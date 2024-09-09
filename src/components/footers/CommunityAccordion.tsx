import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'Linkedin', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
]

export function CommunityAccordion() {
    return (
        <AccordionItem value="community-accordion">
            <AccordionTrigger className="text-[1rem] leading-[1.5rem] font-medium text-primary">Community</AccordionTrigger>
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