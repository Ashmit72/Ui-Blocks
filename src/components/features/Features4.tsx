import { Badge } from "../ui/badge"

function Features4() {
    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 flex flex-col gap-10">
            <div className="flex flex-col items-center gap-5 lg:gap-6">
                <div className="flex flex-col items-center gap-3">
                    <Badge
                        variant={"outline"}
                        className="rounded-full max-w-fit bg-background px-3 py-1"
                    >
                        <span className="text-sm capitalize text-foreground">Features</span>
                    </Badge>
                    <div className="max-w-3xl text-center text-[2rem] sm:text-4xl lg:text-5xl font-semibold leading-[2.6rem] sm:leading-[2.75rem] lg:leading-[3.75rem] sm:-tracking-[0.045rem] lg:-tracking-[0.06rem]">
                        Turn ideas into projects
                    </div>
                </div>
                <p className="text-center max-w-screen-sm text-muted-foreground">
                    Get the best assets for your next project. Focus more on building your
                    product than fixing boring responsive designs and pixel peeping
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-5">
                <div className="border h-[25rem] p-5 rounded-xl lg:col-span-2 sm:col-span-2">
                    <div className="relative size-full bg-gradient-to-b from-transparent to-background">
                        <img src="Gradient.jpg" alt="no-image" className="absolute -z-10 size-full object-cover rounded-lg" />
                        <div className="absolute max-w-[22.5rem] bottom-0 flex flex-col gap-2 ">
                            <div className="font-semibold text-lg">
                                Seamless Integration
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Blend seamlessly with the tools you already use, allowing for a smooth development process
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border h-[25rem] p-5 rounded-xl lg:col-span-2 sm:col-span-2">
                    <div className="relative size-full bg-gradient-to-b from-transparent to-background">
                        <img src="Gradient.jpg" alt="no-image" className="absolute -z-10 size-full object-cover rounded-lg" />
                        <div className="absolute max-w-[22.5rem] bottom-0 flex flex-col gap-2">
                            <div className="font-semibold text-lg">
                                Ready-to-use Components
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Comprehensive library of UI components that are ready to be implemented
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border h-[25rem] p-5 rounded-xl lg:col-span-2 sm:col-span-2">
                    <div className="relative size-full bg-gradient-to-b from-transparent to-background">
                        <img src="Gradient.jpg" alt="no-image" className="absolute -z-10 size-full object-cover rounded-lg" />
                        <div className="absolute max-w-[22.5rem] bottom-0 flex flex-col gap-2">
                            <div className="font-semibold text-lg">
                                Advanced Component Version Control
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Maintain control over component updates with Radian’s version control system
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border h-[25rem] p-5 rounded-xl lg:col-span-3 sm:col-span-2">
                    <div className="relative size-full bg-gradient-to-b from-transparent to-background">
                        <img src="Gradient.jpg" alt="no-image" className="absolute -z-10 size-full object-cover rounded-lg" />
                        <div className="absolute max-w-[22.5rem] bottom-0 flex flex-col gap-2">
                            <div className="font-semibold text-lg">
                                Customizable Themes
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Easily customize themes to match your brand and make your product stands out visually
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border h-[25rem] p-5 rounded-xl lg:col-span-3 sm:col-span-4">
                    <div className="relative size-full bg-gradient-to-b from-transparent to-background">
                        <img src="Gradient.jpg" alt="no-image" className="absolute -z-10 size-full object-cover rounded-lg" />
                        <div className="absolute max-w-[22.5rem] bottom-0 flex flex-col gap-2">
                            <div className="font-semibold text-lg">
                                Collaborative Design Libraries
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Blend seamlessly with the tools you already use, allowing for a smooth development process
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features4