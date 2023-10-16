import React, {useState} from 'react'
import { getDatabase, ref, set } from 'firebase/database';
import Bus from '../images/bus.jpg'
import { render, fireEvent } from '@testing-library/react';

function AddBus() {
    const [registrationNumber, setRegistrationNumber] = useState('') 
    const [driverNumber, setDriverNumber] = useState('')
    const [driverName, setDriverName] = useState('')
    const [conductorNumber, setConductorNumber] = useState('')
    const [conductorName, setConductorName] = useState('')
    const [busType, setBusType] = useState('')
    const [busCapacity, setBusCapacity] = useState('')   

    const database = getDatabase();

    function handleSubmit(e) {
        e.preventDefault()



         //Add bus to realtime DB
        const busRef = ref(database, 'Bus/' + registrationNumber)
        const busData = {
            RegistrationNumber: registrationNumber,
            BusCapacity: busCapacity,
            BusType: busType, 
            ConductorName: conductorName, 
            ConductorNumber: conductorNumber,
            DriverName: driverName,
            DriverNumber :  driverNumber,
            Status: 'Active', // 'Active' or 'Inactive
            CreatedAt: new Date().toString(),
            UpdatedAt: new Date().toString(),
        };

        set(busRef, busData)
        .then(() => {
            console.log('Data set to DB');
            alert("Bus Added Successfully!");
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div>
        <div style={top}>
            <h1 style={add}>Add New Bus</h1>
            <img src={Bus} width={500} />
        </div>

        <div style={inputDiv}>
            <input style={inputBox} type="text" placeholder="Registration Number" required onChange={(e)=>{setRegistrationNumber(e.target.value)}}/>
            <input style={inputBox} type="text" placeholder="Driver Number" required onChange={(e)=>{setDriverNumber(e.target.value)}}/>
            <input style={inputBox} type="text" placeholder="Driver Name" required onChange={(e)=>{setDriverName(e.target.value)}}/>
            <input style={inputBox} type="text" placeholder="Conductor Number" required onChange={(e)=>{setConductorNumber(e.target.value)}}/>
            <input style={inputBox} type="text" placeholder="Conductor Name" required onChange={(e)=>{setConductorName(e.target.value)}}/>
            <input style={inputBox} type="text" placeholder="Bus Type" required onChange={(e)=>{setBusType(e.target.value)}}/>
            <input style={inputBox} type="number" placeholder="Bus Capacity" required onChange={(e)=>{setBusCapacity(e.target.value)}}/>
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
    marginTop: '30px',
}

const button = { 
    border: 'none',
    padding: '10px 20px',
    marginRight: '20px',
    borderRadius: '10px',
    fontWeight: 'bold',
    width: '15%',
}

export default AddBus