import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Meetings from "./pages/Meetings";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Attendance from "./pages/Attendance";
import UserDashboard from "./pages/UserDashboard";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        {/* <Route path="/admin-dashboard" element={<AdminDashboard/>}/> */}
        <Route path="/user-dashboard" element={<MainLayout ><UserDashboard /></MainLayout> }/>
          {/* <Route index element={} /> */}
          <Route path="/projects" element={<MainLayout ><Projects /></MainLayout> } />
          <Route path="/tasks" element={<MainLayout ><Tasks /></MainLayout> } />
          <Route path="/meetings" element={<MainLayout ><Meetings /></MainLayout> } />
          <Route path="/chat" element={<MainLayout ><Chat /></MainLayout> } />
          <Route path="/documents" element={<MainLayout ><Documents /></MainLayout> } />
          <Route path="/attendance" element={<MainLayout ><Attendance /></MainLayout> } />
         
    
      </Routes>
    </BrowserRouter>
  );
}
