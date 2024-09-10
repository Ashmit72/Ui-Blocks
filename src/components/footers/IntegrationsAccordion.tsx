import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'Salesforce', href: '#'},
    { name: 'Krispcall', href: '#'},
    { name: 'Skynet', href: '#'},
    { name: 'Oasis Devops', href: '#'},
    { name: 'Stargazer', href: '#'},
    { name: 'See all integrations', href: '#'},
]

export function IntegrationsAccordion() {
    return (
        <AccordionItem value="integrations-accordion">
            <AccordionTrigger className="text-[1rem] leading-[1.5rem] font-medium text-primary">Integrations</AccordionTrigger>
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