import React from 'react'
import SideBar from '../components/SideBar'
import Route from '../components/Route'

const RoutePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <Route/>
        </div>
    </div>
    
  )
}

export default RoutePage;