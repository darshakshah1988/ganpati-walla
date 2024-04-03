import { IonContent, IonHeader, IonPage, IonToolbar, IonModal, IonButtons, IonTitle, IonButton, IonItem, IonInput } from '@ionic/react';
import './Tab1.css';
import ProductListing from './ProductListing';
import products from './products.json';


const Tab1: React.FC = () => {
  

  // const getProducts = async () => {
  //    await axios.get("http://localhost:3002/products").then(response => {
  //     setIdols(response.data)
  //     }).catch(error => {
  //       console.error(error);
  //     })
  // }
  
  
  const productsActive = products.products.filter((e) => e.status === "active");

    


  return (
    <IonPage>
      <IonContent fullscreen>
          <ProductListing products={productsActive} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
