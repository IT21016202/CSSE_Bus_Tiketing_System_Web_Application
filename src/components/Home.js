import React from 'react'
import HomeImg from '../images/home.png'

function Home() {
  return (  
    <div>
      <div style={title}>
        <h2>Hello ..... Welcome to Transist Token</h2>
        <img src={HomeImg} width='80%'/>
      </div>
    </div>
  )
}

const title = {
  textAlign: 'center',
  marginTop: '5%'
}


export default Home