import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'
import { Link } from 'react-router-dom'

const features = [
    { name: 'About', description: "Learn more about our story", href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', description: "Latest product news and updates", icon: BookOpen01 },
    { name: 'FAQ', href: '#', description: "Got any questions? Find answers", icon: HelpCircle },
    { name: 'Customer Stories', href: '#', description: "Hear from out winning customers", icon: FaceSmile },
    { name: 'Documentation', href: '#', description: "Knowledge base for the users", icon: LifeBuoy02 },
]

export default function IconTItleTextPopover() {
    return (
        <Popover>
            <PopoverTrigger className="inline-flex items-center gap-x-1 text-base font-medium outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverTrigger>

            <PopoverContent
                className="mt-4 flex w-screen max-w-max rounded-xl shadow-lg bg-background p-0">
                <div className="w-screen max-w-md flex-auto overflow-hidden text-sm leading-6">
                    <div className="p-2 flex flex-col gap-0.5">
                        {features.map((item) => (
                            <Link to={item.href} key={item.name} className="flex gap-x-3 rounded-xl p-2 hover:bg-secondary">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-sm'>
                                    <div className="font-medium text-foreground">
                                        {item.name}
                                    </div>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export function IconTitleTextAccordion() {
    return (
        <AccordionItem value="icon-title-text-accordion">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col gap-0.5">
                    {features.map((item, index) => (
                        <Link to={item.href} key={index} className="flex gap-x-3 py-3 hover:bg-secondary">
                            <div className="flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
                                <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                                <div className="font-medium text-base text-foreground">
                                    {item.name}
                                </div>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}
