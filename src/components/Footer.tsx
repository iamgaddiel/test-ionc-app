import { IonButton, IonCol, IonFooter, IonRow } from '@ionic/react';


const Header: React.FC = () =>  {
    return (
        <IonFooter>
            <IonRow>
                <IonCol>
                    <IonButton>
                        Home
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonFooter>
    )
}

export default Header;