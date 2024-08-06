import React /*, { useEffect, useState }*/ from "react";
import { useSelector } from "react-redux";
// import axios from "axios";
// import CourseCard from "../components/CourseCard";
import CourseTile2 from "../components/CourseTile2";

const Dashboard = () => {
  // const sid = useSelector((state) => state.user.id)
  // const role = useSelector((state) => state.user.role)
  // const [ucourses, setUcourses] = useState([])
  // const [alred, setAlred] = useState([])
  const courses = useSelector((state) => state.course.regcourses)
  console.log('ncjkdswnjcsd')
  console.log(courses)
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //         const response = await axios.get(`http://localhost:8000/getstudentcourses?sid=${sid}`);
  //         setUcourses(response.data.api_data);
  //         console.log(response.data.api_data);
  //         const courseList = response.data.api_data.map(row => row.cid);
  //         console.log(courseList)
  //         // setAlred(setAlred)
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  // };

  // fetchData();
  // },[sid])
  return (
    <>
      <div className="mx-10 mt-10 flex-col flex overflow min-h-screen max-h-screen overflow-y-scroll ttt">
        <div className="overflow-y-scroll pb-56 ttt">
          <div className="pl-4">
            <h1 className="text-5xl font-bold leading-relaxed text-[#21811d] font-serif pb-12">
              Your Registrations
            </h1>
            {/* <h1 className="text-2xl pb-12 leading-relaxed text-[#21811d] font-serif">
              Explore courses the world's top Instructors.
            </h1> */}
          </div>
          {/* <div className="w-11/12 mx-auto grid grid-cols-3 ttt gap-12">
            {
              ucourses && ucourses.map((cour, key) => <CourseCard data={cour} key={key}/>)
            }
            
          </div> */}
          {
            courses.map((cour, idx) => (
              <CourseTile2 key={idx} data={cour} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Dashboard;
