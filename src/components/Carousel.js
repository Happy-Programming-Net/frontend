import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <TECarousel
        showIndicators
        ride='carousel'
        className='hidden md:block md:w-11/12 mx-auto rounded-none md:rounded-2xl md:pt-12'
        theme={{
          indicator:
            "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        }}
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className='hidden relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          >
            <div className=' md:h-[450px] h-80 md:flex w-11/12 mx-auto'>
              <div className='basis-1/2 w-11/12 md:w-9/12 mx-auto items-start justify-center font-semibold flex flex-col'>
                <h1 className='pt-5 text-center md:text-left md:pt-0 md:text-4xl sm:text-3xl pb-7 leading-relaxed text-[#21811d] font-serif'>
                  Coding Unlock Endless Possibilities! <br /> Explore Our
                  Diverse Course Offerings{" "}
                </h1>
                <h1 className='md:hidden pt-5 text-center md:text-left md:pt-0 text-base pb-2 leading-relaxed text-[#21811d] font-serif'>
                  Coding Unlock Endless Possibilities! Explore Our Diverse
                  Course Offerings{" "}
                </h1>
                <h1 className='hidden md:block text-xl pl-1 pb-7 tracking-wide font-serif text-[#2e372e]'>
                  Elevate Your Learning Experience with Us
                </h1>
                <h1 className='md:hidden text-sm pl-1 pb-5 tracking-wide font-serif text-[#2e372e]'>
                  Elevate Your Learning Experience with Us
                </h1>
                <div className='hidden md:block'>
                  <NavLink to='/courses'>
                    <button className='mr-8 ml-2 text-lg hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold'>
                      Enroll Now
                    </button>
                  </NavLink>
                  <NavLink to='/courses'>
                    <button className='bg-[#94d768] text-lg hover:bg-[#94d76800] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold'>
                      Start Learning Today
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className='basis-1/2'>
                <dotlottie-player
                  src='https://lottie.host/7b664009-102e-4453-ab59-017dc0496fd8/8XMVNVDpVw.json'
                  background='transparent'
                  speed='1'
                  style={{
                    width: "700px",
                    height: "500px",
                  }}
                  direction='1'
                  playMode='normal'
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className='relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          >
            <div className='flex h-[450px]'>
              <div className='basis-1/2'>
                <img
                  src={require("../assets/carousel/aipy4.png")}
                  className=' h-[450px] md:rounded-l-3xl'
                  alt='...'
                />
              </div>
              <div className='basis-1/2  bg-[#a8ffa2] rounded-r-3xl'>
                <div className='w-11/12 h-full mx-auto flex flex-col justify-center items-center'>
                  <h1 className='pt-5 text-center md:text-left md:pt-0 md:text-6xl sm:text-3xl pb-5 leading-relaxed text-[#21811d] font-serif font-bold'>
                    AI Research
                  </h1>

                  <ul className='list-disc w-9/12 '>
                    <li>
                      <h1 className='text-lg pl-1 pb-2 tracking-wide font-serif text-[#2e372e] font-bold'>
                        This program introduces high school students to the
                        fundamentals of artificial intelligence through hands-on
                        projects and guided research.
                      </h1>
                    </li>
                    <li>
                      <h1 className='text-lg pl-1 pb-2 tracking-wide font-serif text-[#2e372e] font-bold'>
                        Students will learn key concepts like machine learning
                        and neural networks, use tools such as Python and
                        PyTorch, and apply AI to real-world problems.
                      </h1>
                    </li>

                    <li>
                      <h1 className='text-lg pl-1 pb-5 tracking-wide font-serif text-[#2e372e] font-bold'>
                        Work on a research project under the guidance of
                        experienced mentors, aiming to solve meaningful problems
                        in areas like healthcare, education, environment, or
                        social good.
                      </h1>
                    </li>
                  </ul>

                  <NavLink to='/courses'>
                    <button className='mr-8 ml-2 text-lg hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-serif font-extrabold'>
                      Enroll Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </TECarouselItem>

          <TECarouselItem
            itemID={3}
            className='relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          >
            <div className='flex flex-row-reverse h-[450px]'>
              <div className='basis-1/2'>
                <img
                  src={require("../assets/carousel/aipy2.png")}
                  className=' h-[450px] md:rounded-r-3xl'
                  alt='...'
                />
              </div>
              <div className='basis-1/2  bg-[rgb(153,205,247)] rounded-l-3xl'>
                <div className='w-11/12 h-full mx-auto flex flex-col justify-center items-center'>
                  <h1 className='pt-5 text-center md:text-left md:pt-0 md:text-[42px] sm:text-3xl pb-5 leading-relaxed text-blue-700 font-serif font-bold'>
                    Python + AI Programming
                  </h1>

                  <ul className='list-disc w-9/12 '>
                    <li>
                      <h1 className='text-lg pl-1 pb-2 tracking-wide font-serif text-[#2e372e] font-bold'>
                        Undergrad level programming learning
                      </h1>
                    </li>
                    <li>
                      <h1 className='text-lg pl-1 pb-2 tracking-wide font-serif text-[#2e372e] font-bold'>
                        Experience with the latest Al advancement and research
                        by PHDs
                      </h1>
                    </li>

                    <li>
                      <h1 className='text-lg pl-1 pb-5 tracking-wide font-serif text-[#2e372e] font-bold'>
                        Participate in graduate level data science projects{" "}
                      </h1>
                    </li>
                  </ul>

                  <NavLink to='/courses'>
                    <button className='mr-8 ml-2 text-lg hover:bg-blue-400  text-blue-700 py-3 px-6 border-2 border-blue-700  rounded-full font-serif font-extrabold'>
                      Enroll Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>

      <TECarousel
        showIndicators
        ride='carousel'
        className='md:hidden md:w-11/12 mx-auto rounded-none md:rounded-2xl md:pt-12'
      >
        <div className="md:hidden relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className='relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          >
            <img
              src={require("../assets/carousel/aipy4.png")}
              className='md:w-[1500px] lg:w-full md:h-[500px] h-80 md:rounded-3xl'
              alt='...'
            />
            <div className='hidden md:block absolute inset-x-[15%] md:bottom-16 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl'>
              <h5 className='text-6xl font-bold font-serif text-black'>
                AI Research
              </h5>
              <p className='text-2xl text-black font-serif pt-3'>
                Fun and interactive lessons blend math concepts with coding
                challenges
              </p>
            </div>
            <div className='md:hidden absolute inset-x-[15%] bottom-5 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl'>
              <h5 className='text-xl font-bold font-serif text-black'>
                AI Research
              </h5>
              <p className='text-base text-black font-serif pt-3'>
                Fun and interactive lessons blend math concepts with coding
                challenges
              </p>
            </div>
          </TECarouselItem>

          <TECarouselItem
            itemID={2}
            className='relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          >
            <img
              src={require("../assets/carousel/aipy2.png")}
              className='md:w-[1500px] lg:w-full md:h-[500px] h-80 md:rounded-3xl'
              alt='...'
            />
            <div className='absolute inset-x-[15%] bottom-16 hidden py-5 text-center text-white md:block bg-slate-100 rounded-2xl'>
              <h5 className='text-6xl font-bold font-serif text-black'>
                Python + AI Programming
              </h5>
              <p className='text-2xl text-black font-serif pt-3'>
                Experience with the latest Al advancement and research by PHDs
              </p>
            </div>

            <div className='hidden md:block absolute inset-x-[15%] md:bottom-16 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl'>
              <h5 className='text-6xl font-bold font-serif text-black'>
                Python + AI Programming
              </h5>
              <p className='text-2xl text-black font-serif pt-3'>
                Experience with the latest Al advancement and research by PHDs
              </p>
            </div>
            <div className='md:hidden absolute inset-x-[15%] bottom-5 py-5 text-center text-white bg-[rgba(241,245,249,1)] rounded-2xl'>
              <h5 className='text-xl font-bold font-serif text-black'>
                Python + AI Programming
              </h5>
              <p className='text-base text-black font-serif pt-3'>
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
