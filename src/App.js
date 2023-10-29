import "./App.css";
import "./firebase/firebaseConfig";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SideBar from "./components/SideBar";
import Timetable from "./components/Timetable";
import Navbar from "./components/Navbar";
import Bus from "./components/Bus";
import Home from "./components/Home";
import BusRoute from "./components/Route";
import AddBus from "./components/AddBus";
import AddRoute from "./components/AddRoute";
import ViewBus from "./components/ViewBus";
import ViewRoute from "./components/ViewRoute";
import PlanSchedule from "./components/PlanSchedule";
import ViewTimetable from "./components/ViewTimetable";
import Report from "./components/Report";
import ViewBusesBasedOnStatus from "./components/ViewBusesBasedOnStatus";
import ViewTimetablesBasedOnStatus from "./components/ViewTimetablesBasedOnStatus";
import NotFound from "./components/NotFound";
import DayPassMansgement from "./components/DayPassMansgement";

//Amisha
import CreditTransactions from "./components/CreditTransactions";
import AddCredit from "./components/AddCredit";
import CreditHistory from "./components/CreditHistory";

import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ width: "20%", float: "left" }}>
        <SideBar />
      </div>
      <div style={{ width: "80%", float: "right" }}>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route
            path="/viewbusesbasedonstatus"
            element={<ViewBusesBasedOnStatus />}
          />
          <Route
            path="/viewTimetablesBasedOnStatus"
            element={<ViewTimetablesBasedOnStatus />}
          />
          <Route path="/dayPassManagement" element={<DayPassMansgement />} />

          <Route path="/creditTransactions" element={<CreditTransactions />} />
          <Route path="/addCredit" element={<AddCredit />} />
          <Route path="/creditHistory" element={<CreditHistory />} />

          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
