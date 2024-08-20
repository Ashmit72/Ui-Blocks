import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function HeroSection3() {
    return (
        // CONFUSION:Vertical padding in lg-devices
        <div className='min-w-screen px-5 py-14 md:px-6 md:py-20 lg:p-20'>

            <div className="max-w-screen-lg mx-auto  flex gap-8 md:gap-9 lg:gap-10 flex-col items-center">
                {/* Slogan Start */}
                <div className="text-center text-foreground text-4xl md:text-5xl lg:text-6xl leading-[2.75rem] md:leading-[3.75rem] lg:leading-[4.5rem] font-semibold -tracking-[0.72px] md:-tracking-[0.96px] lg:-tracking-[1.2px]">
                    Build beautiful products not in months but weeks
                </div>
                {/* Slogan End */}


                <div className="text-base md:text-lg lg:max-w-3xl  mx-auto text-center font-normal text-foreground">
                    Start your product with high quality industry standard interfaces. Copy and paste code directly in your app. Built with
                    {" "}
                    <span className='font-semibold'>React, Typescript, Tailwind CSS</span>
                    {" "}and{" "}
                    <span className='font-semibold'>shadcn/ui</span>.
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:gap-4 md:items-center justify-center w-full">
                    <Button className='w-full md:w-fit'>Browse Components</Button>
                    <Button className='w-full md:w-fit' variant={"outline"}>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection3