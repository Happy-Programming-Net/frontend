import React, { useState } from "react";
// import CourseCard from "../components/CourseCard";
import CourseCard2 from "../components/CourseCard2";
import CourseCard3 from "../components/CourseCard3";
import CourseCard4 from "../components/CourseCard4";
import Footer from "../components/Footer";
import CourseTile from "../components/CourseTile";

import {
  PythonCourses,
  BronzeCourses,
  SilverCourses,
  GoldCourses,
  AIFutureCourses,
  FastLaneCourses,
  FallCourses,
} from "../utils/CourseData";

const Levels = [
  "Show All",
  "Summer Camps",
  "Python Courses",
  "USACO—USACO Bronze Knowledge",
  "USACO—USACO Silver Knowledge",
  "USACO—USACO Gold Knowledge",
  "Ai4Future Courses",
  "Intern Fastlane Courses",
];

const cMaps = {
  "Python Courses": PythonCourses,
  "USACO—USACO Bronze Knowledge": BronzeCourses,
  "USACO—USACO Silver Knowledge": SilverCourses,
  "USACO—USACO Gold Knowledge": GoldCourses,
  "Ai4Future Courses": AIFutureCourses,
  "Intern Fastlane Courses": FastLaneCourses,
};

const ccc = [
  PythonCourses,
  BronzeCourses,
  SilverCourses,
  GoldCourses,
  AIFutureCourses,
  FastLaneCourses,
];

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [level, setLevel] = useState("Show All");
  const [courses, setActiveCourses] = useState(ccc);
  const [summercamp, setSummerCamp] = useState(true);
  const [title, setTitle] = useState(2);
  const [activeSection, setActiveSection] = useState("All Courses");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const changeLevel = (lev) => {
    setLevel(Levels[lev]);
    if (lev === 0) {
      setActiveCourses(ccc);
      setSummerCamp(true);
    } else if (lev === 1) {
      setSummerCamp(true);
      setActiveCourses([]);
    } else {
      setSummerCamp(false);
      var tt = cMaps[Levels[lev]];
      console.log(tt);
      setActiveCourses([tt]);
      setTitle(lev);
    }
    closeDropdown();
    console.log(level);
  };

  return (
    <>
      <div className="pt-7 flex-col flex overflow min-h-screen max-h-screen overflow-y-scroll ttt pb-20">
        {/* <div className="overflow-y-scroll pb-56 ttt"> */}
        <div className="lg:pl-4 mx-10">
          <h1 className="text-5xl font-bold leading-relaxed text-[#21811d] font-serif">
            Start Learning
          </h1>
          <h1 className="text-2xl pb-3 leading-relaxed text-[#21811d] font-serif">
            Explore courses from the world's top Instructors.
          </h1>
        </div>

        <div className="w-11/12 mx-auto items-center justify-center pt-5 lg:pl-4 flex lg:mx-10 flex-wrap">
          <button
            className={`px-4 py-2 rounded mr-4 mb-3 text-lg ${
              activeSection === "All Courses"
                ? "bg-[#94d768] text-[#21811d] border-[#1f901c] border-2 font-serif font-bold"
                : "bg-gray-500 text-white hover:bg-gray-600 font-serif font-bold border-2"
            }`}
            onClick={() => setActiveSection("All Courses")}
          >
            All Courses
          </button>
          <button
            className={`px-4 py-2 rounded mr-4 mb-3 text-lg ${
              activeSection === "Summer Camps"
                ? "bg-[#94d768] text-[#21811d] border-[#1f901c] border-2 font-serif font-bold"
                : "bg-gray-500 text-white hover:bg-gray-600 font-serif font-bold border-2"
            }`}
            onClick={() => setActiveSection("Summer Camps")}
          >
            Summer Courses
          </button>
          <button
            className={`px-4 py-2 rounded mr-4 mb-3 text-lg ${
              activeSection === "Fall Courses"
                ? "bg-[#94d768] text-[#21811d] border-[#1f901c] border-2 font-serif font-bold"
                : "bg-gray-500 text-white hover:bg-gray-600 font-serif font-bold border-2"
            }`}
            onClick={() => setActiveSection("Fall Courses")}
          >
            Fall Courses
          </button>
          <button
            className={`px-4 py-2 rounded mr-4 mb-3 text-lg ${
              activeSection === "AI Courses"
                ? "bg-[#94d768] text-[#21811d] border-[#1f901c] border-2 font-serif font-bold"
                : "bg-gray-500 text-white hover:bg-gray-600 font-serif font-bold border-2"
            }`}
            onClick={() => setActiveSection("AI Courses")}
          >
            AI Courses
          </button>
          <button
            className={`px-4 py-2 rounded mr-4 mb-3 text-lg ${
              activeSection === "Intern Courses"
                ? "bg-[#94d768] text-[#21811d] border-[#1f901c] border-2 font-serif font-bold"
                : "bg-gray-500 text-white hover:bg-gray-600 font-serif font-bold border-2"
            }`}
            onClick={() => setActiveSection("Intern Courses")}
          >
            Intern Courses
          </button>
        </div>

        {activeSection === "All Courses" && (
          <div className="w-full">
            <div className="w-full py-5 pb-6 lg:pl-4 flex flex-col md:flex-row items-center justify-center">
              <h1 className="mr-4 text-xl font-serif font-bold text-[#20811dbd]">
                Course Level:
              </h1>
              <div className="relative inline-block">
                <button
                  type="button"
                  className="px-4 py-2 w-72 text-[#21811dbd] bg-[#21811dbd] hover:bg-[#8be988] border-2 border-[#21811dbd] focus:ring-2 focus:outline-none focus:ring-[#21811dbd] font-medium rounded-lg text-xs inline-flex items-center justify-between"
                  onClick={toggleDropdown}
                >
                  <h1 className="text-[#21811d] font-bold">{level} </h1>
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="origin-top-left absolute  mt-2 w-72 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <ul
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <li>
                        <p
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(0)}
                        >
                          Show All
                        </p>
                      </li>
                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(1)}
                        >
                          Summer Camps
                        </h1>
                      </li>
                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(2)}
                        >
                          Python Courses
                        </h1>
                      </li>
                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(3)}
                        >
                          USACO—USACO Bronze Knowledge
                        </h1>
                      </li>
                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(4)}
                        >
                          USACO—USACO Silver Knowledge
                        </h1>
                      </li>

                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(5)}
                        >
                          USACO—USACO Gold Knowledge
                        </h1>
                      </li>

                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(6)}
                        >
                          Ai4Future Courses
                        </h1>
                      </li>

                      <li>
                        <h1
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => changeLevel(7)}
                        >
                          Intern Fastlane Courses
                        </h1>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {summercamp && (
              <div className="pb-10 border-b-2 border-[#20811da4] border-dashed">
                <h1 className="lg:pl-4 mx-10 mb-12 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]">
                  Summer Camps
                </h1>
                <div className="lg:w-11/12 mx-auto grid lg:grid-cols-3 ttt gap-12 place-items-center">
                  <CourseCard2 />
                  <CourseCard3 />
                  <CourseCard4 />
                </div>
              </div>
            )}

            <div className="pb-10 mb-10">
              <div className="lg:w-11/12 mx-auto grid lg:grid-cols-1 ttt">
                {courses.map((cat, ind) => (
                  <>
                    {level === "Show All" ? (
                      <h1 className="lg:pl-4 pb-4 mt-12 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]">
                        {Levels[ind + 2]}
                      </h1>
                    ) : (
                      <h1 className="lg:pl-4 pb-4 pt-5 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]">
                        {[Levels[title]]}
                      </h1>
                    )}

                    {cat.map((cou, ind) => (
                      <CourseTile key={ind} data={cou} />
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "Summer Camps" && (
          <div className="py-10 border-b-2 border-[#20811da4] border-dashed">
            <h1 className="lg:pl-4 mx-10 mb-12 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]">
              Summer Camps
            </h1>
            <div className="lg:w-11/12 mx-auto grid lg:grid-cols-3 ttt gap-12 place-items-center">
              <CourseCard2 />
              <CourseCard3 />
              <CourseCard4 />
            </div>
          </div>
        )}

        {activeSection === "Fall Courses" && (
          <div className="pb-10 mb-10">
            <div className="lg:w-11/12 mx-auto grid lg:grid-cols-1 ttt">
              {Object.keys(FallCourses).map((cat, ind) => (
                <>
                  <h1
                    key={ind}
                    className="lg:pl-4 pb-4 mt-12 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]"
                  >
                    {cat}
                  </h1>
                  {FallCourses[cat].map((cour, idx) => (
                    <CourseTile key={idx} data={cour} />
                  ))}
                </>
              ))}
            </div>
          </div>
        )}

        {activeSection === "AI Courses" && (
          <div className="pb-10 mb-10">
            <div className="lg:w-11/12 mx-auto grid lg:grid-cols-1 ttt">
              <h1 className="lg:pl-4 pb-4 mt-12 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]">
                AI4FUTURE COURSES
              </h1>
              {AIFutureCourses.map((cour, idx) => (
                <CourseTile key={idx} data={cour} />
              ))}
            </div>
          </div>
        )}

        {activeSection === "Intern Courses" && (
          <div className="pb-10 mb-10">
            <div className="lg:w-11/12 mx-auto grid lg:grid-cols-1 ttt">
              <h1 className="lg:pl-4 pb-4 mt-12 text-4xl text-[#21811d] font-serif uppercase font-extrabold underline underline-offset-[5px]">
                INTERN FASTLANE COURSES
              </h1>
              {FastLaneCourses.map((cour, idx) => (
                <CourseTile key={idx} data={cour} />
              ))}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Courses;
