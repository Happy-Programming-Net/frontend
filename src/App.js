import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideNavBar from "./components/SideNavBar";
import NavBar from "./components/NavBar";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-[#94d7682d]">
        <div className="basis-[11%]">
          <SideNavBar />
        </div>
        <div className="basis-[89%] ttt overflow min-h-screen max-h-screen overflow-y-hidden w-[95%] mx-auto">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
        <NotificationContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
