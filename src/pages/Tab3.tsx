
import './Tab3.css';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { IonRouterOutlet } from '@ionic/react';
import ProfileLinks from './ProfileLinks';



const Tab3: React.FC = () => {

  return (
    <IonRouterOutlet>
      <Route exact={true} path='/tab3' component={ProfileLinks} />
    </IonRouterOutlet>
  );
};

export default Tab3;
