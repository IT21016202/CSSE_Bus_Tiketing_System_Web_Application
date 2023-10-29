import React, { useState, useEffect } from "react";
import { getDatabase, ref, get, update } from "firebase/database";
import "./CreditHistory.css";

function CreditHistory() {
  const [credit, setCredits] = useState({});

  const database = getDatabase();

  const maxAmount = 10000;

  useEffect(() => {
    const creditRef = ref(database, "creditTransactions/");
    get(creditRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setCredits(data);
        } else {
          console.log("Credit Data Not Found !");
        }
      })
      .catch((err) => {
        console.error("Error retrieving credit data:", err);
      });
  }, []);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  //   function formatTimestampToTime(timestamp) {
  //     const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  //     const hours = date.getHours().toString().padStart(2, "0");
  //     const minutes = date.getMinutes().toString().padStart(2, "0");
  //     const seconds = date.getSeconds().toString().padStart(2, "0");

  //     return `${hours}:${minutes}:${seconds}`;
  //   }

  return (
    <div>
      <div style={top}>
        <h1 style={add}>Credit History</h1>
      </div>

      {Object.values(credit).map((creditData) => (
        <div className="container" style={{ marginTop: "40px" }}>
          <div className="row ">
            <div className="col-xl-6 col-lg-6">
              <div className="card l-bg-blue-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">
                      Transaction No: {creditData.TransactionNumber}{" "}
                    </h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        Amount Added: Rs.{creditData.Amount}
                      </h2>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        Date {formatDate(creditData.CreatedAt)}{" "}
                        <i className="fa fa-arrow-up"></i>
                      </span>
                      {/* Time: {formatTimestampToTime(creditData.CreatedAt)}{" "}
                      <i className="fa fa-arrow-up"></i> */}
                      <span>
                        Location {creditData.Location}
                        <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress mt-1 "
                    data-height="8"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      data-width={`${(creditData.Amount / maxAmount) * 100}%`}
                      aria-valuenow={(creditData.Amount / maxAmount) * 100}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${(creditData.Amount / maxAmount) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
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

export default CreditHistory;
