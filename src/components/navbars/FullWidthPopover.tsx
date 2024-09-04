import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { BookOpen01, ChevronDown, ChevronRight, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom/mobile-nav-accordion'
import { Separator } from '@/components/ui/separator'
import { Fragment } from 'react/jsx-runtime'
const features = [
    { name: 'About', description: "Learn more about our story", href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', description: "Latest product news and updates", icon: BookOpen01 },
    { name: 'FAQ', href: '#', description: "Got any questions? Find answers", icon: HelpCircle },
    { name: 'Customer Stories', href: '#', description: "Hear from out winning customers", icon: FaceSmile },
    { name: 'Documentation', href: '#', description: "Knowledge base for the users", icon: LifeBuoy02 },
]

const featuredArticles = [
    { title: "How to build a beautiful and scalable products", image: "Article1.png" },
    { title: "Best way to ship products that  your users find useful", image: "Article2.png" },
    { title: "Top 5 boring fonts for your next side project", image: "Article3.png" }
]


export default function FullWidthPopover() {
    return (
        <Popover>
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-foreground outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>
            <Transition
                as={Fragment}
                enter="transition duration-150 ease-in-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition duration-150 ease-in-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <PopoverPanel
                    transition
                    className="absolute left-0 z-50 mt-5 w-full max-w-screen">
                    <div className="w-full flex justify-between overflow-hidden rounded-xl bg-popover text-sm shadow-lg border">
                        <div className="p-2 flex-1 flex flex-col gap-0.5">
                            <div className="px-2 py-2.5 font-medium text-sm text-foreground">
                                Solution
                            </div>
                            {features.map((item) => (
                                <div key={item.name} className="flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center border border-secondary rounded-xl bg-background">
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
                            <a href='#' className="px-2 py-2.5 font-medium text-sm text-muted-foreground flex items-center gap-1">
                                <span className='inline-block'>Explore all solutions </span>
                                <ChevronRight className='size-4' />
                            </a>
                        </div>

                        <div>
                            <Separator orientation='vertical' />
                        </div>

                        <div className="p-2 flex-1 flex flex-col gap-0.5">
                            <div className="px-2 py-2.5 font-medium text-sm text-foreground">
                                Features
                            </div>
                            {features.map((item) => (
                                <div key={item.name} className="flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                    <div className="flex h-11 w-11 flex-none items-center justify-center border border-secondary rounded-xl bg-background">
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
                            <a href='#' className="px-2 py-2.5 font-medium text-sm text-muted-foreground flex items-center gap-1">
                                <span className='inline-block'>Explore all solutions </span>
                                <ChevronRight className='size-4' />
                            </a>
                        </div>
                        <div>
                            <Separator orientation='vertical' />
                        </div>
                        <div className="p-2 flex-1 flex flex-col gap-1">
                            <div className="px-2 py-2.5 font-medium text-sm text-foreground">
                                Featured Articles
                            </div>
                            {featuredArticles.map((item) => (
                                <div key={item.title} className="flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                    <div className="flex h-[90px] w-[120px] flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                        <img src={item.image} alt='image' className="object-cover" />
                                    </div>
                                    <div className='text-sm flex flex-col justify-center gap-2'>
                                        <a href={item.title} className="font-medium text-foreground">
                                            {item.title}
                                        </a>
                                        <a href='#' className="font-medium text-sm text-muted-foreground flex items-center gap-1">
                                            <span className='inline-block'>Explore all solutions </span>
                                            <ChevronRight className='size-4' />
                                        </a>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}

export function FullWidthAccordion() {
    return (
        <AccordionItem value="complex-accordion">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col">
                    <div className="py-2 flex-1 flex flex-col gap-0.5">
                        <div className="py-2.5 font-medium text-base text-foreground">
                            Features
                        </div>
                        {features.map((item) => (
                            <div key={item.name} className="flex items-center gap-x-3 py-2.5 hover:bg-border/50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-sm'>
                                    <a href={item.href} className="font-semibold text-base text-foreground">
                                        {item.name}
                                    </a>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <a href='#' className="px-2 py-2.5 font-medium text-base text-muted-foreground flex items-center gap-1">
                            <span className='inline-block'>Explore all solutions </span>
                            <ChevronRight className='size-4' />
                        </a>
                    </div>
                    <Separator />
                    <div className="py-2 flex-1 flex flex-col gap-0.5">
                        <div className="py-2.5 font-medium text-base text-foreground">
                            Features
                        </div>
                        {features.map((item) => (
                            <div key={item.name} className="flex items-center gap-x-3 py-2.5 hover:bg-border/50">
                                <div className="flex h-11 w-11 flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-sm'>
                                    <a href={item.href} className="font-medium text-base text-foreground">
                                        {item.name}
                                    </a>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                        <a href='#' className="px-2 py-2.5 font-medium text-base text-muted-foreground flex items-center gap-1">
                            <span className='inline-block'>Explore all solutions </span>
                            <ChevronRight className='size-4' />
                        </a>
                    </div>
                    <Separator />
                    <div className="py-2 flex-1 flex flex-col gap-1">
                        <div className="py-2.5 font-medium text-base text-foreground">
                            Featured Articles
                        </div>
                        {featuredArticles.map((item) => (
                            <div key={item.title} className="flex gap-x-3 py-2 hover:bg-border/50">
                                <div className="flex h-[90px] w-[120px] flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                    <img src={item.image} alt='image' className="object-cover" />
                                </div>
                                <div className='font-medium flex flex-col justify-center'>
                                    <a href={item.title} className="font-semibold text-base text-foreground">
                                        {item.title}
                                    </a>
                                    <p className="text-sm text-muted-foreground">Read Story {'>'}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}