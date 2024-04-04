
import { IonPage } from '@ionic/react';
import './profile.css';

const Vprofile: React.FC = () => {

    const handleLogout = () => {
        window.localStorage.setItem("Login",false);
        window.location.href="/vendor-login"
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
            <h2>Kautuk Shah</h2>
            <p>Xyz company ltd.</p>
            <p>Location: Mumbai, India</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
  
      </main>



    </IonPage>
)
};

export default Vprofile;