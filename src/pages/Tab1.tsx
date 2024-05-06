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

  
  const toggleFilters = () => {
    const filters = document.getElementById("filters");
    if (filters.style.display === "block") {
      filters.style.display = "none";
    } else {
      filters.style.display = "block";
    }
  }


  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="productpage-title">
        <h1 className="title">Idols</h1>
        <button className="filter-icon" onClick={toggleFilters}>Filter</button>
      </div>

      <div id="filters" className="filters">
        <div className="filter-option">
          <h2>Category</h2>
          <div className="filter-content">
              <label><input type="checkbox" /> Ashtvinayak</label>
              <label><input type="checkbox" /> DagduSheth</label>
              <label><input type="checkbox" /> Paper</label>
          </div>
        </div>
        <div className="filter-option">
          <h2>Price</h2>
          <div className="filter-content">
              <label><input type="checkbox" /> $0 - $50</label>
              <label><input type="checkbox" /> $51 - $100</label>
              <label><input type="checkbox" /> $101 - $200</label>
          </div>
        </div>
        <button onClick={toggleFilters}>Apply</button>
       
      </div>

      <div className="product-page-product-listing">
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
            <div className="product-title">Product Name 1</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
            <div className="product-title">Product Name 2</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
            <div className="product-title">Product Name 1</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
            <div className="product-title">Product Name 2</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
            <div className="product-title">Product Name 1</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
            <div className="product-title">Product Name 2</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
            <div className="product-title">Product Name 1</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
            <div className="product-title">Product Name 2</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 1" />
            <div className="product-title">Product Name 1</div>
          </div>
          <div className="product">
            <img src="https://i.pinimg.com/474x/df/7a/c3/df7ac32ca67a39a812bbe7b7b69f1a28.jpg" alt="Product 2" />
            <div className="product-title">Product Name 2</div>
          </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
