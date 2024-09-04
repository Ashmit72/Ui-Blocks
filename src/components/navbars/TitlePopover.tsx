import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'

const solutions = [
    { name: 'About', description: "Learn more about our story", href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', description: "Latest product news and updates", icon: BookOpen01 },
    { name: 'FAQ', href: '#', description: "Got any questions? Find answers", icon: HelpCircle },
    { name: 'Customer Stories', href: '#', description: "Hear from out winning customers", icon: FaceSmile },
    { name: 'Documentation', href: '#', description: "Knowledge base for the users", icon: LifeBuoy02 },
]

export default function TitlePopover() {
    return (
        <Popover>
            <PopoverTrigger className="inline-flex items-center gap-x-1 text-base font-medium outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverTrigger>

            <PopoverContent
                className="mt-4 flex max-w-max p-0 shadow-lg bg-popover rounded-xl">
                <div className="w-60 max-w-full flex-auto overflow-hidden text-sm leading-6">
                    <div className="p-2 flex flex-col gap-0.5">
                        {solutions.map((item) => (
                            <div key={item.name} className="rounded-xl py-2 px-2.5 hover:bg-border/50 ">
                                <div>
                                    <a href={item.href} className="font-medium text-foreground">
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export function TitleAccordion() {
    return (
        <AccordionItem value="title-accordion">
            <AccordionTrigger>Features</AccordionTrigger>
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