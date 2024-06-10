import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { NotificationManager } from "react-notifications";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_API_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          NotificationManager.success("Message sent successfully!!!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          NotificationManager.error("Message could not be sent, Please try again");
        },
      );
      e.target.reset();
  };
  return (
    <>
      <section className="overflow min-h-screen max-h-screen overflow-y-scroll ttt pb-24" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 font-serif">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="font-semibold uppercase tracking-wide text-gray-600 text-xl pb-2">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-[#21811d] text-4xl sm:text-5xl">
                Get in Touch
              </h2>
              {/* <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
                In hac habitasse platea dictumst
              </p> */}
            </div>
          </div>
          <div className="flex items-stretch justify-center pt-12">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-xl text-gray-700 ">
                Have questions or feedback? We’re here to help! Reach out to us using the following methods. We look forward to hearing from you.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#94d768] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900 ">
                        Our Address
                      </h3>
                      <p className="text-gray-600 ">
                      Near Longfellow Middle School, Falls Church
                      </p>
                      <p className="text-gray-700 ">VA, 22043</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#94d768] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900">
                        Contact
                      </h3>
                      <p className="text-gray-700 ">Mobile: 703-300-0061</p>
                      <p className="text-gray-700 ">Mail: happyprogramming.us@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#94d768] text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900 ">
                        Working hours
                      </h3>
                      <p className="text-gray-700 ">
                        Monday - Saturday: 13:00 - 18:00 EST
                      </p>
                      <p className="text-gray-700 ">
                        Sunday : Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold ">Ready to Get Started?</h2>
                
                  <form ref={form} onSubmit={sendEmail} className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 sm:mb-4 mb-6">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                        required
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 sm:mb-4 mb-6">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                        required
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                          name="email"
                        />
                      </div>
                      <div className="mx-0 sm:mb-4 mb-6">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                        required
                          type="text"
                          id="subject"
                          autocomplete="subject"
                          placeholder="Subject"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                      required
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                      ></textarea>
                    </div>
                    <div className="text-center">
                    <button className="w-full bg-[#94d768] text-[#21811d] font-bold font-serif px-6 mt-5 py-3 font-xl rounded-md sm:mb-0">
                      Send Message
                    </button>
                  </div>
                  </form>
                  
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
