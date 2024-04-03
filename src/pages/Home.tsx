import { IonContent, IonHeader, IonTabs, IonRouterOutlet, IonLabel, IonTabBar, IonTabButton,  IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './home.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import BurgerMenu from './BurgerMenu';
import { Network } from '@capacitor/network';
import { addCircleOutline, home, person  } from 'ionicons/icons';
import Login from '../components/Login';
import Offline from './Offline'
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Tab1 from './Tab1';
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Dashboard from './Dashboard'
import VDashboard from './VDashboard'
import Vhome from './Vhome';

const Home: React.FC = () => {

  
    const [scroller1, setScroller1] = useState([]);
    const [scroller2, setScroller2] = useState([]);
    const [scroller3, setScroller3] = useState([]);

    const [online, setOnline] = useState(true);
    const existLogin = window.localStorage.getItem("Login");

    const checkNetworkStatus = async () => {
      const status = await Network.getStatus();
      setOnline(status.connected);
    };

    const checkLoginIsValid = async () => {
     
       
        if(existLogin)
        {
            
        }
        else
        {
            window.location.href = "/login";
        }
    }

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
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://ganpati-node-service.onrender.com/products?limit=10&vendor=Ganpatiwala.com&random=true');
          setScroller1(response.data.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const fetchData1 = async () => {
        try {
          const response = await axios.get('https://ganpati-node-service.onrender.com/products?limit=10&vendor=Ganpatiwala.com&tags=Chaturbhuj&random=true');
          setScroller2(response.data.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const fetchData2 = async () => {
        try {
          const response = await axios.get('https://ganpati-node-service.onrender.com/decorations?limit=3&random=true');
          setScroller3(response.data.decorations);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
      fetchData1();
      fetchData2();
    }, []);

  

  return (
    <>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/offline">
            <Offline />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <img src="/idols.svg" className="icon" />
            <IonLabel>Idols</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <img src="/decoration_menu_icon.svg" className="icon" />
            <IonLabel>Decorations</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Me</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonReactRouter>
    </>
          );
};

          export default Home;
