import React from 'react'
import SideBar from '../components/SideBar'
import ViewRoute from '../components/ViewRoute'

const ViewRoutePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <ViewRoute/>
        </div>
    </div>
    
  )
}

export default ViewRoutePage