import React from "react";

const Create = () => {
  const signIn = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div className="text-center mt-16 text-4xl font-mono font-bold text-[#21811d]">
          <h1>Create a Course</h1>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={signIn}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-bold font-serif leading-6 text-[#21811d]"
              >
                Course Name
              </label>
              <div className="mt-2">
                <input
                  id="cname"
                  name="cname"
                  type="text"
                  autoComplete="cname"
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
                  Description
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="desc"
                  name="desc"
                  type="text"
                  className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                >
                  Video Link
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="vlink"
                  name="vlink"
                  type="text"
                  className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                >
                  Image Link
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="imglink"
                  name="imglink"
                  type="text"
                  className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                >
                  Date
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="imglink"
                  name="imglink"
                  type="date"
                  className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                >
                  Date
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="time"
                  className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-serif font-bold leading-6 text-[#21811d]"
                >
                  Number of seats
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="count"
                  name="count"
                  type="number"
                  className="block w-full px-3 font-mono font-bold text-[#727272] rounded-md border-0 py-1.5 shadow-sm ring-2 ring-inset ring-[#94d768] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#94d768] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#94d768] text-xl hover:bg-[#94d76800] text-[#21811d] py-3 px-6 border-2 border-[#1f901c] rounded-full font-mono font-extrabold"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
