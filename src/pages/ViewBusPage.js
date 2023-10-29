import React from 'react'
import SideBar from '../components/SideBar'
import ViewBus from '../components/ViewBus'

const ViewBusPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <ViewBus/>
        </div>
    </div>
    
  )
}

export default ViewBusPage