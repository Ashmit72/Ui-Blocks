import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { ChevronDown, Flag06, BookOpen01, HelpCircle, FaceSmile, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'
import { Link } from 'react-router-dom'

const solutions = [
    { name: 'About', href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', icon: BookOpen01 },
    { name: 'FAQ', href: '#', icon: HelpCircle },
    { name: 'Customer Stories', href: '#', icon: FaceSmile },
    { name: 'Documentation', href: '#', icon: LifeBuoy02 },
]

export default function IconTitlePopover() {
    return (
        <Popover>
            <PopoverTrigger className="inline-flex items-center gap-x-1 text-base font-medium outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverTrigger>

            <PopoverContent
                className="mt-4 flex max-w-max shadow-lg rounded-xl bg-popover p-0">
                <div className="w-60 max-w-md flex-auto overflow-hidden text-sm leading-6">
                    <div className="p-2  flex flex-col gap-0.5">
                        {solutions.map((item) => (
                            <Link to={item.href} key={item.name} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-secondary ">
                                <div className="flex-none items-center justify-center rounded-xl">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground " />
                                </div>
                                <div>
                                    <a href={item.href} className="font-medium text-sm text-foreground">
                                        {item.name}
                                    </a>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export function IconTitleAccordion() {
    return (
        <AccordionItem value="icon-title-accordion">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
                <div className="w-full flex flex-col">
                    {solutions.map((item, index) => (
                        <Link to={item.href} key={index} className="flex gap-x-3 py-3 hover:bg-secondary">
                            <div className="flex-none items-center justify-center rounded-xl">
                                <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground " />
                            </div>
                            <div className="font-medium text-base text-foreground">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}