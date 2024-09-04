const Testimonials3 = () => {
  return (
<div className="w-screen px-5 bg-secondary" >
      <div className="flex mx-auto py-14 gap-6 max-w-screen-xl sm:py-20 sm:gap-8 md:px-16 flex-col items-center justify-center" >
            <div className="h-12 w-12 sm:h-16 sm:w-16" >
                <img className="h-full w-full rounded-full object-cover" src="/assets/photo3.png" alt="image" />
            </div>
            <p className="font-medium text-lg sm:text-xl md:text-2xl text-center" >
            “Building products in a large organization can be a very lengthy and expensive process. With Radian we were able to cut our development costs and time by more than 60%, which allowed our team to develop very high quality digital experiences”
            </p>
            <section className="text-sm sm:text-base text-center" >
                <h3 className="font-semibold" >Nick Bayer</h3>
                <p>VP of Engineering, Open Systems</p>
            </section>
          </div>
    </div>
  )
}

export default Testimonials3