import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, pricetags, settings, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home';
import Login from './components/Login';
import Offline from './pages/Offline';
import Vlogin from './components/Vlogin';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './style.css';
import { Network } from '@capacitor/network';
import { useEffect, useState, useRef } from 'react';
import VDashboard from './pages/VDashboard'
import Vhome from './pages/Vhome';

setupIonicReact();

const App: React.FC = () => {
  
  return (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login" component={Login} />
          <Route exact path="/vendor/login" component={Vlogin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/agent-home" component={Vhome} />
        </IonRouterOutlet>
      </IonReactRouter>    
  </IonApp>
)};

export default App;
