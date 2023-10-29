import React from 'react'
import SideBar from '../components/SideBar'
import ViewBusesBasedOnStatus from '../components/ViewBusesBasedOnStatus'

const ViewBusStatusPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <ViewBusesBasedOnStatus/>
        </div>
    </div>
  )
}

export default ViewBusStatusPage