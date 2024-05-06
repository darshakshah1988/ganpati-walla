import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { addCircleOutline, home, person } from 'ionicons/icons';



const CommonTabs: React.FC = () => {
    return (
        <>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon aria-hidden="true" icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab1" href="/tab1">
                    <img src="/category.png" className="icon" />
                    <IonLabel>Categories</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <img src="/vendor.png" className="icon" />
                    <IonLabel>Vendor</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon aria-hidden="true" icon={person} />
                    <IonLabel>User</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </>
    )
};

export default CommonTabs;