import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();
    const user = localStorage.getItem('user-transport');

    function handleLogOut(){
        localStorage.clear('user-transport');
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-light" style={{backgroundColor: "#1D4E89"}}>
        <a className="navbar-brand" >
            <Link to='/'>
            <   img src={Logo} style={logo} width="30" height="30"/>
            </Link>
        </a>
        <div>
            {!user && (
                <Link to='/login'><button style={button}>Login</button></Link>
            )} 
            {user &&
                <button style={button} onClick={handleLogOut}>Log Out</button>
            } 
        </div>
        </nav>
    );
}

const logo = {
    height: '50px',
    width: '50px',
    marginLeft: '20px',
    borderRadius: '30px',
}

const button = {
    backgroundColor: 'white',  
    border: 'none',
    color: 'black',
    padding: '10px 20px',
    marginRight: '20px',
    borderRadius: '10px',
    fontWeight: 'bold',
}

export default Navbar;


// xcode 
// xvm