import { IonContent, IonHeader, IonTabs, IonRouterOutlet, IonLabel, IonTabBar, IonTabButton,  IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './home.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Network } from '@capacitor/network';
import { addCircleOutline, home, person  } from 'ionicons/icons';
import Login from '../components/Login';
import Offline from './Offline'
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, Switch } from 'react-router';
import Tab1 from './Tab1';
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Dashboard from './Dashboard'
import Terms from './Terms';
import Vlogin from '../components/Vlogin';


const Home: React.FC = () => {
  const baseUrl = "http://localhost:5001";  
  // const baseUrl = "https://ganpati-node-service.onrender.com";
    
  
    
    const [online, setOnline] = useState(true);
    // const existLogin = window.localStorage.getItem("Login");

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
  
   

  

  return (
    <>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
          <Route exact={true} path="/tab1" render={() => <Tab1 />} />
          <Route exact={true} path="/tab2" render={() => <Tab2 />} />
          <Route exact={true} path="/home" render={() => <Dashboard />} />
          <Route exact={true} path="/login" render={() => <Login />} />            
          <Route exact={true} path="/offline" render={() => <Offline />} />
          <Route exact={true} path="/tab3" render={() => <Tab3 />} />
          <Route exact={true} path="/vendor-login" render={() => <Vlogin />}/>          
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <img src="/category.png" className="icon" />
            <IonLabel>Categories</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/vendor-login">
            <img src="/vendor.png" className="icon" />
            <IonLabel>Vendor</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>User</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonReactRouter>
    </>
          );
};

          export default Home;
