import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonModal, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea,   } from '@ionic/react';
import axios from 'axios';

import { Network } from '@capacitor/network';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, productName }) => {

  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async () => {
    // Perform any additional actions (e.g., send data to the server)

    if(productName && name && message)
    {
    try {
        // Make an API call to submit the form data
        const response = await axios.post(process.env.SERVER_URL+'/idolsQuery', {
          productName,
          name,
          message
        });
  
        // Check the response status or data for further handling
        if (response.status === 200) {
          setIsSubmitted(true);
        } else {
          console.error('Failed to submit the form');
          // Handle the error accordingly
        }
      } catch (error) {
        console.error('Error occurred:', error);
        // Handle the error accordingly
      }
    }
    
    
    if(!productName)
    {
        alert("There is some problem. Please try again after some time.");
    }

    if(!name) {
        alert("please provide your name.");
    }

    if(!message) {
        alert("please provide your query.");
    }
      
    
};
  

  const closeModal = () => {
    setName('');
    setMessage('');
    setIsSubmitted(false);
  };
  

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="end" onClick={() => { onClose(); closeModal()}}>
            Close
          </IonButton>
          <IonTitle>Enquiry Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Your modal content goes here */}
        
        <IonItem>
          <IonLabel position="floating">Your Name</IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Your Message</IonLabel>
          <IonTextarea
            value={message}
            onIonChange={(e) => setMessage(e.detail.value!)}
            rows={8}
          />
        </IonItem>

        <IonButton expand="full" onClick={handleSubmit}>
          Submit
        </IonButton>

        {isSubmitted && (
          <div className="ion-text-center ion-padding-top">
            <p>Your query is registered and will be sent to the vendor. Thank you!</p>
          </div>
        )}
      
      </IonContent>
    </IonModal>
  );
};

export default Modal;
