import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'

function HeroSection2() {
    return (
        <div className='min-w-screen py-14 sm:py-20 lg:py-[8.25rem]'>
            <div className="max-w-screen-xl px-5 mx-auto flex flex-col gap-14 sm:px-6 sm:gap-20 lg:flex-row justify-between">
                <div className="flex flex-col justify-center sm:w-[640px] ">
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-9">
                        <div className="flex flex-col gap-5 sm:gap-6">
                            {/* Badge Start */}
                            {/* CONFUSION: Text color for the badge */}
                            <Badge variant={"outline"} className='bg-background rounded-full px-3 py-1 w-fit'>
                                <span className='text-sm text-foreground capitalize'>Ultimate Product Library</span>
                            </Badge>
                            {/* Badge End */}

                            {/* Slogan Start */}
                            <div className="text-foreground text-4xl sm:text-5xl lg:text-6xl leading-[2.75rem] sm:leading-[3.75rem] lg:leading-[4.5rem] font-semibold -tracking-[0.045rem] sm:-tracking-[0.06rem] lg:-tracking-[0.075rem]">
                                Ship high performing products fast
                            </div>
                            {/* Slogan End */}
                        </div>

                        <div className="text-base sm:text-lg font-normal text-foreground">
                            Start your product with high quality industry standard interfaces. Copy and paste code directly in your app. Built with
                            {" "}
                            <span className='font-semibold'>React, Typescript, Tailwind CSS</span>
                            {" "}and{" "}
                            <span className='font-semibold'>shadcn/ui</span>.
                        </div>
                    </div>
                    {/* CONFUSION: Regarding the size of the buttons */}
                    <div className="flex flex-col items-center gap-3 mt-8 sm:flex-row sm:gap-4 sm:mt-9 lg:mt-10">
                        <Button className='w-full sm:w-fit' size={"lg"}>Browse Components</Button>
                        <Button className='w-full sm:w-fit' size={"lg"} variant={"outline"}>Get Started</Button>
                    </div>
                </div>

                <div className="flex items-center justify-center h-[13.75rem] sm:h-[25.313rem] lg:w-[31.375rem] lg:h-[29.75rem]">
                    <img src="Article2.png" alt="No preview" className='size-full object-cover rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection2