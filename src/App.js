import './App.css';
import './firebase/firebaseConfig';
import { BrowserRouter, Routes, Route, Navigate, RouterProvider } from "react-router-dom";

import SideBar from './components/SideBar';
import Timetable from './components/Timetable';
import Navbar from './components/Navbar';
import Bus from './components/Bus';
import Home from './components/Home';
import BusRoute from './components/Route';
import AddBus from './components/AddBus';
import AddRoute from './components/AddRoute';
import ViewBus from './components/ViewBus';
import ViewRoute from './components/ViewRoute';
import PlanSchedule from './components/PlanSchedule';
import ViewTimetable from './components/ViewTimetable';
import Report from './components/Report';
import ViewBusesBasedOnStatus from './components/ViewBusesBasedOnStatus';
import ViewTimetablesBasedOnStatus from './components/ViewTimetablesBasedOnStatus';
import NotFound from './components/NotFound';
import DayPassMansgement from './components/DayPassMansgement';

import HomePage from './pages/HomePage';

import Login from './pages/Login';
import UserRegister from './pages/UserRegisterPage';

import TimeTablePage from './pages/TimeTablePage';
import ViewTimeTablePage from './pages/ViewTimeTablePage';
import AddTimeTablePage from './pages/AddTimeTablePage';

import BusPage from './pages/BusPage';
import ViewBusPage from './pages/ViewBusPage';
import AddBusPage from './pages/AddBusPage';

import RoutePage from './pages/RoutePage';
import ViewRoutePage from './pages/ViewRoutePage';
import AddRoutePage from './pages/AddRoutePage';

import DayPassPage from './pages/DayPassPage';

import SmartCardPage from './pages/SmartCardPage';

import ReportPage from './pages/ReportPage';
import ViewBusStatusPage from './pages/ViewBusStatusPage';
import ViewTimeTableStatusPage from './pages/ViewTimeTableStatusPage';

function App() {
  return (  
    <BrowserRouter>
      <Navbar/>
        {/* <div style={{width: "20%", float: "left"}}>
          <SideBar />
        </div>
        <div style={{width: "80%", float: "right"}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/timetable" element={<Timetable />} /> 
            <Route path="/bus" element={<Bus />} />
            <Route path="/route" element={<BusRoute />} />
            <Route path="/addbus" element={<AddBus />} />
            <Route path="/addroute" element={<AddRoute />} />
            <Route path="/viewbus" element={<ViewBus />} />
            <Route path="/viewroute" element={<ViewRoute />} />
            <Route path="/planschedule" element={<PlanSchedule />} />
            <Route path="/viewtimetable" element={<ViewTimetable />} />
            <Route path="/report" element={<Report />} />
            <Route path="/viewbusesbasedonstatus" element={<ViewBusesBasedOnStatus />} />
            <Route path='/viewTimetablesBasedOnStatus' element={<ViewTimetablesBasedOnStatus/>} />
            <Route path='/dayPassManagement' element={<DayPassMansgement/>} />  
          </Routes>
        </div>    */}
        <Routes>
          <Route path='/' element={<HomePage/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<UserRegister/>}/>

          <Route path='/timetable' element={<TimeTablePage/>}/>
          <Route path='/viewtimetable' element={<ViewTimeTablePage/>}/>
          <Route path='/planschedule' element={<AddTimeTablePage/>}/>

          <Route path='/bus' element={<BusPage/>}/>
          <Route path='/viewbus' element={<ViewBusPage/>}/>
          <Route path='/addbus' element={<AddBusPage/>}/>

          z<Route path='/route' element={<RoutePage/>}/>
          <Route path='/viewroute' element={<ViewRoutePage/>}/>
          <Route path='/addroute' element={<AddRoutePage/>}/>

          <Route path='/dayPass' element={<DayPassPage/>}/>

          <Route path='/smartCard' element={<SmartCardPage/>}/>

          <Route path='/report' element={<ReportPage/>}/>
          <Route path='/viewBusStatus' element={<ViewBusStatusPage/>}/>
          <Route path='/viewTimeTableStatus' element={<ViewTimeTableStatusPage/>}/>

          <Route path='/*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
