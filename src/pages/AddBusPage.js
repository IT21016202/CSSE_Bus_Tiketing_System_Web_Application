import React from 'react'
import SideBar from '../components/SideBar'
import AddBus from '../components/AddBus'

const AddBusPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <AddBus/>
        </div>
    </div>
    
  )
}

export default AddBusPage