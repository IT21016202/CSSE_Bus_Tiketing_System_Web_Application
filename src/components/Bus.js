import React from 'react'
import { Link } from "react-router-dom";

import ViewBus from '../images/bus-view.jpg';
import AddBus from '../images/bus-add.jpg';

const Bus = () => {
  return (
    <div>
        <div>
            <p style={topic}>Welcome to Transist Token</p>
                <Link to='/viewBus'>
                <div style={imageBus}>
                    <img src={ViewBus} width={320} />
                    <h2 style={subtitle}>View Buses</h2>
                </div>
                </Link>
                
                <Link to='/addBus'> 
                    <div style={imageAddBus}>
                        <img src={AddBus} width={350} />  
                        <h2 style={subtitle}>Add Buses</h2>
                    </div>  
                </Link>  
        </div>
    </div>
  )
}

const topic = {
    color: '#1D4E89',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '30px',
}

const imageBus = {
    display: 'inline-block',
    margin: '5%',
    marginLeft: '15%'
}

const imageAddBus = {
    width: '25%',
    display: 'inline-block',
    flex: 'right',
    margin: '5%',
    marginLeft: '15%'
}

const subtitle = {
    textAlign: 'center',
    color: '#1D4E89',
    fontWeight: 'bold',
    marginTop: '15px',
}

export default Bus;