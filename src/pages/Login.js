import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();
        const user = {username, password};
        console.log(user);
        const res = localStorage.setItem('user-transport', JSON.stringify(user));
        navigate('/');
    }
  return (
    <div style={mainDiv}>
        <h2 style={title}>Login Here !</h2><br/>
        <div>
            <input style={inputBox} type='email' placeholder='E-malil' required value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
            <input style={inputBox} type='password' placeholder='Password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button style={btn} className='btn btn-success' onClick={handleLogin}>Login</button><br/><br/>
        </div>
        <p style={dont}>Frogot Password ?</p>
    </div>
  )
}

const mainDiv = {
    padding: '50px',
    textAlign: 'center',
    marginTop: '10%',
    marginLeft: '15%',
    marginRight: '35%',
    borderRadius: '15px',
    backgroundColor: '#1D4E89',
}

const title = {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white'
}

const inputBox = {
    width: '80%',
    padding: '10px',
    margin: '10px',
    border: '1px solid #1D4E89',
    borderRadius: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
}

const btn = {
    marginTop: '20px',
    marginBottom: '20px'
}

const dont = {
    color: 'white',
    fontWeight: 'bold'
}

export default Login