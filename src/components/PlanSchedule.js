import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set, get, push } from 'firebase/database';

function PlanSchedule() {

    const [routeNumbers, setRouteNumbers] = useState([]) // array of objects
    const [busNumbers, setBusNumbers] = useState([]) // array of objects
    const [selectedBusNumber, setSelectedBusNumber] = useState('') 
    const [selectedRouteNumber, setSelectedRouteNumber] = useState('')
    //const [timetableID, setTimetableID] = useState('');
    const [startTime, setStartTime] = useState('');
    const [stopTime, setStopTime] = useState('');
    const [charge, setCharge] = useState('');
    const [strartlocation, setStrartlocation] = useState('');
    const [stoplocation, setStoplocation] = useState('');

    useEffect(() => {
        const database = getDatabase();
        const busRef = ref(database, 'Bus/');
        const routeRef = ref(database, 'Route/');

        //Getting bus numbers from DB
        get(busRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    // Initialize a new array and populate it
                    const busNumbersArray = Object.values(data).map((busData) => {
                        return busData.RegistrationNumber;
                    });
                    setBusNumbers(busNumbersArray);
                    console.log(busNumbersArray);
                }
                else {
                    console.log('Bus Data Not Found !');
                }
            })
            .catch((err) => {  
                console.error('Error retrieving bus data:', err);
            })

        //Getting route numbers from DB
        get(routeRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    // Initialize a new array and populate it
                    const routeNumbersArray = Object.values(data).map((routeData) => {
                        return routeData.RouteNumber;
                    });
                    setRouteNumbers(routeNumbersArray);
                    console.log(routeNumbersArray);
                }
                else {
                    console.log('Route Data Not Found !');
                }
            })
            .catch((err) => {
                console.error('Error retrieving route data:', err);
            })

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const database = getDatabase();
        const scheduleRef = ref(database, 'TimeTable/');
        const newScheduleRef = push(scheduleRef);
        const scheduleData = {
            TimetableID: newScheduleRef.key,
            RouteNumber: selectedRouteNumber,
            StartTime: startTime,
            StopTime: stopTime,
            BusNumber: selectedBusNumber,
            Charge: charge,
            StartLocation: strartlocation,
            StopLocation: stoplocation,
            Status: 'Not Delayed',
            CreatedAt: new Date().toString(),
            UpdatedAt: new Date().toString(),
        };
        set(newScheduleRef, scheduleData)
            .then(() => {
                console.log('Data set to DB');
                alert("Schedule Added Successfully!");
            })
            .catch((error) => {
                console.log(error);
            });
        //console.log(scheduleData)
    };

    const handleSelectBusNumber = (event) => {
        setSelectedBusNumber(event.target.value);
    }

    const handleSelectRouteNumber = (event) => {
        setSelectedRouteNumber(event.target.value);
    }

    return (
        <div>
            <h1 style={title}>Plan a Schedule</h1>
            
            <div style={inputDiv}>
                {/* <input style={inputBox} type="text" placeholder="Timetable ID" required onChange={(e)=>{setTimetableID(e.target.value)}}/> */}
                <input style={inputBox} type="text" placeholder="Start Time" required onChange={(e) => {setStartTime(e.target.value)}} />
                <input style={inputBox} type="text" placeholder="Stop Time" required onChange={(e) => {setStopTime(e.target.value)}} />

                <select style={inputBox} onChange={handleSelectBusNumber} required>
                    <option value="" disabled>--- Select Bus Number ---</option>
                    {busNumbers.map((busNumber, index) => (
                    <option key={index} value={busNumber}>
                        {busNumber}
                    </option>
                    ))}
                </select>

                <select style={inputBox} onChange={handleSelectRouteNumber} required>
                    <option value="" disabled>--- Select Route Number ---</option>
                    {routeNumbers.map((routeNumber, index) => (
                    <option key={index} value={routeNumber}>
                        {routeNumber}
                    </option>
                    ))}
                </select>

                <input style={inputBox} type="text" placeholder="Start Location" required onChange={(e) => {setStrartlocation(e.target.value)}} />
                <input style={inputBox} type="text" placeholder="Stop Location" required onChange={(e) => {setStoplocation(e.target.value)}} />
                <input style={inputBox} type="numbers" placeholder="Charge" onChange={(e) => {setCharge(e.target.value)}} />
            </div>

            <div style={btnDiv}>
                <button style={button} className='btn btn-success' onClick={handleSubmit}>Add Timetable</button>
            </div>
        </div>
    );
}

const title = {
    color: '#1D4E89',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '30px',
}

const inputDiv = {
    textAlign: 'center',
    marginTop: '30px',
}

const inputBox = {
    width: '40%',
    padding: '10px',
    margin: '10px',
    border: '1px solid #1D4E89',
    borderRadius: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
}

const btnDiv = {
    marginTop: '30px',
    textAlign: 'center',
}   

const button = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#1D4E89',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
}

export default PlanSchedule