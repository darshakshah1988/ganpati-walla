import { Network } from "@capacitor/network";
import { IonCheckbox } from "@ionic/react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import './vendorRegistration.css';
import './overlay.css';

const Signup: React.FC = () => {

    const baseUrl = "http://localhost:5001";
    // const baseUrl = "https://ganpati-node-service.onrender.com";
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [mobileno,setMobileno] = useState('');
    const [emailId, setEmailId] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [documentProof,setDocumentProof] = useState(''); 
    const [isChecked, setIsChecked] = useState(false);
    const [isRegistered,setIsRegistered] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = Array.from({ length: 4 }, (_, i) => i + 1);
    const inputRefs = inputs.map(() => useRef(null));

    const handleCheckboxChange = (e) => {
        setIsChecked(e.detail.checked);  
      };
    
      const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
      };

    

      const focusNextInput = (index) => {
        if (index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        } else if (index === inputRefs.length - 1) {
          console.log('Submit OTP:', otp.join(''));
        }
      };
    
      const focusPrevInput = (index) => {
        if (index > 0) {
          inputRefs[index - 1].current.focus();
        }
      };

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        // You can add additional logic here, like checking for numeric input
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);
        console.log(newOtp);

        if (value.length === 1) {
          focusNextInput(index);
        } else if (value.length === 0) {
          focusPrevInput(index);
        }

        
      };
      
    const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
        console.log(file);
        const proofdoc = URL.createObjectURL(file);
        setDocumentProof(proofdoc);
    }
    };
    const otpValue = otp.join('');
    const verifyotp = async() =>{
        const verification = axios.post(baseUrl+'/verify-mobile',{"mobile": mobileno, "otp": otpValue}).catch((error => console.log(error))).finally((e) => {
            console.log(e);
        })
    }
    
    const handleSignup = async () => {
        
       if(!isChecked){
        alert("Please agree terms and conditions!!!");
        return;
       }
       if(firstname == "" || lastname == "" || address1 == "" || address2 == "" || emailId == "" || mobileno == "" || city == "" || state == "" || pincode == "")
       {
        alert("Please insert all necessary data");
        return;
       }

       toggleOverlay();

    //    const signupSuccess = axios.post(baseUrl+"/vregister", {
    //     "firstname" : firstname,
    //     "lastname" : lastname,
    //     "address": address1+", "+address2,
    //     "subscriptionPlanId" : "",
    //     "email": emailId,
    //     "contact": mobile,
    //     "city": city,
    //     "state": state,
    //     "pincode": pincode,
    //     "consent": true,
    //     "document": documentProof
    // }).catch((error) =>  console.log(error)).finally(() => {
    //     setIsRegistered(true);
    // })
       

        
    }

    const Overlay = ({ onClose }) => {
        return (
          <div className="overlay">
            <div className="overlay-content">
              <h2>Verify You Mobile</h2>


              <div className="otp-container">
                    {inputs.map((_, index) => (
                        <input
                        key={index}
                        ref={inputRefs[index]}
                        type="text"
                        maxLength={1}
                        value={otp[index]}
                        onChange={(e) => handleInputChange(e, index)}
                        className="otp-input"
                        />
                    ))}
                </div>
              


              <center><button style={{background:"orange",width: "120px", height: "30px"}} onClick={verifyotp}>Verify</button></center>
            </div>
          </div>
        );
      };
    
      
    
    return (
        <>
            
            {/* <div id="wrapper" style={{"background": "grey"}}>
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
                <div classNameName="social-icons">

                    {isRegistered?"Registration Done !! You can now login with your email..!":""}
                </div>
            </form>
        </div> */}

        <div className="v1_38">
        <span className="v1_39">Vendor Registeration</span>
        <div className="v1_58">
            <div className="v1_44"></div>
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}  className="v1_46" placeholder="First Name*" />
        </div>
        <div className="v1_59">
            <div className="v1_45"></div>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="v1_46" placeholder="Last Name*" />
        </div>
        <div className="v1_60">
            <div className="v1_48"></div>
            <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} className="v1_46" placeholder="Address1*" />
        </div>
        <div className="v1_61">
            <div className="v1_50"></div>
            <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} className="v1_46" placeholder="Address2*" />
        </div>
        <div className="v1_62">
            <div className="v1_52"></div>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="v1_46" placeholder="state*" />
        </div>
        <div className="v1_63">
            <div className="v1_54"></div>
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} className="v1_46" placeholder="Pincode*" />
        </div>
        <div className="v1_168">
            <div className="v1_169"></div>
            <input type="text" value={mobileno} onChange={(e) => setMobileno(e.target.value)} className="v1_46" placeholder="Mobile No*" />
        </div>
        <div className="v1_175"></div>
        <div className="v1_171">
            <div className="v1_172"></div>
            <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="v1_46" placeholder="Email Id*" />
        </div>
        <div className="v1_56"></div>
        <div className="v1_167">
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="v1_46" placeholder="City*"/>
            <div className="name"></div>
        </div>
        <div className="v1_179">
            <p>Upload your business Document:</p>
            <input type="file" onChange={handleImageInputChange}/>
            <div className="name"></div>
        </div>
        <div className="v1_1791">
            <p>Upload your PAN card:</p>
            <input type="file" onChange={handleImageInputChange}/>
            <div className="name"></div>
        </div>
        <div className="v1_180">
        <IonCheckbox  checked={isChecked} onIonChange={handleCheckboxChange} /> I Agree to Vendors Terms and Conditions
        </div>
        
        <a href="/login"><span className="v1_40">Login As a User</span></a>
        <button className="v1_41" onClick={handleSignup}>Create Account</button>
        {isRegistered?"Registration Done !! You can now login with your email..!":""}
        {showOverlay && <Overlay onClose={toggleOverlay} />}
        </div>

            
        </>
                                )   
}

export default Signup;