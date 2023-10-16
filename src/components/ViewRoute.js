import React, {useEffect, useState} from 'react'
import { getDatabase, ref, get, set } from 'firebase/database';

function ViewRoute() {
    
    const [routes, setRoutes] = useState({}) // array of objects

    useEffect(() => {    
        const database = getDatabase();
        const routeRef = ref(database, 'Route/');
        get(routeRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                const data = snapshot.val();
                setRoutes(data);
            }
            else{
                console.log('Route Data Not Found !');
            }
        })
        .catch((err)=>{
            console.error('Error retrieving route data:', err);
        })
    }, []);

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
    marginTop: '30px',  
    fontWeight: 'bold',
    marginBottom: '30px',
}       

const th = {
    padding: '10px',
    textAlign: 'center',
    background: '#1D4E89',
    color: 'white',
    borderRight: '2px solid white',
}   

const td = {
    padding: '10px',
    textAlign: 'center',
}

export default ViewRoute