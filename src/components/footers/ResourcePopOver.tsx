import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/custom-accordion'


const solutions = [
    { name: 'Help Center', href: '#', icon: Flag06 },
    { name: 'Blog Articles', href: '#', icon: BookOpen01 },
    { name: 'FAQs', href: '#', icon: HelpCircle },
    { name: 'Contact us', href: '#', icon: FaceSmile },
    { name: 'Community', href: '#', icon: LifeBuoy02 },
]

export default function ResourcePopOver() {
  return (
    <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-foreground outline-none">
                <span>Product</span>
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
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground " />
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

export function ResourceAccordion() {
    return (
        <AccordionItem value="resource-accordion">
            <AccordionTrigger>Resource</AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col gap-0.5">
                    {solutions.map((item, index) => (
                        <div key={index} className='py-3 text-foreground text-base font-medium cursor-pointer hover:bg-border/50'>
                            {item.name}
                        </div>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}