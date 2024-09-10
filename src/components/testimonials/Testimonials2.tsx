import { useState } from 'react';
import { Badge } from '../ui/badge'
import data from './testimonials2.json'


const Testimonials2 = () => {
    const [pauseonHover, setPauseonHover] = useState(false);
    return (
        // REFACTORED COMPONENT 
        <div className='max-w-screen bg-background' >
            <div className="max-w-screen-xl mx-auto py-8 md:py-[60px] px-6" >
                <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 sm:mb-12 mb-10" >
                    <Badge className='w-[101px] h-[28px]  rounded-full flex items-center justify-center text-sm font-medium px-1 py-3' variant="outline">Community</Badge>
                    <h1 className="font-semibold text-[30px] md:text-3xl lg:text-5xl text-center" >Loved by Builders and Creatives</h1>
                    <p className="text-center text-base max-w-[390px] sm:max-w-[640px]" >Thousands of developers and builders around the globe are using Radian to ship their next big idea and they love it</p>
                </div>
                <section className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]" >
                    {/* PROBLEM:MORE ITEMS FASTER IT MOVES */}
                    <ul onMouseOver={()=>setPauseonHover(true)} onMouseLeave={()=>setPauseonHover(false)} className={`flex items-center justify-center md:justify-start mx-2.5 [&_img]:max-w-none  ${pauseonHover?'animate-none':'animate-infinite-slow-scroll'} gap-5`} >
                        {
                            data.content.map((item) => (
                                <li className="lg:min-w-[397.33px] sm:min-w-[400px] min-w-[390px] min-h-[268px] border-[1px] rounded-[16px] pb-6 px-6 pt-8 " key={item.id} >
                                    <p className="mb-6 text-base" >{item.content}</p>
                                    <div className="flex items-center justify-start" >
                                        <div className="w-10 h-10 mr-4" >
                                            <img className="h-full rounded-full w-full object-cover" src={item.image} alt="image" />
                                        </div>
                                        <div className="text-sm" >
                                            <h3 className="font-semibold" >{item.name}</h3>
                                            <p>{item.caption}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {/* PROBLEM:MORE ITEMS FASTER IT MOVES */}
                    <ul onMouseOver={()=>setPauseonHover(true)} onMouseLeave={()=>setPauseonHover(false)} className={`flex items-center justify-center md:justify-start mx-2.5 [&_img]:max-w-none  ${pauseonHover?'animate-none':'animate-infinite-slow-scroll'} gap-5`} >
                        {
                            data.content.map((item) => (
                                <li className="lg:min-w-[397.33px] sm:min-w-[400px] min-w-[390px] min-h-[268px] border-2 rounded-[16px] pb-6 px-6 pt-8 " key={item.id} >
                                    <p className="mb-6 text-base" >{item.content}</p>
                                    <div className="flex items-center justify-start" >
                                        <div className="w-10 h-10 mr-4" >
                                            <img className="h-full rounded-full w-full object-cover" src={item.image} alt="image" />
                                        </div>
                                        <div className="text-sm" >
                                            <h3 className="font-semibold" >{item.name}</h3>
                                            <p>{item.caption}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Testimonials2