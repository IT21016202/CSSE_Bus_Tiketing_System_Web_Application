import React from 'react';
import ViewTimetable from '../images/view-timetables.jpg';
import AddTimetable from '../images/add-timetables.jpg';
import { Link } from 'react-router-dom';

function Timetable() {
    return (
        <div>
            <p style={topic}>Manage Timetables Here</p>
                <Link to='/viewtimetable'>
                <div style={imageTimeTable}>
                    <img src={ViewTimetable} width={270} />
                    <h2 style={subtitle}>View Schedules</h2>
                </div>
                </Link>

                <Link to='/planschedule'>
                <div style={imageAddTimeTable}>
                    <img src={AddTimetable} width={350} />  
                    <h2 style={subtitle}>Plan Schedules</h2>
                </div>    
                </Link>
        </div>
    );
}

const topic = {
    color: '#1D4E89',
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    marginTop: '30px',
}

const imageTimeTable = {
    display: 'inline-block',
    margin: '5%',
    marginLeft: '15%'
}

const imageAddTimeTable = {
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


export default Timetable;
