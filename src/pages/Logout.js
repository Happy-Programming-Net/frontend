import React from "react";
import { NavLink } from "react-router-dom";

const Logout = () => {
  return (
    <>
      <div className="text-center items-center w-2/3 mx-auto">
        <dotlottie-player
          src="https://lottie.host/780fdabe-0157-450c-bc9c-aca063ea9a35/G3ak33Bi1k.json"
          background="transparent"
          speed="1"
          style={{ width: "1000px", height: "500px", paddingTop: "0px" }}
          direction="1"
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>

        <h1 className="text-4xl font-mono font-bold text-[#21811d]">
          You logged out successfully
        </h1>

        <NavLink to='/login'>
          <button class="mr-8 ml-2 mt-8 text-xl hover:bg-[#94d768] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold">
            Login to your account
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Logout;
