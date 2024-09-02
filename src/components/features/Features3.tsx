import { Badge } from "../ui/badge";
import features from './features-content.json'

function Features3() {
    return (
        <div className="max-w-screen-xl mx-auto px-5 sm:px-6 flex flex-col gap-10">
            <div className="flex flex-col lg:items-center gap-5 lg:gap-6">
                <div className="flex flex-col lg:items-center gap-3">
                    <Badge
                        variant={"outline"}
                        className="rounded-full max-w-fit bg-background px-3 py-1"
                    >
                        <span className="text-sm capitalize text-foreground">Features</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                    <div key={index} className="border h-[25rem] p-5 rounded-xl">
                        <div className="relative bg-gradient-to-b from-secondary to-transparent rounded-lg size-full">
                            <div className="absolute bottom-0 flex flex-col gap-2">
                                <div className="font-semibold text-lg">
                                    {feature.title}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features3;
