import { Badge } from '../ui/badge';
import data from './testimonials4.json';

const Testimonials4 = () => {
    return (
        <div className="max-w-screen bg-background">
            <div className="max-w-screen-xl mx-auto py-14 px-6 sm:py-20">
                <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 sm:mb-12 mb-10">
                    <Badge className='w-[101px] h-[28px] rounded-full flex items-center justify-center text-sm font-medium px-1 py-3' variant="outline">Community</Badge>
                    <h1 className="font-semibold text-3xl text-center sm:text-4xl md:text-5xl">Loved By Builder and Creatives</h1>
                    <p className="text-center text-base md:max-w-[640px] sm:max-w-[390px]">Thousands of developers and builders around the globe are using Radian to ship their next big idea and they love it.</p>
                </div>
                <div className="max-w-screen-xl [mask-image:_linear-gradient(to_bottom,_black_20%,_black_calc(100%-250px),transparent_100%)] lg:[mask-image:none]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6">
                        {data.content.map((item) => (
                            <li key={item.id} className="p-6 flex flex-col gap-5 border rounded-[16px]">
                                <section className="flex items-center justify-between">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full object-cover rounded-full" src={item.image} alt={item.name} />
                                        </div>
                                        <div className="text-sm">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p>@iamsebdeb</p>
                                        </div>
                                    </div>
                                    <div className="w-14 h-14">
                                        <img className="w-full h-full object-contain grayscale contrast-100 dark:invert" src="/logos/Notion.png" alt="logo" />
                                    </div>
                                </section>
                                <p className="text-sm">{item.content}</p>
                                <div className="text-xs">
                                    <span className="mr-2">10:01 PM</span>
                                    <span>Aug 7, 2024</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Testimonials4;
