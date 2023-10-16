import React from 'react'

function NotFound() {
  return (
    <div>
        <h1 style={title}>Error 404 <br/> Page Not Found !</h1>
    </div>
  )
}

const title = {
    textAlign: 'center',
    margin: '15%',
    fontWeight: 'bold',
    fontSize: '60px'
}

export default NotFound