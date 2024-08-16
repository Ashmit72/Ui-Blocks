import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { BookOpen01, ChevronDown, FaceSmile, Flag06, HelpCircle, LifeBuoy02 } from '@untitled-ui/icons-react'

function IconTItleTextPopover2() {

    const features = [
        { name: 'About', description: "Learn more about our story", href: '#', icon: Flag06 },
        { name: 'Blog', href: '#', description: "Latest product news and updates", icon: BookOpen01 },
        { name: 'FAQ', href: '#', description: "Got any questions? Find answers", icon: HelpCircle },
        { name: 'Customer Stories', href: '#', description: "Hear from out winning customers", icon: FaceSmile },
        { name: 'Documentation', href: '#', description: "Knowledge base for the users", icon: LifeBuoy02 },
    ]

    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-foreground outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-4 flex gap-2 w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="w-screen max-w-max flex overflow-hidden rounded-xl bg-background text-sm leading-6 shadow-lg border">
                    <div className="p-2">
                        {features.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
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
                    <div className="p-2">
                        {features.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-3 rounded-xl p-2 hover:bg-border/50">
                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center border rounded-xl bg-background">
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
                </div>
            </PopoverPanel>
        </Popover>
    )
}

export default IconTItleTextPopover2;