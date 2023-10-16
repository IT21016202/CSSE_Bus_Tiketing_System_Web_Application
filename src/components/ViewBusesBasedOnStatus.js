import React, { useEffect, useState } from 'react'
import { getDatabase, ref, orderByChild, equalTo, query, get} from 'firebase/database';

function ViewBusesBasedOnStatus() {

    const [status, setStatus] = useState('Active');
    const [busArray, setBusArray] = useState([]) // array of objects

    useEffect(() => {
        const database = getDatabase();
        const busRef = ref(database, 'Bus/');
        const query1 = query(busRef, orderByChild('Status'), equalTo(status));

        get(query1)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log(data)
                setBusArray(data);
                //Initialize a new array and populate it
                const busArray = Object.values(data).map((busData) => {
                    return busData;
                });
            }
            else {
                console.log('Bus Data Not Found !');
            }
        })
        .catch((err) => {
            console.error('Error retrieving bus data:', err);
        })

    }, [status]);

    function handleSelectStatus(e) {
        setStatus(e.target.value);
    }


  return (
    <div>
        <h1 style={title}>View Buses Based On Status</h1>

        <label style={label}>Select Status Here</label>
        <select style={inputBox} onChange={handleSelectStatus} required>
                    <option value="" disabled>--- Select Status ---</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
        </select>

        <table>
            <thead>
                <tr>
                    <th style={th}>Registration Number</th>
                    <th style={th}>Bus Type</th>
                    <th style={th}>Driver Name</th>
                    <th style={th}>Routes</th>
                </tr>
            </thead>
            <tbody>
            {Object.values(busArray).map((busData) => (
                <tr key={busData.RegistrationNumber}>
                <td style={td}>{busData.RegistrationNumber}</td>
                <td style={td}>{busData.BusType}</td>
                <td style={td}>{busData.DriverName}</td>
                <td style={td}><button className='btn btn-info'>View Assigned Routes</button></td>
                <td style={td}><button className='btn btn-info'>Full Details</button></td>
                </tr>
            ))}
            </tbody>
        </table>

    </div>
  )
}

const title = {
    color: '#1D4E89',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '30px',
}

const  label = {
    color: '#1D4E89',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginRight: '10px',
}

const inputBox = {
    width: '20%',
    padding: '10px',
    margin: '10px',
    border: '1px solid #1D4E89',
    borderRadius: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    marginTop: '40px',
    marginBottom: '40px',
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


export default ViewBusesBasedOnStatus