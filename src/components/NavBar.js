import React, { useState } from "react";
// import { BellIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/user/userSlice";
import { Transition } from "@headlessui/react";

const NavBar = () => {
  const user = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const logOut = () => {
    const ob = {
      id: 0,
      fname: "",
      lname: "",
      email: "",
      phone: "",
    };
    dispatch(updateUser(ob));
    navigate("/logout");
  };

  return (
    <>
      <div>
        <nav className="text-5xl sticky h-20 w-[96%] mx-auto border-b-2 border-gray-300 hidden lg:block">
          <div className="flex justify-evenly items-center h-full">
            <div className="flex justify-between items-center w-full">
              <div className="relative flex items-center w-96 h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search..."
                />
              </div>
              <h1 className="text-4xl font-serif font-bold text-[#1f901c]">
                Happy Programming
              </h1>
              <div className="flex items-center">
                {/* <BellIcon className="h-14 w-14 p-2 text-[#1f901c] rounded-full" /> */}
                {user ? (
                  <>
                    {user === "student" ? (
                      <img
                        src={require("../assets/home/student.jpg")}
                        alt=""
                        className="h-14 mr-8 ml-8 w-14 rounded-full object-fill"
                      />
                    ) : (
                      <img
                        src={require("../assets/home/teacher.png")}
                        alt=""
                        className="h-14 mr-8 ml-8 w-14 rounded-full object-fill"
                      />
                    )}

                    <NavLink to="/logout" className="cursor-logo">
                      <button
                        className="mr-8 ml-3 text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-8 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login">
                    <button className="mr-8 ml-8 bg-[#94d768] text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-8 border-2 border-[#1f901c] rounded-full font-mono font-extrabold">
                      Login
                    </button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="lg:hidden shadow-lg">
          <div className="flex items-center justify-between py-2 px-4">
            <div className="flex items-center">
              <img
                src={require("../assets/logo/logo.png")}
                alt=""
                className="h-20"
              />
              <h1 className="font-serif text-2xl text-center pl-1 font-bold text-[#1f901c]">
                Happy <br /> Programming
              </h1>
            </div>

            <div className="-mr-2 ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="lg:hidden absolute z-50 bg-[rgb(239,248,231)] w-full text-center shadow-2xl border-b-4 border-[#1f901c]"
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/courses"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Courses
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/contact"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/login"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login / Register
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </>
  );
};

export default NavBar;
