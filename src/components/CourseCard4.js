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
      <div class="flex flex-col h-[490px] w-96 border-[3px] border-[#21851d31] rounded-3xlshadow shadow-slate-950/5 rounded-2xl overflow-hidden">
        <img
          class="object-cover h-48 w-full"
          src={require("../assets/courses/py3.png")}
          width="304"
          height="192"
          alt="Course 01"
        />
        <div class="flex-1 flex flex-col p-6">
          <div class="flex-1">
            <header class="mb-2">
              <h2 class="text-xl font-extrabold leading-snug">
                <a
                  class="text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                  href="#0"
                >
                  2024 Summer <span className="text-[#37ae33]">Code Math{" "}</span> 
                  <span className="underline underline-offset-2">
                    Online Class
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
          <div class="flex justify-center space-x-2">
            <button
              class="text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
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
        >
          <div
            ref={(_subtitle) => (subtitle = _subtitle)}
            className="text-2xl h-[750px] w-[1300px] rounded-3xl pt-6 overflow-y-auto ttt"
          >
            <h1 className="text-center text-4xl text-[#21811d] font-bold font-mono uppercase">
              2024 Summer Code Math Online Class (4-6th grade)
            </h1>
            <div className="overflow-y-auto ttt">
              <div className="flex text-center mt-8 pb-8">
                <div className="basis-2/3 flex flex-col items-center justify-center">
                  <iframe
                    width="750"
                    height="450"
                    src="https://www.youtube.com/embed/88kCqAB148U?si=oT-HdFpll7lDKW_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    referrerpolicy="strict-origin-when-cross-origin"
                    className="rounded-2xl"
                  ></iframe>
                  <div className="text-center mt-7">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScIqCLD78lfgnJ4n9KbkKtoL_f1tummqCSok_2zyOdvK6yz0w/viewform"
                      className="mr-8 ml-2 text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>

                <div className="basis-1/3 pr-8">
                  <div className="text-start">
                    <h1 className="text-[#21811d] font-mono text-xl font-bold">
                      Course Description
                    </h1>
                    <p className="text-base font-serif pt-3 text-justify text-gray-700">
                      You'll learn the main programming concepts and all Python
                      basics needed to get a good taste of this programming
                      language. This course will guide you on your path of
                      mastering Python, one of the much-in-demand languages in
                      today's environment. You will be able to develop your own
                      python projects.
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
                <div className="w-2/4 mx-auto text-lg font-semibold text-start text-gray-400 font-serif pt-4 pb-8">
                  <ol className="list-decimal">
                    <li>
                      Early bird will get $50 off, if register by 4/1/2024.
                    </li>
                    <li>Sibling or multiple registration group discount: </li>
                    <ul className="list-disc">
                      <li>2 students: $50 off.</li>
                      <li> 3+ students: $100 off</li>
                    </ul>
                    <li> We will use Zoom for online class.</li>
                    <li>
                      Beginner 2 class is the continuation of class beginner 1.
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
