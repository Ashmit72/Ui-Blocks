const Testimonials1 = () => {
return (
    <div className='max-w-screen-xl mx-auto px-5 sm:px-6 py-8 md:py-[60px]'>
        <div className="flex flex-col-reverse border lg:flex-row rounded-2xl overflow-hidden">
            <div className="p-6 sm:py-10 sm:gap-8 sm:px-10 flex flex-col items-start justify-center gap-5 lg:w-3/5 lg:px-16 lg:py-20" >
                <span className="scale-75 md:scale-100 translate-x-[-15px] md:translate-x-[0px]" >
                    <img className="grayscale contrast-100 dark:invert" src="/Radian.png" alt="radian" />
                </span>
                <p className="font-medium text-base sm:text-xl md:text-2xl" >
                “Building products in a large organization can be a very lengthy and expensive process. With Radian we were able to cut our development costs and time by more than 60%, which allowed our team to develop very high quality digital experiences”
                </p>
                <section>
                    <h3 className="font-semibold text-sm" >Nick Bayer</h3>
                    <p>VP of Engineering, Open Systems</p>
                </section>
            </div>
            <div className='h-1/2 w-full lg:h-[550px] lg:w-2/5'>
                <img src="./assets/photo2.png" alt="hero" className='h-full w-full object-cover lg:h-full' />
            </div>
        </div>
    </div>
)
}

export default Testimonials1