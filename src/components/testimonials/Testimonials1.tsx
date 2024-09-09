import { useState, useEffect } from 'react';
import data from "./testimonial1.json"
const Testimonials1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.testimonials.length);
    }, 10000); // change testimonial every 10 seconds

    return () => clearInterval(interval); 
  }, []);

  const { text, author, position, image, heroImage } = data.testimonials[currentIndex];

  return (
    <div className='max-w-screen-xl mx-auto px-5 sm:px-6 py-8 md:py-[60px]'>
      <div className="flex flex-col-reverse border lg:flex-row rounded-2xl overflow-hidden">
        <div className="p-6 sm:py-10 sm:gap-8 sm:px-10 flex flex-col items-start justify-center gap-5 lg:w-3/5 lg:px-16 lg:py-20">
          <span className="h-[32px] w-[133.71px] md:translate-x-[0px]">
            <img className="grayscale w-full h-full object-cover dark:invert" src={image} alt="testimonial-logo" />
          </span>
          <p className="font-medium text-base sm:text-xl md:text-2xl">{text}</p>
          <section>
            <h3 className="font-semibold text-sm">{author}</h3>
            <p>{position}</p>
          </section>
        </div>
        <div className='h-1/2 w-full lg:h-[550px] lg:w-2/5'>
          <img src={heroImage} alt="hero" className='h-full w-full object-cover lg:h-full' />
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
