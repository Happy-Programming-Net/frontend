import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  // UserIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SideNavbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.role);
  const uid = useSelector((state) => state.user.id);
  
  return (
    <>
      <div
        exit={{ opacity: 0 }}
        className="flex flex-col items-center text-center justify-evenly shadow-xl bg-white max-h-screen min-h-screen rounded-tr-[50px]"
      >
        <NavLink to="/">
          <div className="flex justify-center flex-col items-center">
            <img
              src={require(`../assets/logo/logo.png`)}
              alt=""
              className="h-28"
            />
            <h1 className="pt-5 text-[23px] font-serif font-bold text-[#21811d]">
              Happy <br /> Programming
            </h1>
          </div>
        </NavLink>
        <NavLink to="/" className="cursor-logo">
          {location.pathname === "/" ? (
            <div className="flex items-center">
              <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <HomeIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-[#21811d] font-extrabold">Home</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="bg-white hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <HomeIcon className="h-12 w-12 text-blue-500 bg-[#3b83f636] rounded-full p-2" />
              <h1 className="pt-1 text-black font-semibold">Home</h1>
            </div>
          )}
        </NavLink>

        <NavLink to="/courses">
          {location.pathname === "/courses" ? (
            <div className="flex items-center">
              <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <BookOpenIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-[#21811d] font-extrabold">Courses</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <BookOpenIcon className="h-12 w-12 text-pink-500 bg-[#ec489a23] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Courses</h1>
            </div>
          )}
        </NavLink>

        {
          uid > 0 && <NavLink to="/dashboard">
          {location.pathname === "/dashboard" ? (
            <div className="flex items-center">
              <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <ChartBarIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-[#21811d] font-extrabold">
                  Dashboard
                </h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <ChartBarIcon className="h-12 w-12 text-orange-500 bg-[#f9751629] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Dashboard</h1>
            </div>
          )}
        </NavLink>
        }

        {/* <NavLink to="/dashboard">
          {location.pathname === "/dashboard" ? (
            <div className="flex items-center">
              <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <ChartBarIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-[#21811d] font-extrabold">
                  Dashboard
                </h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <ChartBarIcon className="h-12 w-12 text-orange-500 bg-[#f9751629] rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Dashboard</h1>
            </div>
          )}
        </NavLink> */}

        {user === "teacher" ? (
          <NavLink to="/create">
            {location.pathname === "/create" ? (
              <div className="flex items-center">
                <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                  <PlusIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                  <h1 className="pt-1 text-[#21811d] font-extrabold">Create</h1>
                </div>
                <div className="relative right-3">
                  <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
                </div>
              </div>
            ) : (
              <div className="hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <PlusIcon className="h-12 w-12 text-gray-600 bg-[#4b556329] rounded-full p-2" />
                <h1 className="pt-1 font-semibold">Create</h1>
              </div>
            )}
          </NavLink>
        ) : (
          <NavLink to="/contact">
            {location.pathname === "/contact" ? (
              <div className="flex items-center">
                <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                  <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                  <h1 className="pt-1 text-[#21811d] font-extrabold">
                    Contact
                  </h1>
                </div>
                <div className="relative right-3">
                  <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
                </div>
              </div>
            ) : (
              <div className="hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-gray-600 bg-[#4b556329] rounded-full p-2" />
                <h1 className="pt-1 font-semibold">Contact</h1>
              </div>
            )}
          </NavLink>
        )}

        {/* <NavLink to="/profile">
          {location.pathname === "/profile" ? (
            <div className="flex items-center">
              <div className="bg-[#94d768] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
                <UserIcon className="h-12 w-12 text-[#7dce47] bg-[#ffffff85] rounded-full p-2" />
                <h1 className="pt-1 text-[#21811d] font-extrabold">Profile</h1>
              </div>
              <div className="relative right-3">
                <div className="h-5 w-5 bg-[#94d768] rounded-sm rotate-45"></div>
              </div>
            </div>
          ) : (
            <div className="hover:border-2 hover:border-[#94d768a1] flex flex-col justify-center text-center items-center p-3 border rounded-3xl h-32 w-28">
              <UserIcon className="h-12 w-12 text-green-500 bg-[#22c55e3c]  rounded-full p-2" />
              <h1 className="pt-1 font-semibold">Profile</h1>
            </div>
          )}
        </NavLink> */}
      </div>
    </>
  );
};

export default SideNavbar;
