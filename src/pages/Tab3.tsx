import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import './profile.css';
const Tab3: React.FC = () => {

  const handleLogout = () => {
    window.localStorage.setItem("Login",false);
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
            <h2>Kautuk Shah</h2>
            <p>Xyz company ltd.</p>
            <p>Location: Mumbai, India</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
  
      </main>



    </IonPage>
  );
};

export default Tab3;
