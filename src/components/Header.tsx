import { IonToolbar, IonHeader, IonTitle } from '@ionic/react';
import '../styles/Utils.css';


const Header: React.FC = () => {
    return (
        <IonHeader className="ion-no-border bg-transparent"
            color="danger"
            translucent={true}
        >
            <IonToolbar>
                <IonTitle color="danger" className="ion-text-center">Zipline2</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;