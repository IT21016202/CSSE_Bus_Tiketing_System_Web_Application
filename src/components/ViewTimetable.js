import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  get,
  update,
  remove,
  onValue,
} from "firebase/database";
import Modal from "react-modal";

function ViewTimetable() {
  const [timetables, setTimetables] = useState({}); // array of objects
  const [isChanged, setIsChanged] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTimetable, setSelectedTimetable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTimetableID, setEditingTimetableID] = useState(null);
  const [editForm, setEditForm] = useState({
    RouteNumber: "",
    BusNumber: "",
    StartTime: "",
    StopTime: "",
    Charge: "",
  });

  const database = getDatabase();

  //   useEffect(() => {
  //     const timetableRef = ref(database, "TimeTable/");
  //     get(timetableRef)
  //       .then((snapshot) => {
  //         if (snapshot.exists()) {
  //           const data = snapshot.val();
  //           setTimetables(data);
  //         } else {
  //           console.log("Timetable Data Not Found !");
  //         }
  //       })
  //       .catch((err) => {
  //         console.error("Error retrieving timetable data:", err);
  //       });
  //   }, []);

  useEffect(() => {
    const timetableRef = ref(database, "TimeTable/");
    // Attach a real-time listener using onValue
    const unsubscribe = onValue(timetableRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setTimetables(data);
      } else {
        console.log("Timetable Data Not Found!");
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  function handleStatusChange(timetable) {
    const timetableRef = ref(database, "TimeTable/" + timetable.TimetableID);
    const timetableData = {
      Status: timetable.Status == "Not Delayed" ? "Delayed" : "Not Delayed",
      UpdatedAt: new Date().toString(),
    };

    update(timetableRef, timetableData)
      .then(() => {
        console.log("Data set to DB", timetableData);
        alert("Timetable Status Changed Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsChanged(!isChanged);
  }

  function openDeleteDialog(timetableData) {
    setSelectedTimetable(timetableData);
    setIsDeleteDialogOpen(true);
  }

  function handleDelete() {
    if (selectedTimetable) {
      const timetableRef = ref(
        database,
        "TimeTable/" + selectedTimetable.TimetableID
      );

      // Delete the timetable data
      remove(timetableRef)
        .then(() => {
          console.log("Data deleted from DB");
          alert("Timetable Deleted Successfully!");
          setIsDeleteDialogOpen(false);
          setIsChanged(!isChanged);
        })
        .catch((error) => {
          console.log(error);
          setIsDeleteDialogOpen(false);
        });
    }
  }

  function handleEditClick(timetableID) {
    // Open the modal for editing
    setEditingTimetableID(timetableID);
    setIsModalOpen(true);

    // Set the initial form values
    const timetableData = timetables[timetableID];
    setEditForm({
      RouteNumber: timetableData.RouteNumber,
      BusNumber: timetableData.BusNumber,
      StartTime: timetableData.StartTime,
      StopTime: timetableData.StopTime,
      Charge: timetableData.Charge,
    });
  }

  function handleEditSave() {
    // Save the edited data
    const timetableRef = ref(database, "TimeTable/" + editingTimetableID);
    const updatedData = {
      RouteNumber: editForm.RouteNumber,
      BusNumber: editForm.BusNumber,
      StartTime: editForm.StartTime,
      StopTime: editForm.StopTime,
      Charge: editForm.Charge,
    };

    update(timetableRef, updatedData)
      .then(() => {
        console.log("Data updated successfully:", updatedData);
        alert("Timetable Updated Successfully!");
        setIsModalOpen(false);
        setEditingTimetableID(null);
      })
      .catch((error) => {
        console.error("Error updating timetable data:", error);
      });
  }

  return (
    <div>
      <h1 style={title}>View All Timetables Here</h1>
      <table>
        <thead>
          <tr>
            <th style={th}>Timetable ID</th>
            <th style={th}>Route Number</th>
            <th style={th}>Bus Number</th>
            <th style={th}>Start Time</th>
            <th style={th}>Stop Time</th>
            <th style={th}>Charge</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(timetables).map((timetableData) => (
            <tr>
              <td>{timetableData.TimetableID}</td>
              <td>{timetableData.RouteNumber}</td>
              <td>{timetableData.BusNumber}</td>
              <td>{timetableData.StartTime}</td>
              <td>{timetableData.StopTime}</td>
              <td>{timetableData.Charge}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    handleStatusChange(timetableData);
                  }}
                >
                  Mark as{" "}
                  {timetableData.Status == "Delayed"
                    ? "Not Delayed"
                    : "Delayed"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditClick(timetableData.TimetableID)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => openDeleteDialog(timetableData)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Delete confirmation dialog */}
      {isDeleteDialogOpen && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this timetable?</p>
          <button onClick={handleDelete} style={yesButtonStyle}>
            Yes
          </button>
          <button
            onClick={() => setIsDeleteDialogOpen(false)}
            style={noButtonStyle}
          >
            No
          </button>
        </div>
      )}

      {editingTimetableID && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          //style={customStyles} // Define custom styles for the modal
        >
          <h2>Edit Timetable</h2>
          <form>
            <div className="form-group">
              <label htmlFor="routeNumber">Route Number:</label>
              <input
                type="text"
                id="routeNumber"
                name="routeNumber"
                value={editForm.RouteNumber}
                onChange={(e) =>
                  setEditForm({ ...editForm, RouteNumber: e.target.value })
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="busNumber">Bus Number:</label>
              <input
                type="text"
                id="busNumber"
                name="busNumber"
                value={editForm.BusNumber}
                onChange={(e) =>
                  setEditForm({ ...editForm, BusNumber: e.target.value })
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="startTime">Start Time:</label>
              <input
                type="text"
                id="startTime"
                name="startTime"
                value={editForm.StartTime}
                onChange={(e) =>
                  setEditForm({ ...editForm, StartTime: e.target.value })
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="stopTime">Stop Time:</label>
              <input
                type="text"
                id="stopTime"
                name="stopTime"
                value={editForm.StopTime}
                onChange={(e) =>
                  setEditForm({ ...editForm, StopTime: e.target.value })
                }
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="charge">Charge:</label>
              <input
                type="text"
                id="charge"
                name="charge"
                value={editForm.Charge}
                onChange={(e) =>
                  setEditForm({ ...editForm, Charge: e.target.value })
                }
                className="form-control"
              />
            </div>

            <button className="btn btn-primary" onClick={handleEditSave}>
              Save
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}

const title = {
  textAlign: "center",
  color: "#1D4E89",
  padding: "10px",
  fontWeight: "bold",
  marginTop: "30px",
  marginBottom: "30px",
};

const th = {
  textAlign: "center",
  color: "#1D4E89",
  padding: "10px",
  fontWeight: "bold",
  marginTop: "30px",
  marginBottom: "30px",
};

const yesButtonStyle = {
  backgroundColor: "red",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const noButtonStyle = {
  backgroundColor: "gray",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ViewTimetable;
