import React from 'react';
import RouteView from '../images/route-view.jpg';
import AddRoute from '../images/route-add.jpg';
import { Link } from 'react-router-dom';


const Route = () => {
    return (
        <div>
            <div>
            <p style={topic}>Manage Routes Here</p>
                <Link to='/viewroute'>
                <div style={imageRoute}>
                    <img src={RouteView} width={280} />
                    <h2 style={subtitle}>View Routes</h2>
                </div>
                </Link>

                <Link to='/addroute'>
                    <div style={imageAddRoute}>
                        <img src={AddRoute} width={280} />  
                        <h2 style={subtitle}>Add Routes</h2>
                    </div>  
                </Link>  
            </div>
        </div>
    );
};


const topic = {
    color: '#1D4E89',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '30px',
}

const imageRoute = {
    display: 'inline-block',
    margin: '5%',
    marginLeft: '15%'
}

const imageAddRoute = {
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

export default Route;
