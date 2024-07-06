import React from "react";
import Modal from "react-modal";
import {
  CalendarIcon,
  ClockIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "24px",
  },
};

const CourseTile = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="mt-10">
        <div
          className="w-11/12 border-b-2 border-[#20811da4] border-dashed pb-10 group cursor-pointer"
          onClick={openModal}
        >
          <div className="flex justify-between items-center group-hover:underline underline-offset-4 text-[#21811d] cursor-pointer">
            <h1 className="text-3xl font-serif font-bold text-[#21811d] cursor-pointer">
              {props.data.cname}
            </h1>
            <h1 className="text-3xl font-serif font-bold text-black">
              {props.data.duration}
            </h1>
          </div>
          <div className="mt-6 ml-24 flex justify-between items-center">
            <div className=" grow">
              <ul className="marker:text-[#21811d] list-disc marker:text-4xl">
                <li className="text-xl font-sans font-medium">
                  Course Style: {props.data.mode}
                </li>
                <li className="text-xl font-sans font-medium">
                  Level: {props.data.class}
                </li>
                <li className="text-xl font-sans font-medium">
                  Language: {props.data.lang}
                </li>
                <li className="text-xl font-sans font-medium">
                  Class Times: {props.data.dates}
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between h-full">
              {props.data.open === 1 ? (
                <p className="mb-10 font-sans bg-[#8be988] p-1 font-semibold rounded-full px-3 text-base">
                  Registrations Open
                </p>
              ) : (
                <p className="mb-10 font-sans bg-[#f66565] p-1 font-semibold rounded-full px-3 text-base">
                  Registrations Closed
                </p>
              )}

              <h1 className="text-6xl font-sans text-[#21811d] font-bold">
                ${props.data.price}
              </h1>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            ref={(_subtitle) => (subtitle = _subtitle)}
            className="text-2xl md:h-[750px] md:w-[1300px] h-[650px] w-[350px] rounded-3xl overflow-y-auto ttt z-50"
          >
            <h1
              className="cursor-pointer text-right mr-4 text-4xl text-gray-700 font-semibold mb-3"
              onClick={closeModal}
            >
              x
            </h1>
            <h1 className="text-center md:text-4xl text-[#21811d] font-bold font-mono uppercase">
              {props.data.cname}
            </h1>
            <div className="overflow-y-auto ttt">
              <div className="flex md:flex-row flex-col text-center mt-8 pb-3">
                <div className="basis-2/3 flex flex-col items-center justify-center">
                  <iframe
                    src="https://www.youtube.com/embed/88kCqAB148U?si=oT-HdFpll7lDKW_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    referrerpolicy="strict-origin-when-cross-origin"
                    className="rounded-2xl md:w-[750px] md:h-[450px] h-56 w-[350px]"
                  ></iframe>
                  <div className="text-center mt-7 mb-7">
                    {props.data.open === 1 ? (
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScIqCLD78lfgnJ4n9KbkKtoL_f1tummqCSok_2zyOdvK6yz0w/viewform"
                        className="mr-8 ml-2 text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enroll Now
                      </a>
                    ) : (
                      <h1
                        href="https://docs.google.com/forms/d/e/1FAIpQLScIqCLD78lfgnJ4n9KbkKtoL_f1tummqCSok_2zyOdvK6yz0w/viewform"
                        className="mr-8 ml-2 text-xl  text-gray-500 py-3 px-6 border-2 border-gray-500 rounded-full cursor-not-allowed font-mono font-extrabold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Registrations Closed
                      </h1>
                    )}
                  </div>
                </div>

                <div className="basis-1/3 pr-8">
                  <div className="text-start">
                    <h1 className="text-[#21811d] font-mono text-xl font-bold">
                      Topics Covered -
                    </h1>
                    {/* <p className="text-base font-serif pt-3 text-justify text-gray-700">
                      This course offers a comprehensive introduction to Python,
                      covering basics, the main function, small functions,
                      simple visualization, and debugging. Students will explore
                      scientific packages like NumPy and Pandas, and learn to
                      design simple projects, equipping them with practical
                      programming skills for data manipulation and analysis.
                    </p> */}
                    <ol className="list-disc text-lg font-serif text-gray-700 pt-4 ml-5 marker:text2xl">
                      {props.data.topics.map((top, ind) => (
                        <li key={ind} className="pb-2">
                          {top}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="text-left text-[#21811d] pt-4 pb-3">
                    <span className="font-bold text-3xl text-[#21811d]">
                      ${props.data.price}
                    </span>
                    <span className="text-3xl font-bold">&nbsp;USD</span>{" "}
                    <span className="font-bold text-xl">/ session</span>
                  </div>

                  <hr className="" />

                  <div className="text-start text-[#21811d] font-mono text-lg font-bold pt-4">
                    <h1>
                      {" "}
                      <span className="font-bold text-2xl">Session 1: </span>
                      <span className="text-lg font-bold underline underline-offset-4">
                        {props.data.dates}
                      </span>{" "}
                    </h1>

                    <div className="flex pt-2">
                      <CalendarDaysIcon className="h-6 w-6 text-[#7dce47]" />
                      <h1 className="text-gray-600 text-base">
                        {" "}
                        &nbsp;- {props.data.duration}
                      </h1>
                    </div>

                    <div className="flex pt-2">
                      <CalendarIcon className="h-6 w-6 text-[#7dce47]" />
                      <h1 className="text-gray-600 text-base">
                        {" "}
                        &nbsp;- Monday to Friday
                      </h1>
                    </div>
                    <div className="flex pt-2">
                      <ClockIcon className="h-6 w-6 text-[#7dce47]" />
                      <h1 className="text-gray-600 text-base">
                        {" "}
                        &nbsp;- 1:30 PM to 4:50 PM EST
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="text-center pt-5">
                <h1 className="font-bold text-2xl text-[#21811d]">
                  Course Details -
                </h1>
                <div className="md:w-2/4 w-3/4 mx-auto text-lg font-semibold text-start text-gray-600 font-serif pt-4 pb-8">
                  <ol className="list-decimal">
                    <li>
                      Early bird will get $50 off, if register by 4/1/2024.
                    </li>
                    <li className="text-[#21811d]">
                      Sibling or multiple registration group discount:{" "}
                    </li>
                    <ul className="list-disc text-[#21811d]">
                      <li>2 students: $50 off.</li>
                      <li> 3+ students: $100 off</li>
                    </ul>
                    <li>
                      {" "}
                      This camp is designed for students with different
                      background, everybody is welcome!{" "}
                    </li>
                    <li>
                      Location: our camp location is close to Longfellow Middle
                      school, 0.3 miles away. Falls Church, VA 22043.{" "}
                    </li>
                    <li> Each session is limited to 10 students!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CourseTile;
