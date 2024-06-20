import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [logintab, setLoginTab] = useState("login");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    NotificationManager.success("Sign In successful");
    navigate('/');
    e.target.reset();
  };

  const registerStudent = async (e) => {
    e.preventDefault();
    console.log(e.target.regemail.value);
    NotificationManager.success("Registration Successful");
    navigate('/login');
    e.target.reset();
  };

  return (
    <>
      <div className="md:w-10/12 mx-auto overflow min-h-screen max-h-screen overflow-y-scroll ttt px-4">
        <div className="overflow-y-scroll md:pt-8 pb-48 ttt">
          <img
            className="md:block hidden mx-auto h-36 w-auto mt-6"
            src={require("../assets/logo/logo.png")}
            alt="Your Company"
          />
          <div className="flex items-center justify-center pt-10">
            <div className="flex border-2 rounded-full border-[#94d768] text-center">
              {logintab === "login" ? (
                <div className="border-r-2 py-3 px-8 pl-10 border-[#94d768] md:w-48 bg-[#94d768] rounded-l-full">
                  <h1 className="pr-2 md:text-2xl font-mono font-bold">Login</h1>
                </div>
              ) : (
                <div
                  className="border-r-2 py-3 px-8 pl-10 border-[#94d768] md:w-48 rounded-l-full"
                  onClick={() => setLoginTab("login")}
                >
                  <h1 className="pr-2 md:text-2xl font-mono">Login</h1>
                </div>
              )}

              {logintab === "register" ? (
                <div className="py-3 px-8 pr-10 md:w-48 rounded-r-full bg-[#94d768]">
                  <h1 className="md:text-2xl font-mono font-bold">Register</h1>
                </div>
              ) : (
                <div
                  className="py-3 px-8 md:pr-10 md:w-48 rounded-r-full"
                  onClick={() => setLoginTab("register")}
                >
                  <h1 className="md:text-2xl font-mono">Register</h1>
                </div>
              )}
            </div>
          </div>

          <div className="pt-0 ">
            {logintab === "login" ? (
              <div className="mt-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-8">
                  <h2 className="mt-10 text-center text-2xl font-serif text-[#21811d] font-bold leading-9 tracking-tight">
                    Log in to your <span className="underline">Student</span>{" "}
                    account
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={signIn}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-3 font-mono font-bold text-[#727272] focus:ring-[#94d768] sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                        >
                          Password
                        </label>
                        <div className="text-sm">
                          <a
                            href="/"
                            className="font-semibold text-[#21811d] hover:text-indigo-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-[#94d768] text-xl hover:bg-[#94d76800] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="overflow-y-scroll ttt">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-8">
                  <h2 className="mt-10 text-center text-2xl font-serif text-[#21811d] font-bold leading-9 tracking-tight">
                    Register your <span className="underline">Student</span>{" "}
                    account
                  </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={registerStudent}>
                    <div>
                      <label
                        htmlFor="registeremail"
                        className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                      >
                        Email address <span className="text-red-700">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                        required
                          id="regemail"
                          name="registeremail"
                          type="email"
                          autoComplete="email"
                          className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="flex w-full justify-between">
                      <div>
                        <label
                          htmlFor="fname"
                          className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                        >
                          First Name <span className="text-red-700">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                          required
                            id="fname"
                            name="fname"
                            type="text"
                            autoComplete="email"
                            className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lname"
                          className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                        >
                          Last Name <span className="text-red-700">*</span>
                        </label>
                        <div className="mt-2">
                          <input
                          required
                            id="lname"
                            name="lname"
                            type="name"
                            autoComplete="email"
                            className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5  shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                        >
                          Password <span className="text-red-700">*</span>
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                        required
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5  shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                        <label
                          htmlFor="phone"
                          className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                        >
                          Phone Number (+1)
                        </label>
                        <div className="mt-2">
                          <input
                          
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            pattern="[0-9]{10}"
                            className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5  shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                    <div>
                      <button
                        type="submit"
                        className="bg-[#94d768] text-xl hover:bg-[#94d76800] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
