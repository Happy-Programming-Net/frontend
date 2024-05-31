import React from "react";
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBookOpen,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import {
  CommandLineIcon,
  UserIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="ttt overflow min-h-screen max-h-screen overflow-y-auto pb-20">
        <Carousel />
        <div className="mx-10 flex mt-0">
          <div className="basis-1/2 w-9/12 mx-auto items-start justify-center font-semibold flex flex-col px-12">
            <h1 className="text-5xl pb-12 leading-relaxed text-[#21811d] font-serif">
            Coding Unlock Endless Possibilities! Explore Our Diverse Course
              Offerings{" "}
            </h1>
            <h1 className="text-2xl pl-1 pb-10 tracking-wide font-serif text-[#2e372e]">
              Elevate Your Learning Experience with Us
            </h1>

            <div className="">
              <button class="mr-8 ml-2 text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold">
                Enroll Now
              </button>

              <button class="bg-[#94d768] text-xl hover:bg-[#94d76800] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold">
                Start Learning Today
              </button>
            </div>
          </div>

          <div className="basis-1/2">
            <dotlottie-player
              src="https://lottie.host/7b664009-102e-4453-ab59-017dc0496fd8/8XMVNVDpVw.json"
              background="transparent"
              speed="1"
              style={{ width: "800px", height: "700px", paddingTop: "80px" }}
              direction="1"
              playMode="normal"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center ">
            <span className="text-[#94d7685b] ">
              <FontAwesomeIcon
                icon={faCode}
                className="md:text-[220px] text-[170px]"
              />
            </span>
            <p className="text-[#21811d] md:text-7xl text-5xl font-extrabold font-serif relative top-[-100px] md:top-[-140px]">
              Why Us?
            </p>
          </div>

          <div className="w-10/12 mx-auto pb-12">
            <h1 className="text-xl leading-relaxed text-justify font-semibold font-sans text-[#21811d] border-2 p-4 border-[#21811d] rounded-2xl">
              Our team has two computer science PhDs and one master, including 8
              years experience teaching college students, and 10+ years
              experience working for high-tech companies. We are always trying
              to make the learning experience fun and engaged so that the
              students could learn useful skills.
            </h1>
          </div>

          <div className="flex justify-evenly">
            <div className="h-96 w-96 bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl">
              <figure class="rounded-2xl h-96 w-96 bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <UserIcon className="h-24 w-24 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="p-2 text-2xl font-bold font-serif">
                  Small Classroom Setting
                </h1>
                <blockquote class="text-gray-900 p-2">
                  <p className="text-lg font-serif font-medium">
                    In a small class, students benefit from personalized
                    attention and interactive learning experiences, allowing for
                    in-depth discussions and a supportive educational
                    environment.
                  </p>
                </blockquote>
              </figure>
            </div>
            <div className="h-96 w-96 bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl">
              <figure class="rounded-2xl h-96 w-96 bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <CommandLineIcon className="h-24 w-24 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="p-2 text-2xl font-bold font-serif">
                  Beginner-Friendly Classroom Environment
                </h1>
                <blockquote class="text-gray-900 p-2">
                  <p className="text-lg font-serif font-medium ">
                    Experienced educators and software developers create an
                    interactive, beginner-friendly environment that fosters
                    hands-on learning and practical skill development.
                  </p>
                </blockquote>
              </figure>
            </div>

            <div className="h-96 w-96 bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl">
              <figure class="rounded-2xl h-96 w-96 bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                <AcademicCapIcon className="h-24 w-24 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="p-2 text-2xl font-bold font-serif">
                  Bridging Academia with Industry
                </h1>
                <blockquote class="text-gray-900 p-2">
                  <p className="text-lg font-serif font-medium">
                    Professors with high academic standards collaborate with
                    industry experts, offering a certificate upon course
                    completion.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>

        <div className="pt-24">
          <div className="flex flex-col items-center ">
            <span className="text-[#94d7685b] ">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="md:text-[220px] text-[170px]"
              />
            </span>
            <p className="text-[#21811d] md:text-7xl text-5xl font-extrabold font-serif relative top-[-100px] md:top-[-140px]">
              Explore Our Courses
            </p>
          </div>

          <div className="flex justify-evenly">
            <NavLink to="/courses">
              <div class="rounded-3xl relative group ">
                <img
                  src={require(`../assets/explore/web.png`)}
                  alt=""
                  className="rounded-3xl h-[450px] w-[350px]"
                />
                <div class="shadow-2xl m-4 h-96 rounded-2xl  group-hover:opacity-0 flex flex-col text-xl text-black font-semibold px-4 absolute inset-x-0 bottom-0">
                  <div className="pt-6">
                    <h1 className="py-2 text-4xl font-bold font-serif text-black bg-white rounded-xl p-3 text-center">
                      Web Development
                    </h1>
                  </div>
                </div>
                <div class="shadow-2xl m-4 h-96 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex flex-col text-xl bg-[#ffffffc4] text-black font-semibold px-4">
                  <div className="pt-6">
                    <h1 className="py-2 text-4xl font-bold font-serif">
                      Web Development
                    </h1>
                    <h1 className="pt-4 text-left p-4">
                      Become a Full-Stack Web Developer with just ONE course.
                      HTML, CSS, Javascript, Node, React, PostgreSQL and DApps.
                    </h1>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/courses">
              <div class="rounded-3xl relative group ">
                <img
                  src={require(`../assets/explore/data.png`)}
                  alt=""
                  className="rounded-3xl h-[450px] w-[350px]"
                />
                <div class="shadow-2xl m-4 h-96 rounded-2xl  group-hover:opacity-0 flex flex-col text-xl text-black font-semibold px-4 absolute inset-x-0 bottom-0">
                  <div className="pt-6">
                    <h1 className="py-2 text-4xl font-bold font-serif text-black bg-white rounded-xl p-3 text-center">
                      Data Science
                    </h1>
                  </div>
                </div>
                <div class="shadow-2xl m-4 h-96 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex flex-col text-xl bg-[#ffffffc4] text-black font-semibold px-4">
                  <div className="pt-6">
                    <h1 className="py-2 text-4xl font-bold font-serif">
                      Data Science
                    </h1>
                    <h1 className="pt-4 text-left p-4">
                      Complete Data Science Training: Math, Statistics, Python,
                      Advanced Statistics in Python, Machine and Deep Learning.
                    </h1>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/courses">
              <div class="rounded-3xl relative group ">
                <img
                  src={require(`../assets/explore/python.png`)}
                  alt=""
                  className="rounded-3xl h-[450px] w-[350px]"
                />
                <div class="shadow-2xl m-4 h-96 rounded-2xl  group-hover:opacity-0 flex flex-col text-xl text-black font-semibold px-4 absolute inset-x-0 bottom-0">
                  <div className="pt-6">
                    <h1 className="py-2 text-4xl font-bold font-serif text-black bg-white rounded-xl p-3 text-center">
                      Python
                    </h1>
                  </div>
                </div>
                <div class="shadow-2xl m-4 h-96 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex flex-col text-xl bg-[#ffffffc4] text-black font-semibold px-4">
                  <div className="pt-6">
                    <h1 className="py-2 text-4xl font-bold font-serif">
                      Python
                    </h1>
                    <h1 className="pt-4 text-left p-4">
                      Learn Python like a Professional Start from the basics and
                      go all the way to creating your own applications and
                      games.
                    </h1>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="pt-24">
          <div className="flex flex-col items-center ">
            <span className="text-[#94d7685b] ">
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="md:text-[220px] text-[170px]"
              />
            </span>
            <p className="text-[#21811d] md:text-7xl text-5xl font-extrabold font-serif relative top-[-100px] md:top-[-140px]">
              Student Projects
            </p>
          </div>

          <iframe
            width="750"
            height="450"
            src="https://www.youtube.com/embed/nI9qusVo4lA?si=SIfyPLS4b63QSG7x"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerpolicy="strict-origin-when-cross-origin"
            className="rounded-2xl mx-auto"
          ></iframe>

          <h1 className="text-center pt-6 text-2xl font-bold font-serif text-[#21811d]">
          Previous Students Report
          </h1>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
