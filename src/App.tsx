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
import Vphotos from './pages/Vphotos';
import Vprofile from './pages/Vprofile';
import Plans from './pages/Plans';
import Signup from './components/signup';
import uSignup from './components/signupuser';
import Splash from './pages/Splash';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

setupIonicReact();

const App: React.FC = () => {
  
  return (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/flash" />
          <Route exact={true} path="/login" render={() => <Login />} />
          <Route exact={true} path="/vendor-login" render={() => <Vlogin />}/>
          <Route exact={true} path="/home"  render={() => <Home />}/>
          <Route exact={true} path="/flash"  render={() => <Splash />}/>
          <Route exact={true} path="/agent-home"  render={() => <VDashboard />} />
          <Route exact={true} path="/agent-photos"  render={() => <Vphotos />}/>
          <Route exact={true} path="/agent-profile"  render={() => <Vprofile />} />
          <Route exact={true} path="/plans"  render={() => <Plans />} />
          <Route exact={true} path="/vregister"  render={() => <Signup />} />
          <Route exact={true} path="/register"  render={() => <uSignup />} />
          <Route exact={true} path="/tab3/terms"  render={() => <Terms />}/>
          <Route exact={true} path="/tab3/privacy"  render={() => <Privacy />}/>
        </IonRouterOutlet>
      </IonReactRouter>    
  </IonApp>
)};

export default App;
