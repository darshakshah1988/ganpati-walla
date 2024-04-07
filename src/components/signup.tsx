import { Network } from "@capacitor/network";
import { IonCheckbox } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";


const Signup: React.FC = () => {

    const baseUrl = "http://localhost:5001";
    // const baseUrl = "https://ganpati-node-service.onrender.com";
    
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isRegistered,setIsRegistered] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.detail.checked);  
      };   
    
    
    const handleSignup = async () => {
        
       if(!isChecked){
        alert("Please agree terms and conditions!!!");
        return;
       }
       if(password == "" || name == "" || email == "" || mobile == "" || city == "" || state == "" || pincode == "")
       {
        alert("Please insert all necessary data");
        return;
       }

       const signupSuccess = axios.post(baseUrl+"/vregister", {
        "username" : email,
        "password" : password,
        "subscriptionPlanId" : "",
        "email": email,
        "contact": mobile,
        "city": city,
        "state": state,
        "pincode": pincode,
        "consent": true
    }).catch((error) =>  console.log(error)).finally(() => {
        setIsRegistered(true);
    })
       

        
    }
    

    
    return (
        <>
            
            <div id="wrapper" style={{"background": "grey"}}>
            <form>
                <h1>Vendor Registration</h1>
                <input type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value) } />
                <input type="text" name="city" value={city} placeholder="City" onChange={(e) => setCity(e.target.value) } />
                <input type="text" name="state" value={state} placeholder="State" onChange={(e) => setState(e.target.value) } />
                <input type="text" name="pincode" value={pincode} placeholder="Pincode" onChange={(e) => setPincode(e.target.value) } />
                <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value) } />
                <input type="text" name="mobile" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value) } />
                <input type="text" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value) } />
                <br/>
                <IonCheckbox  checked={isChecked} onIonChange={handleCheckboxChange} /> I Agree to Vendors Terms and Conditions
                <br/><br/><br/>
                <input type="button" value="Create Account" onClick={handleSignup}/>
                
                <p><a href="/vendor-login">Login</a></p>
                <p><a href="/vregister" id="vendor-login">Register as Vendor</a></p>
                <div className="social-icons">

                    {isRegistered?"Registration Done !! You can now login with your email..!":""}
                </div>
            </form>
        </div>
            
        </>
                                )   
}

export default Signup;