
import { IonPage } from '@ionic/react';
import './profile.css';
import { useEffect, useState } from 'react';

const Vprofile: React.FC = () => {
    const [userData,setUserData] = useState({
      "name": "darshak",
      "email": "iamdarshak88@gmail.com",
      "mobile": "9998836724",
      "location": "naroda, Ahmedabad, Gujarat"
    });

    const setUserProfile = (q: any) => {
      const data = {
        "name": q.name,
        "email": q.email,
        "mobile": q.mobile,
        "location": q.city +","+ q.state +"-"+ q.pincode
      }
      console.log(data);
      setUserData(data);
    }

    useEffect(()=> {
      var u = window.localStorage.getItem("userData");
      const q = JSON.parse(u);
      console.log(q);
      setUserProfile(q);
    },[]);

    const handleLogout = () => {
        window.localStorage.setItem("userData","NULL");
        window.location.href="/vendor-login";
      }

return (
    <IonPage>
      <header>
        <h1>User Profile</h1>
        
      </header>
      <a href="/agent-home" style={{"marginTop": "-200px"}}>Back to Home</a>
    
      <main>
        <div className="profile">
          <img src="/user_profile.png" alt="Profile Picture" />
           
            <h5>Email:{userData.email}</h5>
            <h5>Location: {userData.location}</h5>
            <button onClick={handleLogout}>Logout</button>
        </div>
  
      </main>



    </IonPage>
)
};

export default Vprofile;