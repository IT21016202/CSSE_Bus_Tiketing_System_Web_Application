import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ relaod }) => {
  useEffect(() => {}, [relaod]);

  const user = localStorage.getItem("user-transport");
  console.log("side bar", user);

  return (
    <div>
      {user && (
        <ul style={ul}>
          <Link style={{ textDecoration: "none" }} to="/timetable">
            <li style={li}>Time Table</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/bus">
            <li style={li}>Bus Management</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/route">
            <li style={li}>Route Management</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dayPassManagement">
            {" "}
            <li style={li}>Day Pass Management</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/route">
            <li style={li}>Smart Card Management</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="report">
            {" "}
            <li style={li}>Reports</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="report">
            {" "}
            <li style={li}>Credit Transactions</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

const ul = {
  listStyle: "none",
  textAlign: "left",
  marginLeft: "0px",
  borderRight: "1px solid #1D4E89",
  height: "87vh",
  width: "80%",
  paddingTop: "20px",
};

const li = {
  color: "white",
  fontWeight: "bold",
  fontSize: "15px",
  marginTop: "50px",
  cursor: "pointer",
  padding: "10px",
  // borderRadius: '15px',
  marginRight: "25px",
  backgroundColor: "#1D4E89",
};

const logo = {
  height: "50px",
  width: "50px",
  marginLeft: "20px",
  borderRadius: "30px",
};

export default SideBar;
