import React from 'react'
import SideBar from '../components/SideBar'

const DayPassPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <h1>Not created !</h1>
        </div>
    </div>
  )
}

export default DayPassPage