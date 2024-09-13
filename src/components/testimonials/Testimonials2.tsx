import { useRef, useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import data from './testimonials2.json';

const Testimonials2 = () => {
  const testimonials = [...data.content, ...data.content];
  const carousel = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false); // Control animation pause state

  // Function to handle infinite scroll effect
  const checkInfiniteScroll = () => {
    if (!carousel.current) return;

    const maxScroll = carousel.current.scrollWidth / 2; // Half of total scroll width
    const currentScroll = carousel.current.scrollLeft;

    if (currentScroll >= maxScroll) {
      // Reset scroll to the beginning (since we duplicated the content)
      carousel.current.scrollLeft = currentScroll - maxScroll;
    } else if (currentScroll <= 0) {
      // Reset scroll to the end
      carousel.current.scrollLeft = maxScroll + currentScroll;
    }
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carousel.current) return;
    const xPosition = event.clientX;
    const walk = (xPosition - startX) * 2; // Adjust scroll speed
    carousel.current.scrollLeft = scrollLeft - walk;
    checkInfiniteScroll(); // Check and apply infinite scroll while dragging
  };

  // Start drag
  const dragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsPaused(true); // Pause the animation
    setStartX(event.clientX);
    if (carousel.current) {
      setScrollLeft(carousel.current.scrollLeft);
    }
    document.body.classList.add('no-select');
  };

  // End drag
  const dragEnd = () => {
    setIsDragging(false);
    setIsPaused(false); // Resume the animation
    document.body.classList.remove('no-select');
  };

  // Handle touch start for mobile devices
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsPaused(true); // Pause the animation
    setStartX(event.touches[0].clientX);
    if (carousel.current) {
      setScrollLeft(carousel.current.scrollLeft);
    }
    document.body.classList.add('no-select');
  };

  // Handle touch move for mobile drag functionality
  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !carousel.current) return;
    const xPosition = event.touches[0].clientX;
    const walk = (xPosition - startX) * 2; // Adjust scroll speed
    carousel.current.scrollLeft = scrollLeft - walk;
    checkInfiniteScroll(); // Check and apply infinite scroll while dragging
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false); // Resume the animation
    document.body.classList.remove('no-select');
  };

  // Infinite scroll animation using CSS
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carousel.current || isDragging || isPaused) return;

      carousel.current.scrollLeft += 1; // Adjust the scroll speed
      checkInfiniteScroll(); // Check and apply infinite scroll
    }, 16); // 60 frames per second (approximate for smooth scroll)

    return () => clearInterval(interval);
  }, [isDragging, isPaused]);

  return (
    <div className='max-w-screen bg-background'>
      <div className="max-w-screen-xl mx-auto py-8 md:py-[60px] px-6">
        <div className="flex flex-col items-center justify-between gap-5 sm:gap-6 sm:mb-12 mb-10">
          <Badge className='w-[101px] h-[28px] rounded-full flex items-center justify-center text-sm font-medium px-1 py-3' variant="outline">Community</Badge>
          <h1 className="font-semibold text-[30px] md:text-3xl lg:text-5xl text-center">Loved by Builders and Creatives</h1>
          <p className="text-center text-base max-w-[390px] sm:max-w-[640px]">Thousands of developers and builders around the globe are using Radian to ship their next big idea and they love it</p>
        </div>
        <section 
          ref={carousel}
          onMouseMove={handleMouseMove}
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] cursor-grab active:cursor-grabbing">
          <ul className="flex items-center justify-center md:justify-start mx-2.5 gap-5 scrolling-list">
            {
              testimonials.map((item, index) => (
                <li className="lg:min-w-[397.33px] sm:min-w-[400px] min-w-[390px] min-h-[268px] border-[1px] rounded-[16px] pb-6 px-6 pt-8" key={index}>
                  <p className="mb-6 text-base">{item.content}</p>
                  <div className="flex items-center justify-start">
                    <div className="w-10 h-10 mr-4">
                      <img className="h-full rounded-full w-full object-cover" src={item.image} alt="image" />
                    </div>
                    <div className="text-sm">
                      <h3 className="font-semibold">{item.name}</h3>
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
  );
};

export default Testimonials2;
