import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/user/userSlice";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [logintab, setLoginTab] = useState("login");
  const [roletab, setRoleTab] = useState("student");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async (e) => {
    console.log(roletab);
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (roletab === "student") {
      try {
        const response = await axios.post(
          "http://localhost:8000/loginstudent",
          {
            email,
            password,
          }
        );
        console.log(response.data);
        const ob = {
          "role": roletab,
          "id": response.data.api_data['sid'],
          "fname":response.data.api_data['fname'],
          "lname":response.data.api_data['lname'],
          "email":response.data.api_data['email'],
        }
        dispatch(updateUser(ob))
        console.log(ob)
        NotificationManager.success("Sign In successful");
        navigate('/');
      } catch (error) {
        NotificationManager.error("Invalid Credentials");
        // console.error(error.response.data);
        // console.log('sdfgsdfsdf')
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8000/loginteacher",
          {
            email,
            password,
          }
        );
        console.log(response.data);
        const ob = {
          "role": roletab,
          "id": response.data.api_data['sid'],
          "fname":response.data.api_data['fname'],
          "lname":response.data.api_data['lname'],
          "email":response.data.api_data['email'],
          "phone":response.data.api_data['phone'],
          "about":response.data.api_data['about'],
        }
        dispatch(updateUser(ob))
        NotificationManager.success("Sign In successful");
        navigate('/');
      } catch (error) {
        NotificationManager.error("Invalid Credentials");
        // console.error(error.response.data);
      }
    }
  };

  const registerStudent = async (e) => {
    // console.log(roletab);
    e.preventDefault();
    console.log(e.target.regemail.value)
    const email = e.target.regemail.value;
    const password = e.target.password.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;

    
    try {
      const response = await axios.post('http://localhost:8000/addstudent', { email, password, fname, lname });
      NotificationManager.success("Registration Successful");
      
      const ob = {
        "role": roletab,
        "id": response.data.api_data['sid'],
        "fname":response.data.api_data['fname'],
        "lname":response.data.api_data['lname'],
        "email":response.data.api_data['email'],
      }
      dispatch(updateUser(ob))
      console.log(response.data);
      navigate('/');
    } catch (error) {
      NotificationManager.error("Registration Failed; Try again");
      // console.error(error.response.data);
    }
  };

  const registerTeacher = async (e) => {
    console.log(roletab);
    e.preventDefault();
    const email = e.target.regemail.value;
    const password = e.target.password.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const phone = e.target.phone.value;

    console.log(email)
    try {
      const response = await axios.post('http://localhost:8000/addteacher', { email, password, fname, lname, phone });
      NotificationManager.success("Registration Successful");
      
      const ob = {
        "role": roletab,
        "id": response.data.api_data['sid'],
        "fname":response.data.api_data['fname'],
        "lname":response.data.api_data['lname'],
        "email":response.data.api_data['email'],
        "phone":response.data.api_data['phone'],
        "about":response.data.api_data['about'],
      }
      dispatch(updateUser(ob))
      console.log(response.data);
      navigate('/');
    } catch (error) {
      NotificationManager.error("Registration Failed; Try again");
      // console.error(error.response.data);
    }

  };

  return (
    <>
      <div className="w-10/12 mx-auto overflow min-h-screen max-h-screen overflow-y-scroll ttt">
        <div className="overflow-y-scroll pb-48 ttt">
          <img
            className="mx-auto h-36 w-auto mt-6"
            src={require("../assets/logo/lh.png")}
            alt="Your Company"
          />
          <div className="flex items-center justify-center pt-10">
            <div className="flex border-2 rounded-full border-[#94d768] text-center">
              {logintab === "login" ? (
                <div className="border-r-2 py-4 px-8 pl-10 border-[#94d768] w-48 bg-[#94d768] rounded-l-full">
                  <h1 className="pr-2 text-2xl font-mono font-bold">Login</h1>
                </div>
              ) : (
                <div
                  className="border-r-2 py-4 px-8 pl-10 border-[#94d768] w-48 rounded-l-full"
                  onClick={() => setLoginTab("login")}
                >
                  <h1 className="pr-2 text-2xl font-mono">Login</h1>
                </div>
              )}

              {logintab === "register" ? (
                <div className="py-4 px-8 pr-10 w-48 rounded-r-full bg-[#94d768]">
                  <h1 className="text-2xl font-mono font-bold">Register</h1>
                </div>
              ) : (
                <div
                  className="py-4 px-8 pr-10 w-48 rounded-r-full"
                  onClick={() => setLoginTab("register")}
                >
                  <h1 className="text-2xl font-mono">Register</h1>
                </div>
              )}
            </div>
          </div>

          <div className="pt-0 ">
            {logintab === "login" ? (
              <div className="mt-12">
                <div className="flex items-center justify-center">
                  <div className="flex border-2 rounded-full border-[#94d768]">
                    {roletab === "student" ? (
                      <div className="border-r-2 py-3 px-8 pl-10 border-[#94d768] w-36 bg-[#94d768] rounded-l-full">
                        <h1 className="pr-2 text-xl font-mono font-bold">
                          Student
                        </h1>
                      </div>
                    ) : (
                      <div
                        className="border-r-2 py-3 px-8 pl-10 border-[#94d768] w-36 rounded-l-full"
                        onClick={() => setRoleTab("student")}
                      >
                        <h1 className="pr-2 text-xl font-mono">Student</h1>
                      </div>
                    )}

                    {roletab === "teacher" ? (
                      <div className="py-3 px-8 pr-10 w-36 rounded-r-full bg-[#94d768]">
                        <h1 className="text-xl font-mono font-bold">Teacher</h1>
                      </div>
                    ) : (
                      <div
                        className="py-3 px-8 pr-10 w-36 rounded-r-full"
                        onClick={() => setRoleTab("teacher")}
                      >
                        <h1 className="text-xl font-mono">Teacher</h1>
                      </div>
                    )}
                  </div>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-8">
                  <h2 className="mt-10 text-center text-2xl font-serif text-[#21811d] font-bold leading-9 tracking-tight">
                    Log in to your <span className="underline">{roletab}</span>{" "}
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
                <div className="flex items-center justify-center pt-12">
                  <div className="flex border-2 rounded-full border-[#94d768]">
                    {roletab === "student" ? (
                      <div className="border-r-2 py-3 px-8 pl-10 border-[#94d768] w-36 bg-[#94d768] rounded-l-full">
                        <h1 className="pr-2 text-xl font-mono font-bold">
                          Student
                        </h1>
                      </div>
                    ) : (
                      <div
                        className="border-r-2 py-3 px-8 pl-10 border-[#94d768] w-36 rounded-l-full"
                        onClick={() => setRoleTab("student")}
                      >
                        <h1 className="pr-2 text-xl font-mono">Student</h1>
                      </div>
                    )}

                    {roletab === "teacher" ? (
                      <div className="py-3 px-8 pr-10 w-36 rounded-r-full bg-[#94d768]">
                        <h1 className="text-xl font-mono font-bold">Teacher</h1>
                      </div>
                    ) : (
                      <div
                        className="py-3 px-8 pr-10 w-36 rounded-r-full"
                        onClick={() => setRoleTab("teacher")}
                      >
                        <h1 className="text-xl font-mono">Teacher</h1>
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-8">
                  <h2 className="mt-10 text-center text-2xl font-serif text-[#21811d] font-bold leading-9 tracking-tight">
                    Register your <span className="underline">{roletab}</span>{" "}
                    account
                  </h2>
                </div>

                {roletab === "student" ? (
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={registerStudent}>
                      <div>
                        <label
                          htmlFor="registeremail"
                          className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
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
                            First Name
                          </label>
                          <div className="mt-2">
                            <input
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
                            Last Name
                          </label>
                          <div className="mt-2">
                            <input
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
                            Password
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5  shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
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
                ) : (
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={registerTeacher}>
                      <div>
                        <label
                          htmlFor="registeremail"
                          className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="regemail"
                            name="registeremail"
                            type="email"
                            autoComplete="email"
                            className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <div>
                          <label
                            htmlFor="fname"
                            className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                          >
                            First Name
                          </label>
                          <div className="mt-2">
                            <input
                              id="fname"
                              name="fname"
                              type="text"
                              autoComplete="email"
                              className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="lname"
                            className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
                          >
                            Last Name
                          </label>
                          <div className="mt-2">
                            <input
                              id="lname"
                              name="lname"
                              type="text"
                              autoComplete="text"
                              className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                            />
                          </div>
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
                            autoComplete="phone"
                            className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
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
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="block px-3 font-mono font-bold text-[#727272] w-full rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
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
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
