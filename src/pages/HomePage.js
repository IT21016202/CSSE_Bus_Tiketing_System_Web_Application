import React from 'react'
import SideBar from '../components/SideBar'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <Home/>
        </div>
    </div>
    
  )
}

export default HomePage