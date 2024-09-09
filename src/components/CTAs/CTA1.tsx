import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

function CTA1() {
    return (
        <div className='max-w-screen-xl mx-auto px-5 sm:px-6 py-8 sm:py-[3.75rem]'>
            <div className=" px-6 py-16 flex flex-col border rounded-2xl sm:py-20 lg:py-24">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-3">
                            {/* Badge */}
                            <Badge variant={"outline"} className='bg-background rounded-full px-3 py-1 w-fit'>
                                <span className='text-sm font-medium text-foreground capitalize'>Get Started</span>
                            </Badge>

                            {/* Heading */}
                            <div className="text-foreground text-center font-semibold text-[2rem] leading-[2.6rem] sm:text-4xl sm:leading-[2.75rem] sm:-tracking-[0.045rem] lg:text-5xl lg:leading-[3.75rem] lg:-tracking-[0.06rem]">
                                Start building your product today
                            </div>

                        </div>
                        {/* Slogan */}
                        <p className='text-base font-normal text-center text-foreground'>
                            Get started by creating first component for your next big idea.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 ">
                        <Button className='w-full order-2 sm:w-fit sm:order-1' variant={"outline"} size={"lg"}>Get Started</Button>
                        <Button className='w-full order-1  sm:w-fit sm:order-2' size={"lg"}>Browse Components</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA1