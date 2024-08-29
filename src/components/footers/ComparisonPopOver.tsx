import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDown } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'


const solutions = [
    { name: 'Radian vs Product a', href: '#'},
    { name: 'Radian vs Product b', href: '#'},
    { name: 'Radian vs Product x', href: '#'},
    { name: 'Radian vs Product y', href: '#'},
    { name: 'Radian vs Product z', href: '#'},
    { name: 'See all comparison', href: '#'},
]

export default function ComparisonPopOver() {
  return (
    <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-foreground outline-none">
                <span>Comparison</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-4 flex max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="w-60 max-w-md flex-auto overflow-hidden rounded-xl bg-background text-sm leading-6 shadow-lg border">
                    <div className="p-2  flex flex-col gap-0.5">
                        {solutions.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-border/50 ">
                                <div className="flex-none items-center justify-center rounded-xl">
                                </div>
                                <div>
                                    <a href={item.href} className="font-medium text-sm text-foreground">
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
  )
}

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