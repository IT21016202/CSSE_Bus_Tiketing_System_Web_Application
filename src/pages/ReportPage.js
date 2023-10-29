import React from 'react'
import SideBar from '../components/SideBar'
import Report from '../components/Report'

const ReportPage = () => {
  return (
    <div className='row'>
        <div style={{display: 'inline', width: '20%', float: 'left'}}>
            <SideBar/>
        </div>
        <div style={{display: 'inline', width: '80%', float: 'left'}}>
            <Report/>
        </div>
    </div>
    
  )
}

export default ReportPage