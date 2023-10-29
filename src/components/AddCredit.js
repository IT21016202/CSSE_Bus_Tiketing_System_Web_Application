import React, { useState, useEffect } from "react";
import CreditIcon from "../images/add-credit.jpg";
import Modal from "react-modal"; // Import React Modal
import { getDatabase, ref, set } from "firebase/database";

function AddCredit() {
  const database = getDatabase();

  const [transactionNumber, setTransactionNumber] = useState(
    generateTransactionNumber()
  );
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");

  // State variable for managing the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardType, setCardType] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  // Function to generate a random transaction number
  function generateTransactionNumber() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  useEffect(() => {
    // Generate a transaction number when the component is initially rendered
    setTransactionNumber(generateTransactionNumber());
  }, []);

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

    // setIsModalOpen(true);
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
          value={transactionNumber}
          readOnly
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

      {/* Button to open the modal */}
      <div style={btnDiv}>
        <button style={modalOpenButton} onClick={() => setIsModalOpen(true)}>
          Enter Bank Details
        </button>
      </div>

      {/* Modal for entering bank details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles} // Define custom styles for the modal
      >
        <h2>Enter Bank Details</h2>
        <form>
          <div style={formGroup}>
            <label htmlFor="cardType">Card Type:</label>
            <input
              type="text"
              id="cardType"
              name="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label htmlFor="accountHolder">Account Holder's Name:</label>
            <input
              type="text"
              id="accountHolder"
              name="accountHolder"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={formGroup}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            style={submitButtonStyle}
            onClick={() => alert("Payment Details Added Successfully")}
          >
            Submit
          </button>
        </form>
      </Modal>

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

// Custom styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Styles for form elements
const formGroup = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#1D4E89",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const modalOpenButton = {
  backgroundColor: "#1D4E89",
  color: "white",
  padding: "10px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  textAlign: "center",
};

export default AddCredit;
