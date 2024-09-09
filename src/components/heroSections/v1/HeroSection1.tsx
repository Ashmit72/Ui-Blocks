import { Badge } from "../../ui/badge";
import { ArrowRight } from "@untitled-ui/icons-react";
import { Button } from "../../ui/button";

function HeroSection1() {
    return (
        <div className="mx-auto max-w-screen-xl space-y-14 px-5 py-8 sm:space-y-20 sm:px-6 sm:py-[5rem] lg:space-y-24">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-8 sm:gap-9 lg:gap-10">
                <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-9">
                    <div className="flex flex-col items-center gap-5 sm:gap-6">
                        {/* Badge Start */}
                        {/* CONFUSION: Text color for the badge */}
                        <Badge variant={"outline"} className="d-flex items-center justify-center gap-2 rounded-full bg-background p-1 text-sm font-medium">
                            <Badge variant={"outline"} className="rounded-full bg-background">
                                Version 1.0
                            </Badge>
                            <div className="flex items-center justify-center gap-1">
                                <span className="inline-block">
                                    Announcement News
                                </span>
                                <ArrowRight className="size-4" />
                            </div>
                        </Badge>
                        {/* Badge End */}

                        {/* Slogan Start */}
                        <div className="text-center text-4xl font-semibold leading-[2.75rem] -tracking-[0.72px] text-foreground sm:text-5xl sm:leading-[3.75rem] sm:-tracking-[0.96px] lg:text-6xl lg:leading-[4.5rem] lg:-tracking-[1.2px]">
                            Build beautiful products not in months but weeks
                        </div>
                        {/* Slogan End */}
                    </div>

                    <div className="mx-auto text-center text-base font-normal text-foreground sm:text-lg lg:max-w-3xl">
                        Start your product with high quality industry standard interfaces.
                        Copy and paste code directly in your app. Built with{" "}
                        <span className="font-semibold">
                            React, Typescript, Tailwind CSS
                        </span>{" "}
                        and <span className="font-semibold">shadcn/ui</span>.
                    </div>
                </div>
                {/* CONFUSION: Regarding the size of the buttons */}
                <div className="flex w-full flex-col justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <Button className="w-full sm:w-fit" size={"lg"}>
                        Browse Components
                    </Button>
                    <Button className="w-full sm:w-fit" size={"lg"} variant={"outline"}>
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="h-[13.75rem] sm:h-[25.3125rem] lg:h-[43.3125rem] rounded-xl">
                <img src="Gradient.jpg" alt="Hero" className="size-full object-cover rounded-xl" />
            </div>
        </div>
    );
}

export default HeroSection1;
