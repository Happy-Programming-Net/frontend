import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" className="w-11/12 mx-auto rounded-2xl pt-12">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={require('../assets/carousel/c1.png')}
              className="block w-full h-[600px] rounded-3xl"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-16 hidden py-5 text-center text-white md:block bg-slate-100 rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">First slide label</h5>
              <p className="text-2xl text-black font-serif pt-3">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={require('../assets/carousel/c2.png')}
              className="block w-full h-[600px] rounded-3xl"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-16 hidden py-5 text-center text-white md:block bg-slate-100 rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">Second slide label</h5>
              <p className="text-2xl text-black font-serif pt-3">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={require('../assets/carousel/c3.png')}
              className="block w-full h-[600px] rounded-3xl"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-16 hidden py-5 text-center text-white md:block bg-slate-100 rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">Third slide label</h5>
              <p className="text-2xl text-black font-serif pt-3">
                Some representative placeholder content for the Third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default Carousel;
