import React from 'react'
import SideBar from '../components/SideBar'
import ViewTimetablesBasedOnStatus from '../components/ViewTimetablesBasedOnStatus'

const ViewTimeTableStatusPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <ViewTimetablesBasedOnStatus/>
        </div>
    </div>
  )
}

export default ViewTimeTableStatusPage