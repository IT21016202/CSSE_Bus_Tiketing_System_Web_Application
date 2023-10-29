import React from 'react'
import SideBar from '../components/SideBar'
import AddTimetable from '../components/PlanSchedule'

const AddTimeTablePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <AddTimetable/>
        </div>
    </div>
    
  )
}

export default AddTimeTablePage