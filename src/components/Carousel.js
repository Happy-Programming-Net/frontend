import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" className="md:w-11/12 mx-auto rounded-none md:rounded-2xl md:pt-12">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={require('../assets/carousel/aipy.png')}
              className="block md:w-[1500px] md:h-[500px] h-80 md:rounded-3xl"
              alt="..."
            />
            {/* <div className="absolute inset-x-[15%] bottom-16 hidden py-5 text-center text-white md:block bg-slate-100 rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">First slide label</h5>
              <p className="text-2xl text-black font-serif pt-3">
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={require('../assets/carousel/aipy4.png')}
              className="md:w-[1500px] md:h-[500px] h-80 md:rounded-3xl"
              alt="..."
            />
            <div className="hidden md:block absolute inset-x-[15%] md:bottom-16 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">Code Math</h5>
              <p className="text-2xl text-black font-serif pt-3">
              Fun and interactive lessons blend math concepts with coding challenges
              </p>
            </div>
            <div className="md:hidden absolute inset-x-[15%] bottom-5 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl">
              <h5 className="text-xl font-bold font-serif text-black">Code Math</h5>
              <p className="text-base text-black font-serif pt-3">
              Fun and interactive lessons blend math concepts with coding challenges
              </p>
            </div>
          </TECarouselItem>

          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={require('../assets/carousel/aipy2.png')}
              className="md:w-[1500px] md:h-[500px] h-80 md:rounded-3xl"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-16 hidden py-5 text-center text-white md:block bg-slate-100 rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">Python + AI Programming</h5>
              <p className="text-2xl text-black font-serif pt-3">
              Experience with the latest Al advancement and research by PHDs
              </p>
            </div>

            <div className="hidden md:block absolute inset-x-[15%] md:bottom-16 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl">
              <h5 className="text-6xl font-bold font-serif text-black">Python + AI Programming</h5>
              <p className="text-2xl text-black font-serif pt-3">
              Experience with the latest Al advancement and research by PHDs
              </p>
            </div>
            <div className="md:hidden absolute inset-x-[15%] bottom-5 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl">
              <h5 className="text-xl font-bold font-serif text-black">Python + AI Programming</h5>
              <p className="text-base text-black font-serif pt-3">
              Experience with the latest Al advancement and research by PHDs
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default Carousel;