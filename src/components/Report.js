import React from 'react'
import { Link } from 'react-router-dom'

function Report() {
  return (
    <div>
        <div className='row'>
            <div className='col-md-6'>    
                <Link to='/viewbusesbasedonstatus'><button>View Buses Based On Status</button></Link>   
                <Link to='/viewTimetablesBasedOnStatus'><button>View Timetables Based On Status</button></Link>                 
            </div>

            <div className='col-md-6'>               
            </div>
        </div>
       
    </div>
  )
}

export default Report