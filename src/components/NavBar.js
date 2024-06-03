import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/user/userSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    const ob = {
      role: "",
      id: 0,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      about: "",
    };
    dispatch(updateUser(ob));
    navigate("/logout");
  };

  return (
    <>
      <div className="text-5xl sticky z-10 h-20 w-[96%] mx-auto border-b-2 border-gray-300">
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
            <h1 className="text-4xl font-serif font-bold text-[#1f901c]">Happy Programming</h1>
            <div className="flex items-center">
              <BellIcon className="h-14 w-14 p-2 text-[#1f901c] rounded-full" />
              {/* <img
                src={require("../assets/logo/lh.png")}
                alt=""
                className="h-14 mr-8 ml-8 w-14 rounded-full"
              /> */}

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
                // <NavLink to="/login" className="cursor-not-allowed">
                  <button disabled className="mr-8 ml-8 bg-[#94d768] text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-8 border-2 border-[#1f901c] rounded-full font-mono font-extrabold cursor-not-allowed">
                    Login
                  </button>
              // </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
