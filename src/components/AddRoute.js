import React,{useState} from 'react'
import BusRoute from '../images/route.jpg'
import { getDatabase, ref, set } from 'firebase/database';

function AddRoute() {

    const database = getDatabase();

    const [routeNumber, setRouteNumber] = useState('')
    const [startingPoint, setStartingPoint] = useState('')
    const [destination, setDestination] = useState('')
    const [midPoints, setMidPoints] = useState('')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [fare, setFare] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        //Add route to realtime DB
        const routeRef = ref(database, 'Route/' + routeNumber)
        const routeData = {
            RouteNumber: routeNumber,
            StartingPoint: startingPoint,
            Destination: destination,
            MidPoints: midPoints,
            Distance: distance,
            Duration: duration,
            Fare: fare,
            CreatedAt: new Date().toString(),
            UpdatedAt: new Date().toString(),
        };

        set(routeRef, routeData)
        .then(() => {
            console.log('Data set to DB');
            alert("Route Added Successfully!");
        })
        .catch((error) => {
            console.log(error);
        });
    }
   
  return (
    <div>
        <div style={top}> 
        <h1 style={add}>Add New Route</h1>
        <img style={route} src={BusRoute} width={250} />
        </div>

        <div style={inputDiv}>
            <input style={inputBox} type="text" placeholder="Route Number" onChange={(e)=>{setRouteNumber(e.target.value)}}/>
            <input style={inputBox} type="text" placeholder="Starting Point" onChange={(e) => {setStartingPoint(e.target.value)}} />
            <input style={inputBox} type="text" placeholder="Destination" onChange={(e) => {setDestination(e.target.value)}} />
            <input style={inputBox} type="text" placeholder="Mid Points (if any)" onChange={(e) => {setMidPoints(e.target.value)}} />
            <input style={inputBox} type="text" placeholder="Distance" onChange={(e) => {setDistance(e.target.value)}} />
            <input style={inputBox} type="text" placeholder="Aproximate Duration" onChange={(e) => {setDuration(e.target.value)}} />
            <input style={inputBox} type="number" placeholder="Fare" onChange={(e) => {setFare(e.target.value)}} />
        </div>

        <div style={btnDiv}>
            <button style={button} className='btn btn-success' onClick={handleSubmit}>Register</button>
        </div>
    </div>
  )
}

const top = {
    textAlign: 'center',
    marginTop: '50px',
}

const add = {
    color: '#1D4E89',
    fontWeight: 'bold',
}  

const route = {
    marginTop: '20px',
}

const  inputDiv = {
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
    marginTop: '30px',
}

const button = {
    border: 'none',
    padding: '10px 20px',
    marginRight: '20px',
    borderRadius: '10px',
    fontWeight: 'bold',
}

export default AddRoute