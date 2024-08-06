import React, { useState } from "react";
import Modal from "react-modal";
import {
  CalendarIcon,
  ClockIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux"
import { addCourse } from "../redux/courses/courseSlice";

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

const CourseTile2 = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reg, setReg] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const regCourse = () =>{
    if(!reg){
      dispatch(addCourse(props.data))
      console.log(props.data)
    }
    
    setReg(true)
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
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CourseTile2;
