import { Badge } from '../ui/badge'
import data from './testimonials.json'

const Testimonials2 = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-14 px-5" >
            <div className="flex flex-col items-center justify-between  mb-10" >
            <Badge className='mb-3 w-[101px] h-[28px]  rounded-full flex items-center justify-center text-sm font-medium px-1 py-3' variant="secondary">Community</Badge>
                <h1 className="font-semibold text-[30px] md:text-3xl lg:text-5xl text-center mb-5" >Loved by Builders and Creatives</h1>
                <p className="text-center text-base max-w-[390px] sm:max-w-[640px]" >Thousands of developers and builders around the globe are using Radian to ship their next big idea and they love it</p>
            </div>
            <section className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] lg:[mask-image:none]" >
                {/* PROBLEM:MORE ITEMS FASTER IT MOVES */}
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-slow-scroll" >
                    {
                        data.content.map((item) => (
                            <li className="min-w-[397.33px] min-h-[268px] border-2 rounded-[16px] pb-6 px-6 pt-8 " key={item.id} >
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
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-slow-scroll" >
                    {
                        data.content.map((item) => (
                            <li className="min-w-[397.33px] min-h-[268px] border-2 rounded-[16px] pb-6 px-6 pt-8 " key={item.id} >
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
    )
}

export default Testimonials2