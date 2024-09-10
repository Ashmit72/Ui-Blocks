import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { ChevronRight } from "@untitled-ui/icons-react";
import features from "./features-content.json";

function Features1() {
    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 flex flex-col gap-10 py-8 sm:py-[3.75rem]">
            <div className="flex flex-col lg:items-center gap-5 lg:gap-6">
                <div className="flex flex-col lg:items-center gap-3">
                    <Badge variant={"outline"} className="rounded-full max-w-fit bg-background px-3 py-1">
                        <span className="text-sm capitalize font-medium">Features</span>
                    </Badge>
                    <div className="max-w-3xl lg:text-center text-[2rem] sm:text-4xl lg:text-5xl font-semibold leading-[2.6rem] sm:leading-[2.75rem] lg:leading-[3.75rem] sm:-tracking-[0.045rem] lg:-tracking-[0.06rem]">
                        Turn ideas into projects
                    </div>
                </div>
                <p className="lg:text-center max-w-screen-sm text-muted-foreground">
                    Get the best assets for your next project. Focus more on building your
                    product than fixing boring responsive designs and pixel peeping
                </p>
            </div>
            <div className="flex flex-col">
                {features.map((feature, index) => (
                    <div key={index} className="py-8 sm:py-10 lg:py-12 flex flex-col gap-8 lg:flex-row lg:gap-36 ">
                        <div
                            className={`flex flex-col justify-center ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
                        >
                            <div className="sm:w-[30rem] lg:pl-6 flex flex-col gap-5 lg:gap-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[2.375rem] lg:leading-[2.75rem] lg:-tracking-[0.045rem]">
                                    {feature.title}
                                </div>
                                <p className="text-muted-foreground">{feature.description}</p>
                                <Link
                                    className="text-blue-700 inline-flex space-x-1 items-center"
                                    to={feature.url}
                                >
                                    <span className="inline-block">Get Started</span>
                                    <ChevronRight className="h-5" />
                                </Link>
                            </div>
                        </div>
                        <div
                            className={`h-80 sm:h-[25rem] w-full ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                        >
                            <img
                                src={feature.image}
                                alt="Website Creative"
                                className="rounded-xl size-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features1;
