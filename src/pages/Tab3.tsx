import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import './profile.css';
import { useEffect, useState } from 'react';

const Tab3: React.FC = () => {
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
    window.location.href="/login"
  }
  return (
    <IonPage>
      <header>
        <h1>User Profile</h1>
      </header>

      <main>
        <div className="profile">
          <img src="/user_profile.png" alt="Profile Picture" />
            
            <p>{userData.email}</p>
            
            <button onClick={handleLogout}>Logout</button>
        </div>
  
      </main>



    </IonPage>
  );
};

export default Tab3;
