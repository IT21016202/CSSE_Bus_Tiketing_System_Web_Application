import React, { useState } from "react";
import CreditIcon from "../images/add-credit.jpg";
import { getDatabase, ref, set } from "firebase/database";

function AddCredit() {
  const database = getDatabase();

  const [transactionNumber, setTransactionNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    //Add route to realtime DB
    const routeRef = ref(database, "creditTransactions/" + transactionNumber);
    const routeData = {
      TransactionNumber: transactionNumber,
      Amount: amount,
      Location: location,
      CreatedAt: new Date().toString(),
      UpdatedAt: new Date().toString(),
    };

    set(routeRef, routeData)
      .then(() => {
        console.log("Data set to DB");
        alert("Credit Added Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div style={top}>
        <h1 style={add}>Add Credit</h1>
        <img style={route} src={CreditIcon} width={250} />
      </div>

      <div style={inputDiv}>
        <input
          style={inputBox}
          type="text"
          placeholder="Transaction Number"
          onChange={(e) => {
            setTransactionNumber(e.target.value);
          }}
        />
        <input
          style={inputBox}
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input
          style={inputBox}
          type="text"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <div style={btnDiv}>
        <button
          style={button}
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Add Credit
        </button>
      </div>
    </div>
  );
}

const top = {
  textAlign: "center",
  marginTop: "50px",
};

const add = {
  color: "#1D4E89",
  fontWeight: "bold",
};

const route = {
  marginTop: "20px",
};

const inputDiv = {
  textAlign: "center",
  marginTop: "30px",
};

const inputBox = {
  width: "40%",
  padding: "10px",
  margin: "10px",
  border: "1px solid #1D4E89",
  borderRadius: "10px",
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
};

const btnDiv = {
  marginTop: "30px",
  textAlign: "center",
  marginTop: "30px",
};

const button = {
  border: "none",
  padding: "10px 20px",
  marginRight: "20px",
  borderRadius: "10px",
  fontWeight: "bold",
};

export default AddCredit;
