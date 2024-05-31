import React from "react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";

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

const CourseCard = (props) => {
  const user = useSelector((state) => state.user.role);
  const sid = useSelector((state) => state.user.id);
  const cid = props.data.cid;
  const navigate = useNavigate();
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

  const registerCourse = async () => {
    if (user === "student") {
      try {
        const response = await axios.post(
          "http://localhost:8000/addregistration",
          { sid, cid }
        );
        console.log(response.data.api_data);
        NotificationManager.success("Successfully Enrolled in the Course");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <div class="flex flex-col h-[450px] w-96 border-[3px] border-[#21851d31] rounded-3xlshadow shadow-slate-950/5 rounded-2xl overflow-hidden">
        <img
          class="object-cover h-48 w-full"
          src={require("../assets/courses/english.jpg")}
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
                  {props.data.cname}
                </a>
              </h2>
            </header>
            <h1 className="pt-2 font-serif text-lg justify-center items-center">
              By {props.data.fname} {props.data.lname}
            </h1>
            <div className="flex pt-2">
              <CalendarIcon className="h-6 w-6 text-[#7dce47]" />
              <h1 className=" pl-2 font-serif text-lg">
                {props.data.date} 2024 @ {props.data.time} EST
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
            className="text-2xl h-[750px] w-[1300px] rounded-3xl pt-6"
          >
            <h1 className="text-center text-4xl text-[#21811d] font-bold font-mono uppercase">
              {props.data.cname}
            </h1>

            <div className="flex text-center mt-8">
              <div className="basis-2/3 flex items-center justify-center">
                <iframe
                  width="750"
                  height="550"
                  src={props.data.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  referrerpolicy="strict-origin-when-cross-origin"
                  className="rounded-2xl"
                ></iframe>
              </div>

              <div className="basis-1/3 pr-8">
                <div className="text-start">
                  <h1 className="text-[#21811d] font-mono text-lg font-bold">
                    Course Description
                  </h1>
                  <p className="text-sm font-mono pt-3 text-justify text-gray-600">
                    {props.data.desc}
                  </p>
                </div>

                <div className="pt-3 flex justify-evenly">
                  <div className="flex flex-col items-center bg-[#7dce473d] p-5 rounded-full w-36 h-36">
                    <CalendarIcon className="h-12 w-12 text-[#7dce47]" />
                    <h1 className="pt-1 text-lg font-mono font-bold text-[#21811d]">
                      {props.data.date.split(" ")[0]} <br />{" "}
                      {props.data.date.split(" ")[1]}
                    </h1>
                  </div>
                  <div className="flex flex-col items-center bg-[#7dce473d] p-5 rounded-full w-36 h-36">
                    <ClockIcon className="h-12 w-12 text-[#7dce47]" />
                    <h1 className="pt-1 text-lg font-mono font-bold text-[#21811d]">
                      {props.data.time.split(" ")[0]} <br />{" "}
                      {props.data.time.split(" ")[1]}
                    </h1>
                  </div>
                </div>

                <div className="text-start text-[#21811d] font-mono text-lg font-bold pt-3">
                  <h1>Course Instructor</h1>
                </div>

                <div className="pt-2 flex items-center justify-evenly">
                  <img
                    src={require("../assets/teachers/shake.jpg")}
                    alt=""
                    className="h-32 w-32 rounded-xl"
                  />
                  <h1 className="text-[#21811d] font-mono text-lg font-bold">
                    {props.data.fname} <br /> {props.data.lname}
                  </h1>
                </div>
              </div>
            </div>

            <div className="text-center mt-7">
              <button
                className="mr-8 ml-2 text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
                onClick={registerCourse}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CourseCard;
