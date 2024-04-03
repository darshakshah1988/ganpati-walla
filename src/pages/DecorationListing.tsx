import React, { useRef, useState } from 'react'
import axios from 'axios'
import Modal from './Modal';
import { IonButton } from '@ionic/react';


const ProductList = ({ product, onButtonClick }) => {
    return (
        <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-type">Type: {product.tags}</div>
            <IonButton id="open-modal" expand="block" onClick={onButtonClick}> <img src='/whatsapp.svg' style={{"width": "30px", "height": "30px"}} />Connect Decorator</IonButton>
            </div>
        </div>
    )
}




const DecorationListing = ({ products }) => {
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
                <ProductList key={product.id} product={product} onButtonClick={() => handleButtonClick(product.name)} />
            ))}
            <Modal isOpen={modalOpen} onClose={closeModal} productName={selectedProduct} />
        </div>
    )
}


export default DecorationListing;