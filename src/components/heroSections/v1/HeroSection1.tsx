import { Badge } from "../../ui/badge";
import { ArrowRight } from "@untitled-ui/icons-react";
import { Button } from "../../ui/button";

function HeroSection1() {
    return (
        <div className="mx-auto max-w-screen-xl space-y-14 px-5 py-14 sm:space-y-20 sm:px-6 sm:py-20 lg:space-y-14">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-8 md:gap-9 lg:gap-10">
                <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-9">
                    <div className="flex flex-col items-center gap-5 md:gap-6">
                        {/* Badge Start */}
                        {/* CONFUSION: Text color for the badge */}
                        <Badge
                            variant={"outline"}
                            className="d-flex items-center justify-center gap-2 rounded-full bg-background p-1 text-sm"
                        >
                            <Badge
                                variant={"outline"}
                                className="rounded-full bg-background text-foreground"
                            >
                                Version 1.0
                            </Badge>
                            <div className="flex items-center justify-center gap-1">
                                <span className="inline-block text-sm text-foreground">
                                    Announcement News
                                </span>
                                <ArrowRight className="size-4" />
                            </div>
                        </Badge>
                        {/* Badge End */}

                        {/* Slogan Start */}
                        <div className="text-center text-4xl font-semibold leading-[2.75rem] -tracking-[0.72px] text-foreground md:text-5xl md:leading-[3.75rem] md:-tracking-[0.96px] lg:text-6xl lg:leading-[4.5rem] lg:-tracking-[1.2px]">
                            Build beautiful products not in months but weeks
                        </div>
                        {/* Slogan End */}
                    </div>

                    <div className="mx-auto text-center text-base font-normal text-foreground md:text-lg lg:max-w-3xl">
                        Start your product with high quality industry standard interfaces.
                        Copy and paste code directly in your app. Built with{" "}
                        <span className="font-semibold">
                            React, Typescript, Tailwind CSS
                        </span>{" "}
                        and <span className="font-semibold">shadcn/ui</span>.
                    </div>
                </div>
                {/* CONFUSION: Regarding the size of the buttons */}
                <div className="flex w-full flex-col justify-center gap-3 md:flex-row md:items-center md:gap-4">
                    <Button className="w-full md:w-fit" size={"lg"}>
                        Browse Components
                    </Button>
                    <Button className="w-full md:w-fit" size={"lg"} variant={"outline"}>
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="h-[13.75rem] sm:h-[25.3125rem] lg:h-[43.3125rem]">
                <img src="Article1.png" alt="Hero" className="size-full object-cover" />
            </div>
        </div>
    );
}

export default HeroSection1;
