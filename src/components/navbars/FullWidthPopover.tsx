import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'

function ComplexPopover() {

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
        { title: "How Top 5 boring fonts for your next side project", image: "Article3.png" }
    ]

    return (
        <Popover>
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-foreground outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
                transition
                className="absolute left-0 z-10 mt-4 flex gap-2 w-full max-w-full transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="w-full max-w-full flex justify-between overflow-hidden rounded-xl bg-background text-sm leading-6 shadow-lg border">
                    <div className="p-2">
                        <div className="p-2 font-medium leading-5 text-foreground">
                            Solution
                        </div>
                        {features.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-[0.875rem] leading-5'>
                                    <a href={item.href} className="font-semibold text-foreground">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-l border-secondary">
                        <div className="p-2 font-medium leading-5 text-foreground">
                            Features
                        </div>
                        {features.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div className='text-[0.875rem] leading-5'>
                                    <a href={item.href} className="font-semibold  text-foreground">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-l border-secondary">
                        <div className="p-2 font-medium leading-5 text-foreground">
                            Featured Articles
                        </div>
                        {featuredArticles.map((item) => (
                            <div key={item.title} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="mt-1 flex h-[90px] w-[120px] flex-none items-center justify-center border border-secondary rounded-xl bg-background">
                                    <img src={item.image} alt='image' className="object-cover" />
                                </div>
                                <div className='text-[0.875rem]  font-medium leading-5 flex flex-col justify-center'>
                                    <a href={item.title} className="font-semibold  text-foreground">
                                        {item.title}
                                        <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-muted-foreground">Read Story {'>'}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}

export default ComplexPopover;