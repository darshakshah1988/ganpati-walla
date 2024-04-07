import { IonContent, IonPage } from "@ionic/react";
import VproductListing from "./VproductListing";
import products from './products.json';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { IonInput, IonButton, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';


const Vphotos: React.FC = () => {
  const [productName, setProductName] = useState<string>('');
  const [productDimensions, setProductDimensions] = useState<string>('');
  const [productDescription, setProductDescription] = useState<string>('');
  const [category, setCategory] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [city, setCity] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [stet, setState] = useState<string>('Maharashtra');
  const [file, setSelectedImage] = useState<File | null>(null);
  const [subscriptionId, setSubscriptionId] = useState();
  const [userId,setUserId] = useState('');
  const [message,setMessage] = useState('');
  const [preview,setPreview] = useState('');
  const baseUrl = "http://localhost:5001";
  const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      //console.log(file);
      setSelectedImage(file);
    }
  };

  const getUserData = () => {
    let d = window.localStorage.getItem("userData");
    const obj = JSON.parse(d);
    setSubscriptionId(obj.subscriptionPlan._id);
    setUserId(obj._id);
  }

  useEffect(() => {
    const a = window.localStorage.getItem("userData");
    getUserData();
  },[getUserData])

  const maharashtraCities = ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Sangli', 'Jalgaon'];

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('state', stet);
    formData.append('pincode', pincode);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('productDescription', productDescription);
    formData.append('productDimensions', productDimensions);
    formData.append('productName', productName);
    


    
    formData.append('subscriptionPlanId', subscriptionId);
    formData.append('userId', userId);


    try {
      const response = await axios.post(baseUrl+"/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
      setMessage(response.data.message);
      setPreview(baseUrl+"/"+response.data.data.image);

    } catch (error) {
      setMessage("there is some error! Please try again or contact admin !");
    }
  };

    
return (    

  <IonContent>
    {message?<img src={preview} />:""}
        <IonItem>
          <IonLabel position="floating">Product Name</IonLabel>
          <IonInput value={productName} onIonChange={(e) => setProductName(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Product Dimensions</IonLabel>
          <IonInput value={productDimensions} onIonChange={(e) => setProductDimensions(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Product Description (Max 100 characters)</IonLabel>
          <IonInput value={productDescription} onIonChange={(e) => setProductDescription(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel>Category</IonLabel>
          <IonSelect value={category} onIonChange={(e) => setCategory(e.detail.value as number)}>
            {[...Array(10)].map((_, i) => (
              <IonSelectOption key={i} value={i + 1}>{i + 1}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
        <input type="file" name="file" accept="image/*" onChange={handleImageInputChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Price</IonLabel>
          <IonInput type="number" value={price} onIonChange={(e) => setPrice(parseFloat(e.detail.value!))} />
        </IonItem>
        <IonItem>
        <IonLabel>State</IonLabel>
        <IonSelect value={stet} onIonChange={(e) => setState(e.detail.value!)}>
          <IonSelectOption value="Maharashtra">Maharashtra</IonSelectOption>
        </IonSelect>
      </IonItem>
        <IonItem>
          <IonLabel>City</IonLabel>
          <IonSelect value={city} onIonChange={(e) => setCity(e.detail.value!)}>
            {maharashtraCities.map(city => (
              <IonSelectOption key={city} value={city}>{city}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Pincode</IonLabel>
          <IonInput value={pincode} onIonChange={(e) => setPincode(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
            {message}
      </IonContent>
    
)
};

export default Vphotos;