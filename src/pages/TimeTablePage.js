import React from 'react'
import SideBar from '../components/SideBar'
import Timetable from '../components/Timetable'

const TimeTablePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <Timetable/>
        </div>
    </div>
    
  )
}

export default TimeTablePage