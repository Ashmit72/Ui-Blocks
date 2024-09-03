const Testimonials4 = () => {
    return (
        <div className="w-screen px-5 py-14 bg-slate-150 flex flex-col items-center justify-start">
            <div className="px-6 flex items-center flex-col mb-10">
                <button className="bg-secondary px-1 py-3 rounded-2xl w-[101px] h-[28px] flex items-center justify-center text-base mb-3">Community</button>
                <h1 className="mb-5 font-semibold text-3xl text-center sm:text-4xl md:text-5xl">Loved By Builder and Creatives</h1>
                <p className="text-center text-base md:max-w-[640px] sm:max-w-[390px]">Thousands of developers and builders around the globe are using Radian to ship their next big idea and they love it</p>
            </div>
            <div className="max-w-screen-xl" >
            <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-center py-6 items-center md:gap-5 gap-5">
                {Array(9).fill("").map((_, index) => (
                    <li key={index} className="p-6 flex flex-col gap-5 border rounded-3xl w-full md:w-[48%] lg:w-[30%]">
                        <section className="flex items-center justify-between">
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-10 h-10">
                                    <img className="w-full h-full object-cover rounded-full" src="./Hero.jpg" alt="image" />
                                </div>
                                <div className="text-sm">
                                    <h3 className="font-semibold">Nick Bayer</h3>
                                    <p>@iamsebdeb</p>
                                </div>
                            </div>
                            <div className="w-14 h-14">
                                <img className="w-full h-full object-contain" src="/logos/Github.png" alt="logo" />
                            </div>
                        </section>
                        <p className="text-sm">Building products in a large organization can be a very lengthy and expensive process. With Radian we were able to cut our development costs and time.</p>
                        <div className="text-xs">
                            <span className="mr-2">10:01 PM</span>
                            <span>Aug 7, 2024</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default Testimonials4;
