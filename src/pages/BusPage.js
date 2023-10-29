import React from 'react'
import SideBar from '../components/SideBar'
import Bus from '../components/Bus'

const BusPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <Bus/>
        </div>
    </div>
    
  )
}

export default BusPage