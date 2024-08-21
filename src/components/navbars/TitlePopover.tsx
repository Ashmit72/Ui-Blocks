import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/custom-accordion'

const solutions = [
    { name: 'About', description: "Learn more about our story", href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', description: "Latest product news and updates", icon: BookOpen01 },
    { name: 'FAQ', href: '#', description: "Got any questions? Find answers", icon: HelpCircle },
    { name: 'Customer Stories', href: '#', description: "Hear from out winning customers", icon: FaceSmile },
    { name: 'Documentation', href: '#', description: "Knowledge base for the users", icon: LifeBuoy02 },
]

export default function TitlePopover() {
    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-foreground outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-4 flex max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="w-60 max-w-full flex-auto overflow-hidden rounded-xl bg-background text-sm leading-6 shadow-lg border">
                    <div className="p-2 flex flex-col gap-y-0.5">
                        {solutions.map((item) => (
                            <div key={item.name} className="rounded-xl py-2 px-2.5 hover:bg-border/50 ">
                                <div>
                                    <a href={item.href} className="font-semibold text-foreground">
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


export function TitleAccordion() {
    return (
        <AccordionItem value="title-accordion">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
                <div className="w-full flex flex-col">
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