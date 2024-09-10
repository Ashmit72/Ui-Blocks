import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function CTA4() {
    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 py-8 sm:py-[3.75rem]">
            <div className="border rounded-2xl flex flex-col gap-14  sm:gap-12 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-8 justify-center pt-16 px-6 sm:pt-20 lg:w-[480px] lg:pt-0 lg:pl-16">
                    <div className="flex flex-col gap-6 ">
                        <div className="flex flex-col gap-3">
                            {/* Badge Start */}
                            <Badge variant={"outline"} className='bg-background rounded-full px-3 py-1 w-fit'>
                                <span className='text-sm font-medium text-foreground capitalize'>Get Started</span>
                            </Badge>
                            {/* Badge End */}

                            {/* Slogan Start */}
                            <div className="text-foreground font-semibold text-[2rem] leading-[2.6rem] sm:text-4xl sm:leading-[2.75rem] sm:-tracking-[0.045rem] lg:text-5xl lg:leading-[3.75rem] lg:-tracking-[0.06rem]">
                                Start building your product today
                            </div>
                            {/* Slogan End */}
                        </div>

                        <p className='text-base font-normal text-foreground'>
                            Get started by creating first component for your next big idea.
                        </p>
                    </div>
                    {/* CONFUSION: Regarding the size of the buttons */}
                    <div className="flex flex-col items-center gap-3  sm:flex-row sm:gap-4">
                        <Button className='w-full order-2 sm:w-fit sm:order-1' size={"lg"} variant={"outline"}>Get Started</Button>
                        <Button className='w-full order-1 sm:w-fit sm:order-2' size={"lg"}>Browse Components</Button>
                    </div>
                </div>
                {/* CONFUSION:Height and Width of the image */}
                <div className="flex items-center justify-center h-[16rem] sm:h-[25rem] lg:w-[35rem] lg:h-[29.75rem]">
                    <img src="Gradient.jpg" alt="No preview" className='size-full object-cover rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none' />
                </div>
            </div>
        </div>
    )
}

export default CTA4;