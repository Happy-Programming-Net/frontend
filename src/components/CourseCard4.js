import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import Modal from "react-modal";

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

const CourseCard4 = (props) => {
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
      <div className="flex flex-col h-[520px] w-96 border-[3px] border-[#21851d31] rounded-3xlshadow shadow-slate-950/5 rounded-2xl overflow-hidden">
        <img
          className="object-cover h-48 w-full"
          src={require("../assets/courses/py3.png")}
          width="304"
          height="192"
          alt="Course 01"
        />
        <div className="flex-1 flex flex-col p-6">
          <div className="flex-1">
            <header className="mb-2">
              <h2 className="text-xl font-extrabold leading-snug">
                <a
                  className="text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                  href="#0"
                >
                  2024 Summer <span className="text-[#37ae33]">Code Math{" "}</span> 
                  <span className="underline underline-offset-2">
                    Online className
                  </span>{" "}
                  (4-6th grade)
                </a>
              </h2>
            </header>
            <div className="flex pt-2">
              <h1 className=" pl-2 font-serif text-lg">
                You'll learn the main programming concepts and all Python basics
                needed to get a good taste of this programming language.{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-center space-x-2 py-2">
            <button
              className="text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
              onClick={openModal}
            >
              Know More
            </button>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
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
              2024 Summer <span className="underline underline-offset-4">Code Math</span> Online className (4-6th grade)
            </h1>
            <div className="overflow-y-auto ttt">
              <div className="flex md:flex-row flex-col text-center mt-8 pb-3">
                <div className="basis-2/3 flex flex-col items-center justify-center">
                  <iframe
                    src="https://www.youtube.com/embed/88kCqAB148U?si=oT-HdFpll7lDKW_"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-2xl md:w-[750px] md:h-[450px] h-56 w-[350px]"
                  ></iframe>
                  <div className="text-center mt-7 mb-10 md:mb-0">
                  <h1
                      href="https://docs.google.com/forms/d/e/1FAIpQLScIqCLD78lfgnJ4n9KbkKtoL_f1tummqCSok_2zyOdvK6yz0w/viewform"
                      className="mr-8 ml-2 text-xl  text-gray-500 py-3 px-6 border-2 border-gray-500 rounded-full cursor-not-allowed font-mono font-extrabold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Registrations Closed
                    </h1>
                  </div>
                </div>

                <div className="basis-1/3 pr-8">
                  <div className="text-start">
                    <h1 className="text-[#21811d] font-mono text-xl font-bold">
                      Course Description
                    </h1>
                    <p className="text-base font-serif pt-3 text-justify text-gray-700">
                    The course focuses on introducing students to computer science fundamentals and coding skills, emphasizing problem-solving using Python. It strengthens their math foundation by applying concepts such as probability, patterns, and arithmetic (mean, median, mode) to programming. Additionally, students learn to visualize data with circle graphs, solve linear equations, and integrate math problems into game development, enhancing their practical coding abilities.
                    </p>
                  </div>

                  <div className="text-left text-[#21811d] pt-4 pb-3">
                    <span className="font-bold text-3xl text-[#21811d]">
                      $349
                    </span>
                    <span className="text-3xl font-bold">&nbsp;USD</span>{" "}
                    <span className="font-bold text-xl">/session</span>
                  </div>

                  <hr className="" />

                  <div className="text-start text-[#21811d] font-mono text-lg font-bold pt-4">
                    <h1>
                      {" "}
                      <span className="font-bold text-2xl">Session 1: </span>
                      <span className="text-lg font-bold underline underline-offset-4">
                        7/22 - 8/2/24
                      </span>{" "}
                    </h1>

                    <div className="flex pt-2">
                      <CalendarDaysIcon className="h-6 w-6 text-[#7dce47]" />
                      <h1 className="text-gray-600 text-base"> &nbsp;- 10 Classes</h1>
                    </div>

                    <div className="flex pt-2">
                      <CalendarIcon className="h-6 w-6 text-[#7dce47]" />
                      <h1 className="text-gray-600 text-base"> &nbsp;- Monday to Friday</h1>
                    </div>
                    <div className="flex pt-2">
                      <ClockIcon className="h-6 w-6 text-[#7dce47]" />
                      <h1 className="text-gray-600 text-base"> &nbsp;- 7:00 PM to 8:00 PM EST</h1>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="text-center pt-2">
                <h1 className="font-bold text-2xl text-[#21811d]">
                  Course Details
                </h1>
                <div className="md:w-2/4 w-3/4 mx-auto text-lg font-semibold text-start text-gray-600 font-serif pt-4 pb-8">
                  <ol className="list-decimal">
                    <li>
                      Early bird will get $50 off, if register by 4/1/2024.
                    </li>
                    <li className="text-[#21811d]">Sibling or multiple registration group discount: </li>
                    <ul className="list-disc text-[#21811d]">
                      <li>2 students: $25 off.</li>
                      <li> 3+ students: $50 off</li>
                    </ul>
                    <li> We will use Zoom for online className.</li>
                    <li>
                      Beginner 2 className is the continuation of className beginner 1.
                      We suggest students register both two sessions, in order
                      to have a full understanding of Python.
                    </li>
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

export default CourseCard4;
