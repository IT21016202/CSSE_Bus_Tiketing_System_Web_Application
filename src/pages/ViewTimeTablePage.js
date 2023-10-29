import React from 'react'
import SideBar from '../components/SideBar'
import ViewTimetable from '../components/ViewTimetable'

const ViewTimeTablePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <ViewTimetable/>
        </div>
    </div>
    
  )
}

export default ViewTimeTablePage