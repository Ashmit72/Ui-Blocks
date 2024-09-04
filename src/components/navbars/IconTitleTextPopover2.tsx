import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'
import { Separator } from '../ui/separator'


const features = [
    { name: 'About', description: "Learn more about our story", href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', description: "Latest product news and updates", icon: BookOpen01 },
    { name: 'FAQ', href: '#', description: "Got any questions? Find answers", icon: HelpCircle },
    { name: 'Customer Stories', href: '#', description: "Hear from out winning customers", icon: FaceSmile },
    { name: 'Documentation', href: '#', description: "Knowledge base for the users", icon: LifeBuoy02 },
]

export default function IconTItleTextPopover2() {
    return (
        <Popover>
            <PopoverTrigger className="inline-flex items-center gap-x-1 text-base font-medium outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverTrigger>

            <PopoverContent
                className="mt-4 flex gap-2 w-screen max-w-max shadow-lg bg-popover rounded-xl p-0">
                <div className="w-screen max-w-max flex gap-2 overflow-hidden text-sm leading-6">
                    <div className="p-2 flex-1 flex flex-col gap-0.5">
                        {features.map((item) => (
                            <div key={item.name} className="flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-sm'>
                                    <a href={item.href} className="font-medium  text-foreground">
                                        {item.name}
                                    </a>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 flex-1 flex flex-col gap-0.5">
                        {features.map((item) => (
                            <div key={item.name} className="flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-sm'>
                                    <a href={item.href} className="font-medium text-foreground">
                                        {item.name}
                                    </a>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export function IconTitleTextAccordion2() {
    return (
        <AccordionItem value="icon-title-text-accordion2">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col">
                    <div className="py-2 flex-1 flex flex-col gap-0.5">
                        {features.map((item, index) => (
                            <div key={index} className="flex gap-x-3 py-3 hover:bg-border/50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <a href={item.href} className="font-medium text-base text-foreground">
                                        {item.name}
                                    </a>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Separator />
                    <div className="py-2 flex-1 flex flex-col gap-0.5">
                        {features.map((item, index) => (
                            <div key={index} className="flex gap-x-3 py-3 hover:bg-border/50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <a href={item.href} className="font-medium text-base text-foreground">
                                        {item.name}
                                    </a>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}