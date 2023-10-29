import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const UserRegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    function registerUser(e){
        e.preventDefault();
        if(password === rePassword){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.uid);
                const db = getDatabase();
                set(ref(db, 'users/' + user.uid), {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    creditBalance: 0,
                    type: 'passenger'
                });
                alert('User Registered Successfully !');
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
        }else{
            alert('Passwords are not matching !');
        }
        //console.log('resgister user');
    }

  return (
    <div>
        <div style={mainDiv}>
        <h2 style={title}>Register Here !</h2><br/>
        <div>
            <input style={inputBox} type='email' placeholder='E-mail' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <input style={inputBox} type='text' placeholder='Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
            <input style={inputBox} type='text' placeholder='Phone Number' required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/><br/>
            <input style={inputBox} type='password' placeholder='Password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <input style={inputBox} type='password' placeholder='Re-Enter Password' required value={rePassword} onChange={(e)=>{setRePassword(e.target.value)}}/><br/>
            <button style={btn} className='btn btn-success' onClick={registerUser}>Register</button><br/><br/>
        </div>
    </div>
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
    marginBottom: '1%'
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



export default UserRegisterPage;