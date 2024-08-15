import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDown, Flag06, BookOpen01, HelpCircle, FaceSmile, LifeBuoy02 } from '@untitled-ui/icons-react'

const solutions = [
    { name: 'About', href: '#', icon: Flag06 },
    { name: 'Blog', href: '#', icon: BookOpen01 },
    { name: 'FAQ', href: '#', icon: HelpCircle },
    { name: 'Customer Stories', href: '#', icon: FaceSmile },
    { name: 'Documentation', href: '#', icon: LifeBuoy02 },
]

export default function SimplePopover() {
    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-[1rem] font-medium leading-6 text-gray-900 outline-none">
                <span>Features</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-4 flex w-60 max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg border border-[#F2F4F7]">
                    <div className="p-2">
                        {solutions.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-3 rounded-lg p-2 hover:bg-secondary ">
                                <div className="flex-none items-center justify-center rounded-lg border-red-400">
                                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                </div>
                                <div>
                                    <a href={item.href} className="font-semibold text-[0.875rem] leading-5 text-gray-900">
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
