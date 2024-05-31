// import React, { useEffect, useState } from "react";
// import CourseCard from "../components/CourseCard";
import CourseCard2 from "../components/CourseCard2";
import CourseCard3 from "../components/CourseCard3";
import CourseCard4 from "../components/CourseCard4";
import Footer from "../components/Footer";
// import axios from "axios";
// import { useSelector } from "react-redux";

const Courses = () => {
  // const [courses, setCourses] = useState([]);
  // const [alred, setAlred] = useState([])
  // const sid = useSelector((state) => state.user.id);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/getcourses");
  //       setCourses(response.data.api_data);
  //       console.log(response.data.api_data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [sid]);

  return (
    <>
      <div className="mt-10 flex-col flex overflow min-h-screen max-h-screen overflow-y-scroll ttt pb-24">
        {/* <div className="overflow-y-scroll pb-56 ttt"> */}
          <div className="pl-4 mx-10">
            <h1 className="text-5xl font-bold leading-relaxed text-[#21811d] font-serif">
              Start Learning
            </h1>
            <h1 className="text-2xl pb-12 leading-relaxed text-[#21811d] font-serif">
              Explore courses the world's top Instructors.
            </h1>
          </div>
          <div className="w-11/12 mx-auto grid grid-cols-3 ttt gap-12">
            {/* {courses &&
              courses.map((cour, key) => <CourseCard data={cour} key={key} />)} */}
              <CourseCard2 />
              <CourseCard3 />
              <CourseCard4 />
          </div>
          <Footer />
        {/* </div> */}
        
      </div>
    </>
  );
};

export default Courses;
