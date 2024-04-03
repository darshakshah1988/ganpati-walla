import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon } from '@ionic/react';
import ExploreContainer from './ExploreContainer';
import './Login.css';
import { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import BurgerMenu from '../pages/BurgerMenu';
import { Network } from '@capacitor/network';
import { logoGoogle, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import Home from '../pages/Home';
import Offline from '../pages/Offline';



const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [online, setOnline] = useState(true);
    const existLogin = window.localStorage.getItem("Login");
    const checkNetworkStatus = async () => {
        const status = await Network.getStatus();
        setOnline(status.connected);
    };

    useEffect(() => {
        const handler = Network.addListener('networkStatusChange', (status) => {
        setOnline(status.connected);
        });

        return () => {
        handler.remove();
        };
    }, []);

    

    useEffect(() => {
       
        checkNetworkStatus();
    }, []);
    
    
    const handleLogin = async () => {
        
       
        if(existLogin)
        {
            window.location.href = '/home'
        }
        else
        {
            const checkLogin = await axios.post('https://ganpati-node-service.onrender.com/login',{'username': username, 'password': password});
            if(checkLogin.data.data.active)
            {
                //window.localStorage.setItem("Login", true);
                window.location.href = '/home'
            }
            else
            {
                alert("Invalid Login !");
            }
        }
    }
    const validContent = () => {
        return (
            <div id="wrapper">
            <form>
                <h1>Sign In</h1>
                <input type="text" name="username" value={username} placeholder="User" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="button" value="Sign In" onClick={handleLogin}/>
                <p><a href="#" id="reset-link">Forgot password?</a></p>
                <p><a href="/register">create account</a></p>
                <p><a href="/vendor-login" id="vendor-login">Login as Vendor</a></p>
                <p id="other-sign">Find us on</p>
                <div className="social-icons">
                </div>
            </form>
        </div>
        )
    }

    useEffect(() => {
        //handleLogin();
    },[]);
    return (
        <>
            
        {online ? validContent():<Offline/>}
            
        </>
                                )   
}

export default Login;