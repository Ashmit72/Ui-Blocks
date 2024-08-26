import { Button } from '../../ui/button'

function HeroSection3() {
    return (
        <div className='min-w-screen py-14 md:py-20 lg:py-[8.25rem]'>
            <div className="max-w-screen-xl px-5 mx-auto flex flex-col gap-14 md:px-6 md:gap-20 lg:flex-row justify-between">
                <div className="flex flex-col justify-center md:w-[640px] ">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-9">
                        {/* Slogan Start */}
                        <div className="text-foreground text-4xl md:text-5xl lg:text-6xl leading-[2.75rem] md:leading-[3.75rem] lg:leading-[4.5rem] font-semibold -tracking-[0.045rem] md:-tracking-[0.06rem] lg:-tracking-[0.075rem]">
                            Ship high performing products fast
                        </div>
                        {/* Slogan End */}

                        <div className="text-base md:text-lg font-normal text-foreground">
                            Start your product with high quality industry standard interfaces. Copy and paste code directly in your app. Built with
                            {" "}
                            <span className='font-semibold'>React, Typescript, Tailwind CSS</span>
                            {" "}and{" "}
                            <span className='font-semibold'>shadcn/ui</span>.
                        </div>
                    </div>
                    {/* CONFUSION: Regarding the size of the buttons */}
                    <div className="flex flex-col items-center gap-3 mt-8 md:flex-row md:gap-4 md:mt-9 lg:mt-10">
                        <Button className='w-full md:w-fit' size={"lg"}>Browse Components</Button>
                        <Button className='w-full md:w-fit' size={"lg"} variant={"outline"}>Get Started</Button>
                    </div>
                </div>

                <div className="flex items-center justify-center h-[13.75rem] md:h-[25.313rem] lg:w-[31.375rem] lg:h-[29.75rem]">
                    <img src="Article3.png" alt="No preview" className='size-full object-cover rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection3