import React, {useState, useEffect} from 'react'
import { getDatabase, ref, orderByChild, equalTo, query, get} from 'firebase/database';

function ViewTimetablesBasedOnStatus() {

    const [status, setStatus] = useState('Delayed');
    const [timeTableArray, settimeTableArray] = useState([]) // array of objects

    useEffect(()=>{
        const database = getDatabase();
        const timeTableRef = ref(database, 'TimeTable/');
        const query1 = query(timeTableRef, orderByChild('Status'), equalTo(status));

        get(query1)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log(data)
                settimeTableArray(data);
                //Initialize a new array and populate it
                const timeTableArray = Object.values(data).map((timeTableData) => {
                    return timeTableData;
                });
            }
            else {
                console.log('Timetable Data Not Found !');
            }
        })
        .catch((err) => {
            console.error('Error retrieving timetable data:', err);
        })

    },[status])

    function handleSelectStatus(e) {
        setStatus(e.target.value);
    }

  return (
    <div>
    <div style={title}>View Timetables Based On Status</div>

    <label style={label}>Select Status Here</label>
        <select style={inputBox} onChange={handleSelectStatus} required>
                <option value="" disabled>--- Select Status ---</option>
                <option value="Delayed">Delayed</option>
                <option value="Not Delayed">Not Delayed</option>
        </select>

        <table>
            <thead>
                <tr>
                    <th style={th}>TimeTable ID</th>
                    <th style={th}>Route Number</th>
                    <th style={th}>Bus Number</th>
                    <th style={th}>Start Time</th>
                    <th style={th}>End Time</th>
                </tr>
            </thead>
            <tbody>
            {Object.values(timeTableArray).map((timeTableData) => (
                <tr key={timeTableData.TimetableID}>
                <td style={td}>{timeTableData.TimetableID}</td>
                <td style={td}>{timeTableData.RouteNumber}</td>
                <td style={td}>{timeTableData.BusNumber}</td>
                <td style={td}>{timeTableData.StartTime}</td>
                <td style={td}>{timeTableData.StopTime}</td>
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


export default ViewTimetablesBasedOnStatus