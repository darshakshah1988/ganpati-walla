import React, { useRef, useState } from 'react'
import axios from 'axios'
import { IonButton } from '@ionic/react';
import Modal from './Modal';



const ProductList = ({ product, onButtonClick }) => {

    
    return (
        <div className="product" key={product.id}>
            <img src={product.image.src} alt={product.title} />
            <div className="product-info">
            <div className="product-name">{product.title}</div>
            {/* <div className="product-price">{product.variants[0].price}</div> */}
            <div className="product-type">Type: {product.tags}</div>
            <button id="open-modal" className="Mybutton" expand="block" onClick={onButtonClick}><img src='/whatsapp.svg' style={{"width": "15px", "height": "15px"}} />Send Inquiry</button>
            </div>
        </div>
    )
}



const ProductListing = ({ products }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<string>('');

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );
    const handleButtonClick = (productName: string) => {
        setSelectedProduct(productName);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setSelectedProduct('');
        setModalOpen(false);
      };
    return (
        <div key={products.id}>
            {products.map((product) => (
                <ProductList key={product.id} product={product} onButtonClick={() => handleButtonClick(product.title)} />
            ))}
            <Modal isOpen={modalOpen} onClose={closeModal} productName={selectedProduct} vendorName ={"vendorName"} />
        </div>
    )
}


export default ProductListing;