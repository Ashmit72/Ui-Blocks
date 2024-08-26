import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

function CTA3() {
    return (
        <div className="max-w-screen bg-border">
            <div className='max-w-screen-xl mx-auto px-5 md:px-6'>
                <div className=" py-16 flex flex-col md:py-20 lg:py-24">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex flex-col items-center gap-3">
                                {/* Badge */}
                                <Badge variant={"outline"} className='bg-background rounded-full px-3 py-1 w-fit'>
                                    <span className='text-sm font-medium text-foreground capitalize'>Get Started</span>
                                </Badge>

                                {/* Heading */}
                                <div className="text-foreground text-center font-semibold text-[2rem] leading-[2.6rem] md:text-4xl md:leading-[2.75rem] md:-tracking-[0.045rem] lg:text-5xl lg:leading-[3.75rem] lg:-tracking-[0.06rem]">
                                    Start building your product today
                                </div>

                            </div>
                            {/* Slogan */}
                            <p className='text-base font-normal text-center text-foreground'>
                                Get started by creating first component for your next big idea.
                            </p>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4 ">
                            <Input type='email' placeholder='Your work email' className='text-base overflow-ellipsis h-10 self-stretch bg-background md:w-80 ' />
                            <Button size={'lg'} className='w-full md:w-fit'>Start your 14 days trial</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA3