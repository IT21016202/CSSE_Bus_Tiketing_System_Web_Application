import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, set, update, remove } from "firebase/database";
import Modal from "react-modal"; // Import React Modal

function ViewRoute() {
  const [routes, setRoutes] = useState({}); // array of objects
  const [editRoute, setEditRoute] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadData = () => {
    const database = getDatabase();
    const routeRef = ref(database, "Route/");
    get(routeRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setRoutes(data);
        } else {
          console.log("Route Data Not Found!");
        }
      })
      .catch((err) => {
        console.error("Error retrieving route data:", err);
      });
  };

  useEffect(() => {
    loadData();
  }, []); // Load data on component mount

  const handleDelete = (routeNumber) => {
    if (window.confirm("Are you sure you want to delete this route?")) {
      const database = getDatabase();
      const routeRef = ref(database, `Route/${routeNumber}`);
      remove(routeRef)
        .then(() => {
          console.log(`Route with RouteNumber ${routeNumber} deleted.`);
          // After deleting, reload the data
          loadData();
        })
        .catch((error) => {
          console.error("Error deleting route:", error);
        });
    }
  };

  const handleEdit = (routeData) => {
    setEditRoute(routeData);
    setIsModalOpen(true);
  };

  const handleEditSave = () => {
    const database = getDatabase();
    const routeRef = ref(database, `Route/${editRoute.RouteNumber}`); // Assuming 'RouteNumber' is unique
    const routeData = {
      RouteNumber: editRoute.RouteNumber,
      StartingPoint: editRoute.StartingPoint,
      Destination: editRoute.Destination,
      MidPoints: editRoute.MidPoints,
      Distance: editRoute.Distance,
      Duration: editRoute.Duration,
      Fare: editRoute.Fare,
    };

    update(routeRef, routeData)
      .then(() => {
        console.log(`Route with RouteNumber ${editRoute.RouteNumber} updated.`);
        setIsModalOpen(false); // Close the modal after successful update
        loadData(); // Reload the data to reflect the changes
      })
      .catch((error) => {
        console.error("Error updating route:", error);
      });
  };

  return (
    <div>
      <h1 style={title}>View All Bus Routes Here</h1>
      <table>
        <thead>
          <tr>
            <th style={th}>Route Number</th>
            <th style={th}>Starting Point</th>
            <th style={th}>Destination</th>
            <th style={th}>Mid Points</th>
            <th style={th}>Distance</th>
            <th style={th}>Duration</th>
            <th style={th}>Fare</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(routes).map((routeData) => (
            <tr key={routeData.RouteNumber}>
              <td style={td}>{routeData.RouteNumber}</td>
              <td style={td}>{routeData.StartingPoint}</td>
              <td style={td}>{routeData.MidPoints}</td>
              <td style={td}>{routeData.Destination}</td>
              <td style={td}>{routeData.Distance}</td>
              <td style={td}>{routeData.Duration}</td>
              <td style={td}>{routeData.Fare}</td>
              <td style={td}>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(routeData)}
                >
                  Edit
                </button>
              </td>
              <td style={td}>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(routeData.RoteID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "400px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <h2>Edit Route</h2>
        <form>
          <div className="form-group">
            <label htmlFor="routeNumber">Route Number:</label>
            <input
              type="text"
              id="routeNumber"
              name="routeNumber"
              value={editRoute.RouteNumber}
              onChange={(e) =>
                setEditRoute({ ...editRoute, RouteNumber: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="startingPoint">Starting Point:</label>
            <input
              type="text"
              id="startingPoint"
              name="startingPoint"
              value={editRoute.StartingPoint}
              onChange={(e) =>
                setEditRoute({ ...editRoute, StartingPoint: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={editRoute.Destination}
              onChange={(e) =>
                setEditRoute({ ...editRoute, Destination: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="midPoints">Mid Points:</label>
            <input
              type="text"
              id="midPoints"
              name="midPoints"
              value={editRoute.MidPoints}
              onChange={(e) =>
                setEditRoute({ ...editRoute, MidPoints: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="distance">Distance:</label>
            <input
              type="text"
              id="distance"
              name="distance"
              value={editRoute.Distance}
              onChange={(e) =>
                setEditRoute({ ...editRoute, Distance: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={editRoute.Duration}
              onChange={(e) =>
                setEditRoute({ ...editRoute, Duration: e.target.value })
              }
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fare">Fare:</label>
            <input
              type="text"
              id="fare"
              name="fare"
              value={editRoute.Fare}
              onChange={(e) =>
                setEditRoute({ ...editRoute, Fare: e.target.value })
              }
              className="form-control"
            />
          </div>

          <button className="btn btn-primary" onClick={handleEditSave}>
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}

const title = {
  textAlign: "center",
  color: "#1D4E89",
  marginTop: "30px",
  fontWeight: "bold",
  marginBottom: "30px",
};

const th = {
  padding: "10px",
  textAlign: "center",
  background: "#1D4E89",
  color: "white",
  borderRight: "2px solid white",
};

const td = {
  padding: "10px",
  textAlign: "center",
};

export default ViewRoute;
