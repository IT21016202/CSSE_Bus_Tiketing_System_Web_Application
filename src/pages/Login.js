import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

function Login() {
    const navigate = useNavigate(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [userData, setUserData] = useState([]);

    function handleLogin(e){
        e.preventDefault();
        navigate('/');
        // const auth = getAuth();
        // signInWithEmailAndPassword(auth, username, password)
        // .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     console.log(userCredential);
        //     const db = getDatabase();
        //     get(ref(db, 'users/' + user.uid)).then((snapshot) => {
        //         if (snapshot.exists()) {
        //             console.log(snapshot.val());
        //             const user = snapshot.val();
        //             //setUserData(user);
        //             localStorage.setItem('user-transport', user);
        //             navigate('/');
        //         } else {
        //             alert('No data available');
        //         }
        //     }).catch((error) => {
        //         console.error(error);
        //     });
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     alert(errorMessage);
        // });
    }
    
  return (
    <div style={mainDiv}>
        <h2 style={title}>Login Here !</h2><br/>
        <div>
            <input style={inputBox} type='email' placeholder='E-mail' required value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
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
    marginTop: '5%',
    marginLeft: '30%',
    marginRight: '30%',
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