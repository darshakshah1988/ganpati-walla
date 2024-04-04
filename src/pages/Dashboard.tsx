import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonMenu, IonModal, IonItem, IonInput, IonButtons, IonIcon  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './home.css';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import BurgerMenu from './BurgerMenu';
import { Network } from '@capacitor/network';
import { addCircleOutline } from 'ionicons/icons';

const Dashboard: React.FC = () => {

  
    const [scroller1, setScroller1] = useState([]);
    const [scroller2, setScroller2] = useState([]);
    const [scroller3, setScroller3] = useState([]);

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
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(process.env.SERVER_URL+'/products?limit=10&vendor=Ganpatiwala.com&random=true');
          setScroller1(response.data.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const fetchData1 = async () => {
        try {
          const response = await axios.get(process.env.SERVER_URL+'/products?limit=10&vendor=Ganpatiwala.com&tags=Chaturbhuj&random=true');
          setScroller2(response.data.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const fetchData2 = async () => {
        try {
          const response = await axios.get(process.env.SERVER_URL+'/decorations?limit=3&random=true');
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
    <IonPage>
      <header>
        {/* <span id="burger-menu" onClick={burgerMenuClick}>&#9776;</span> */}
          <IonMenuToggle>
            <IonButton></IonButton>
          </IonMenuToggle>
          
        Ganpatiwalla.com &nbsp;&nbsp;
        {online ? (
        <IonIcon icon={addCircleOutline} style={{ "color": "green", "background-color": "green"}} />
      ) : (
        <IonIcon icon={addCircleOutline} style={{ "color": "red", "background-color": "red"}} />
      )}
      </header>

      <div id="menu">
        <a href="/tab1">
          <img src="/idols.svg" />
          Idols
        </a>
        <a href="/tab2">
          <img src="/decoration.svg" />
          Decorations
        </a>
        <a href="/tab3">
        <img src="/profile.svg" />
          Profile
        </a>
      </div>

      <div className="container">
        <div id="banners">

          <img src="/banners/one.svg" alt="Banner 1" />
            <img src="/banners/Two.svg" alt="Banner 2" />
              <img src="/banners/Three.svg" alt="Banner 3" />
        </div>

        <div id="scroller1">
          {scroller1.map(product => (
           <div className="product-card" style={{ "aspect-ratio": "1/2" }}>
           <img src={product.image.src} alt={product.title} />
           <div className="card-content" style={{"font-size": "10pt"}}>
               <p style={{"text-wrap": "balance"}}>{product.title}</p>
               <p style={{"text-wrap": "balance"}}>Category: {product.tags}
               </p>
               <p style={{"text-wrap": "balance"}} className="card-price">{product.variants.price}</p>
           </div>
         </div>
            // You can display other product details as needed
          ))}
          <div className="product-card" style={{ "aspect-ratio": "1/2" }}>
           
           <a href="/tab1"><div className="card-content">
               <p style={{"text-wrap": "balance"}}>View All</p>
           </div>
           </a>
         </div>
          {/* <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div> */}

        </div>
        <div id="scroller1" className="scroller2">
        
          {/* <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div> */}
          {scroller2.map(product => (
           <div className="product-card" style={{ "aspect-ratio": "1/2" }}>
           <img src={product.image.src} alt={product.title} />
           <div className="card-content" style={{"font-size": "10pt"}}>
               <p style={{"text-wrap": "balance"}}>{product.title}</p>
               <p style={{"text-wrap": "balance"}}>Category: {product.tags}
               </p>
               <p style={{"text-wrap": "balance"}} className="card-price">{product.variants.price}</p>
           </div>
         </div>
            // You can display other product details as needed
          ))}
          <div className="product-card" style={{ "aspect-ratio": "1/2" }}>
           
           <a href="/tab1">
           <div className="card-content">
               <p style={{"text-wrap": "balance"}}>View All</p>
           </div>
           </a>
         </div>

        </div>
        <div id="scroller1" className="scroller3">
        
          {/* <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="https://placekitten.com/150/150" alt="Product Image" />
            <div className="card-content">
                <p>Product Name 1</p>
                <p>Category: Category 1</p>
                <p className="card-price">$19.99</p>
            </div>
          </div> */}
          {scroller3.map(product => (
           <div className="product-card" style={{ "aspect-ratio": "1/2" }}>
           <img src={product.image} alt={product.name} />
           <div className="card-content" style={{"font-size": "10pt"}}>
               <p style={{"text-wrap": "balance"}}>{product.name}</p>
               <p style={{"text-wrap": "balance"}}>Category: {product.tags}
               </p>
               <p style={{"text-wrap": "balance"}} className="card-price">{product.price}</p>
           </div>
         </div>
            // You can display other product details as needed
          ))}
          <div className="product-card" style={{ "aspect-ratio": "1/2" }}>
           
           <a href="/tab2">
            <div className="card-content">
               <p style={{"text-wrap": "balance"}}>View All</p>
           </div>
           </a>
         </div>

        </div>

        {/* <div id="scroller2">
        <p className="bolTitle">Trending Decorations:</p>
          <div className="card">Product A</div>
          <div className="card">Product B</div>
          <div className="card">Product C</div>

        </div> */}
      </div>
      
    </IonPage>
    </>
          );
};

          export default Dashboard;
