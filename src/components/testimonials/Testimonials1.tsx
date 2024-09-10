import { useState, useEffect } from 'react';
import data from './testimonial1.json';
import React from 'react';

const Testimonials1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pauseOnHover, setPauseOnHover] = useState(false);
  const [startX, setStartX] = useState(0); // Used for both mouse and touch start position
  const [endX, setEndX] = useState(0); // Used for both mouse and touch end position

  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseOnHover) return;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.testimonials.length);
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, [pauseOnHover]);

  const handleTouchStart = (e:React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e:React.TouchEvent<HTMLDivElement>) => {
    setEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };


  const handleMouseDown = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (startX !== 0) { 
      setEndX(e.clientX);
    }
  };

  
  const handleMouseUp = () => {
    handleSwipe();
    setStartX(0);
  };

  const handleSwipe = () => {
    if (startX - endX > 100) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.testimonials.length);
    } else if (endX - startX > 100) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const { text, author, position, image, heroImage } = data.testimonials[currentIndex];

  return (
    <div className="max-w-screen-xl mx-auto px-5 sm:px-6 py-8 md:py-[60px]">
      <div
        onMouseOver={() => setPauseOnHover(true)}
        onMouseLeave={() => setPauseOnHover(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="relative flex flex-col-reverse border lg:flex-row rounded-2xl overflow-hidden"
      >
        {/* Testimonial content */}
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
        <div className="h-1/2 w-full lg:h-[550px] lg:w-2/5">
          <img src={heroImage} alt="hero" className="h-full w-full object-cover lg:h-full" />
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {data.testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-black' : 'bg-gray-400'
            } dark:invert `}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials1;
