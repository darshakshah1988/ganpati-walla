import { IonContent, IonHeader, IonTabs, IonRouterOutlet, IonLabel, IonTabBar, IonTabButton,  IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Offline from './Offline';
import VDashboard from './VDashboard';


const Vhome: React.FC = () => {

  
    

  

  return (
    <>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
           
          </Route>
          <Route exact path="/tab2">
           
          </Route>
          <Route exact path="/tab3">
           
          </Route>
          <Route exact path="/agent-home">
            <VDashboard />
          </Route>
          <Route exact path="/agent">
            
          </Route>
          <Route exact path="/login">
            
          </Route>
          <Route exact path="/offline">
            <Offline />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/agent-home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <img src="/idols.svg" className="icon" />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <img src="/decoration_menu_icon.svg" className="icon" />
            <IonLabel>Plan</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonReactRouter>
    </>
          );
};

          export default Vhome;
