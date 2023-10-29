import React from 'react'
import SideBar from '../components/SideBar'
import AddRoute from '../components/AddRoute'

const AddRoutePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <AddRoute/>
        </div>
    </div>
    
  )
}

export default AddRoutePage