import React from 'react'
import { Link } from 'react-router-dom'

function Report() {
  return (
    <div>
        <div className='row'>
          <h1 style={title}>Reports</h1>
            <div className='col-md-6'>    
                <Link to='/viewBusStatus'><button>View Buses Based On Status</button></Link>   
                <Link to='/viewTimeTableStatus'><button>View Timetables Based On Status</button></Link>                 
            </div>

            <div className='col-md-6'>               
            </div>
        </div>
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

export default Report