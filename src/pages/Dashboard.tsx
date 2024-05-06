import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './home.css';
import './ionmodal.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import BurgerMenu from './BurgerMenu';
import { Network } from '@capacitor/network';
import { addCircleOutline } from 'ionicons/icons';

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const baseUrl = "http://localhost:5001";

    // const baseUrl = "https://ganpati-node-service.onrender.com";
    

    const [online, setOnline] = useState(true);

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
  
    
    const modal = useRef<HTMLIonModalElement>(null);
    const openSearch = () => {
      setIsOpen(true);
    }
    const searchQuery = () => {
      setTimeout(() => {
        setIsOpen(false);
      },3000);
    }

    const openTab2 = () => {
      window.open("/tab2");
    }

    useEffect(() => {
      searchQuery();
    },[])
    

  return (
    <>
    <IonPage>
    <header className="header">
      <div className="logo">Ganpatiwalla</div>
      <div className="icons">
        <a expand="block" onClick={() => openSearch()} className="icon"><img src="/search.png" alt="Cart" /></a>
        <a href="#" className="icon"><img src="/cart.png" alt="Cart" /></a>
      </div>
    </header>     

      <div className="container">
        <div id="banners">
          <img src="/banners/one.svg" alt="Banner 1" />
          <img src="/banners/Two.svg" alt="Banner 2" />
          <img src="/banners/Three.svg" alt="Banner 3" />
        </div>

        <div className="card-row">
          <div className="card">
            <img src="/card-small.png" alt="Image 1" />
            <div className="card-content">
              <h3>Idols</h3>
              {/* <p>Text for Card 1</p> */}
            </div>
          </div>
          <div className="card">
            <img src="/card-small2.png" alt="Image 2" />
            <div className="card-content">
              <h3>Unique Idols</h3>
              {/* <p>Text for Card 2</p> */}
            </div>
          </div>
        </div>
        
        <div className="product-listing">
          <div className="section-header">
            <h2 className="section-title">Top Idols</h2>
            <button className="view-all-btn" onClick={openTab2}>View All</button>
          </div>
          <div className="product-container">
            <div className="product">
              <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
              <div className="product-name">Product Name 1</div>
            </div>
            <div className="product">
              <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
              <div className="product-name">Product Name 2</div>
            </div>
          </div>
        </div>
        <div className="product-listing">
          <div className="section-header">
            <h2 className="section-title">Unique Idols</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="product-container">
            <div className="product">
              <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
              <div className="product-name">Product Name 1</div>
            </div>
            <div className="product">
              <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
              <div className="product-name">Product Name 2</div>
            </div>
          </div>
        </div>

        
      </div>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Search</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            Search <IonInput type="text" />
            <IonButton onClick={() => searchQuery()}>Search</IonButton>
          </IonContent>
        </IonModal>
      
    </IonPage>
    </>
          );
};

          export default Dashboard;
