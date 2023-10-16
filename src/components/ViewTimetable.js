import React, {useEffect, useState} from 'react'
import { getDatabase, ref, get, update } from 'firebase/database';

function ViewTimetable() {

    const [timetables, setTimetables] = useState({}) // array of objects
    const [isChanged, setIsChanged] = useState(false) 
    const database = getDatabase();

    useEffect(() => {
        const timetableRef = ref(database, 'TimeTable/');
        get(timetableRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const data = snapshot.val();
                setTimetables(data);
            }
            else{
                console.log('Timetable Data Not Found !');
            }
        })
        .catch((err)=>{
            console.error('Error retrieving timetable data:', err);
        })
    }, []);

    function handleStatusChange(timetable) {
        const timetableRef = ref(database, 'TimeTable/' + timetable.TimetableID);
        const timetableData = {
            Status: timetable.Status == 'Not Delayed' ? 'Delayed' : 'Not Delayed',
            UpdatedAt: new Date().toString(),
        };

        update(timetableRef, timetableData)
        .then(() => {
            console.log('Data set to DB', timetableData);
            alert("Timetable Status Changed Successfully!");
        })
        .catch((error) => {
            console.log(error);
        }); 
        setIsChanged(!isChanged);
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
                <tr key={timetableData.TimetableID}>
                <td>{timetableData.TimetableID}</td>
                <td>{timetableData.RouteNumber}</td>
                <td>{timetableData.BusNumber}</td>
                <td>{timetableData.StartTime}</td>
                <td>{timetableData.StopTime}</td>
                <td>{timetableData.Charge}</td>
                <td><button className='btn btn-info' onClick={()=>{handleStatusChange(timetableData)}}>Mark as {timetableData.Status == 'Delayed' ? 'Not Delayed' : 'Delayed'}</button></td>
                <td><button className='btn btn-warning'>Edit</button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
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
    padding: '10px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '30px',
}

const th = {
    textAlign: 'center',
    color: '#1D4E89',
    padding: '10px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '30px',
}

export default ViewTimetable