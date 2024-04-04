import { IonContent, IonPage } from "@ionic/react";
import VproductListing from "./VproductListing";
import products from './products.json';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import React, { useState } from 'react';
import axios from "axios";


const Vphotos: React.FC = () => {


    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
const takePhoto = async () => {
    let photoPath: string | undefined = undefined;

    if (Camera.getPhoto) {
      // Capacitor Camera plugin is available
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      photoPath = photo.webPath ?? photo.path;
    } else {
      // Fallback for web browsers
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';

      return new Promise((resolve, reject) => {
        input.onchange = (event) => {
          const target = event.target as HTMLInputElement;
          const file = target.files?.[0];

          if (!file) {
            reject(new Error('No file selected'));
            return;
          }

          resolve(URL.createObjectURL(file));
        };

        input.click();
      });
    }

    if (!photoPath) {
      console.error('Unable to capture photo');
      return;
    }

    const formData = new FormData();
    formData.append('photo', photoPath, 'photo.jpg');

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPhotoUrl(response.data);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };
return (
    <IonPage>
      <IonContent fullscreen>
      {photoUrl && <img src={photoUrl} alt="Captured" />}
      <button onClick={takePhoto}>Capture Photo</button>
      <VproductListing products=""/>
      </IonContent>
    </IonPage>
)
};

export default Vphotos;