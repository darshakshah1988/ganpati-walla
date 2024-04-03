import './Vlogin.css';
import { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';

const Vlogin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const existLogin = window.localStorage.getItem("vLogin");
    const handleAgentLogin = async () => {
        
       
        if(existLogin)
        {
            window.location.href = '/agent-home'
        }
        else
        {
            const checkLogin = await axios.post('http://localhost:5001/vlogin',{'username': username, 'password': password, 'agent': true});
            console.log(checkLogin);
            if(checkLogin.data.data.active)
            {
                window.localStorage.setItem("vLogin", true);
                window.location.href = '/agent-home'
            }
            else
            {
                alert("Invalid Login !");
            }
        }
    }
    return (
        <>
        <div className="login-container">
            <div className="login-box">
            <h3>Vendor Login</h3>
            <div className="input-container">
                <label>Username</label>
                <input type="text" value={username} id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="input-container">
                <label>password</label>
                <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="input-container">
                <button type="submit" onClick={handleAgentLogin}>LOGIN</button>
            </div>
            <p><a href="/vregister">Create Account</a></p>
            <p><a href="/login">Login as User</a></p>
            </div>
        </div>
        </>
    )
};

export default Vlogin;