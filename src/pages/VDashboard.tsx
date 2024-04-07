import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './home.css';
import { addCircleOutline } from 'ionicons/icons';
import './vdashboard.css';
import { useEffect, useState } from 'react';




const VDashboard: React.FC = () => {



  const [userData, setUserData] = useState();
  const [counts, setCounts] = useState({
    "USER_POSTED_PHOTOS": 0,
    "USER_PLAN_PHOTOS_LIMIT": 12,
    "USER_PLAN_NAME":  "Basic"
  })
   
  
  
  const getUserData = () => {
    let d = window.localStorage.getItem("userData");
    const obj = JSON.parse(d);
    setUserData(obj);
    setCounts({
    "USER_POSTED_PHOTOS": 0,
    "USER_PLAN_PHOTOS_LIMIT": obj.subscriptionPlan.limit,
    "USER_PLAN_NAME":  obj.subscriptionPlan.plan
    })
  }

  useEffect(() => {
    getUserData();
    console.log(counts);
  },[getUserData])

  

  return (
    <>
    <IonPage>
      <header>
        Ganpatiwalla.com &nbsp;&nbsp;        
      </header>

      
        <div className="wrap">
        <div className="app">

            <div className="reminders">
            <div className="halfWidth">
                <div className="todo"><i className="fa fa-book"></i><span>{counts.USER_POSTED_PHOTOS}</span>
                <p>Current Photos</p>
                <div className="line"></div>
                <h4><a href="/agent-photos">VIEW</a></h4>
                </div>
                <div className="todo"><i className="fa fa-files-o"></i><span>{counts.USER_PLAN_PHOTOS_LIMIT}</span>
                <p>Plan Limit</p>
                <div className="line"></div>
                <h4><a href="/plans">Upgrade</a></h4>
                </div>
            </div>
            <div className="fullWidth">
                <div className="todo"><i className="fa fa-clock-o"></i><span>{counts.USER_PLAN_NAME}</span>
                <p>Plan</p>
                <div className="line"></div>
                <h4><a href="/agent-profile">VIEW</a></h4>
                </div>
            </div>
            </div>
            
            <div className="empty"></div>
        </div>
        {/* <div className="tabs">
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744912/feed_fmytit.svg"/></div>
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744911/cal_cexot2.svg"/></div>
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744913/msg_owdthq.svg"/></div>
            <div className="tab"><img src="https://res.cloudinary.com/prvnbist/image/upload/v1512744914/user_xszplu.svg"/></div>
        </div> */}
        </div>
      
      
      {/* <div id="menu">
        <a href="/vproducts">
        <img src="/idols.svg" />
        Products
        </a>
        <a href="/vplan">
        <img src="/decoration.svg" />
        Plan
        </a>
        <a href="/tab3">
        <img src="/profile.svg" />
        Profile
        </a>
      </div> */}
    
      
      
      
    </IonPage>
    </>
          );
};

          export default VDashboard;
