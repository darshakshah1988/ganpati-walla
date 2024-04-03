import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import DecorationListing from './DecorationListing';
import products from './decorations.json';

const Tab2: React.FC = () => {

  const productsActive = products.products.filter((e) => e.status === "active");

  return (
    <IonPage>
      <IonContent fullscreen>
          <DecorationListing products={productsActive} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
