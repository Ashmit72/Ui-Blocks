import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

function HeroSection2() {
    return (
        <div className="min-w-screen py-8 sm:py-[3.75rem]">
            <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-14 px-5 sm:gap-20 sm:px-6 lg:flex-row">
                <div className="flex flex-col justify-center sm:w-[640px]">
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-9">
                        <div className="flex flex-col gap-5 sm:gap-6">
                            {/* Badge Start */}
                            {/* CONFUSION: Text color for the badge */}
                            <Badge
                                variant={"outline"}
                                className="w-fit rounded-full bg-background px-3 py-1"
                            >
                                <span className="text-sm capitalize font-medium">
                                    Ultimate Product Library
                                </span>
                            </Badge>
                            {/* Badge End */}

                            {/* Slogan Start */}
                            <div className="text-4xl font-semibold leading-[2.75rem] -tracking-[0.045rem] text-foreground sm:text-5xl sm:leading-[3.75rem] sm:-tracking-[0.06rem] lg:text-6xl lg:leading-[4.5rem] lg:-tracking-[0.075rem]">
                                Ship high performing products fast
                            </div>
                            {/* Slogan End */}
                        </div>

                        <div className="text-base font-normal text-foreground sm:text-lg">
                            Start your product with high quality industry standard interfaces.
                            Copy and paste code directly in your app. Built with{" "}
                            <span className="font-semibold">
                                React, Typescript, Tailwind CSS
                            </span>{" "}
                            and <span className="font-semibold">shadcn/ui</span>.
                        </div>
                    </div>
                    {/* CONFUSION: Regarding the size of the buttons */}
                    <div className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4 lg:mt-10">
                        <Button className="w-full sm:w-fit" size={"lg"}>
                            Browse Components
                        </Button>
                        <Button className="w-full sm:w-fit" size={"lg"} variant={"outline"}>
                            Get Started
                        </Button>
                    </div>
                </div>

                <div className="flex h-[13.75rem] items-center justify-center sm:h-[25.313rem] lg:h-[29.75rem] lg:w-[31.375rem]">
                    <img
                        src="Gradient.webp"
                        alt="No preview"
                        className="size-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroSection2;
