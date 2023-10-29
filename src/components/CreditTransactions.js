import React from "react";
import ViewCreditBal from "../images/credit-balance.jpg";
import AddCredit from "../images/add-credit.jpg";
import { Link } from "react-router-dom";

function CreditTransactions() {
  return (
    <div>
      <p style={topic}>Welcome to Transist Token Credit </p>
      <Link to="/creditHistory">
        <div style={imageTimeTable}>
          <img src={ViewCreditBal} width={270} />
          <h2 style={subtitle}>View Credit Balance</h2>
        </div>
      </Link>

      <Link to="/addCredit">
        <div style={imageAddTimeTable}>
          <img src={AddCredit} width={270} />
          <h2 style={subtitle}>Add Credit</h2>
        </div>
      </Link>
    </div>
  );
}

const topic = {
  color: "#1D4E89",
  textAlign: "center",
  fontSize: "50px",
  fontWeight: "bold",
  marginTop: "30px",
};

const imageTimeTable = {
  display: "inline-block",
  margin: "5%",
  marginLeft: "15%",
};

const imageAddTimeTable = {
  width: "25%",
  display: "inline-block",
  flex: "right",
  margin: "5%",
  marginLeft: "15%",
};

const subtitle = {
  textAlign: "center",
  color: "#1D4E89",
  fontWeight: "bold",
  marginTop: "15px",
};

export default CreditTransactions;
