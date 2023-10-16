import React, {useEffect, useState} from 'react'
import { getDatabase, ref, get, update } from 'firebase/database';

function ViewBus() {

  const [buses, setBuses] = useState({})
  const [isChanged, setIsChanged] = useState(false) 
  const database = getDatabase();

  useEffect(() => {
    // Create a reference to the bus
    const busRef = ref(database, 'Bus/');

    // Retrieve data from the specific user's document
    get(busRef)
    .then((snapshot)=>{
        if(snapshot.exists()){
            // Data exists in the document
            const data = snapshot.val();
            setBuses(data);
        }
        else{
            console.log('Bus Data Not Found !');
        }
    })
    .catch((err)=>{
        console.error('Error retrieving bus data:', err);
    })
   

  }, [isChanged]);

  function handleStatusChange(bus) {
    //Add bus to realtime DB
    const busRef = ref(database, 'Bus/' + bus.RegistrationNumber);
    const busData = {
        Status: bus.Status == 'Active' ? 'Inactive' : 'Active',
        UpdatedAt: new Date().toString(),
    };

    update(busRef, busData)
    .then(() => {
        console.log('Data set to DB', busData);
        alert("Bus Status Changed Successfully!");
    })
    .catch((error) => {
        console.log(error);
    }); 
    setIsChanged(!isChanged);
  }
  

  return (
  <div>
      <h1 style={title}>All Bus Details Are Here !</h1>
      <table>
        <thead>
          <tr>
            <th style={th}>Registration Number</th>
            <th style={th}>Bus Type</th>
            <th style={th}>Bus Capacity</th>
            <th style={th}>Driver Name</th>
            <th style={th}>Driver Number</th>
            <th style={th}>Conductor Name</th>
            <th style={th}>Conductor Number</th> 
          </tr>
        </thead>
        <tbody>
        {Object.values(buses).map((busData) => (
            <tr key={busData.RegistrationNumber}>
              <td style={td}>{busData.RegistrationNumber}</td>
              <td style={td}>{busData.BusType}</td>
              <td style={td}>{busData.BusCapacity}</td>
              <td style={td}>{busData.DriverName}</td>
              <td style={td}>{busData.DriverNumber}</td>
              <td style={td}>{busData.ConductorName}</td>
              <td style={td}>{busData.ConductorNumber}</td>
              <td style={td}><button className='btn btn-info' onClick={() => handleStatusChange(busData)}>Mark as {busData.Status == 'Active' ? 'Inactive' : 'Active'}</button></td>
              <td style={td}><button className='btn btn-warning'>Edit</button></td>
              <td style={td}><button className='btn btn-danger'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
)
}

const title = {
    textAlign: 'center',
    color: '#1D4E89',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '30px',
}

const th = {
    padding: '12px 15px',
    textAlign: 'center',
    backgroundColor: '#1D4E89',
    color: 'white',
    borderRight: '2px solid white',
}

const td = {
    textAlign: 'center'
}

export default ViewBus