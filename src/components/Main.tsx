import { IonAvatar, IonButton, IonCard, IonCol, IonLabel, IonRow, IonText } from '@ionic/react';

// images
import Car from '../images/car.svg';
import Rail from '../images/rail.svg';
import Traveling from '../images/travelling.svg';
import Walk from '../images/walk.svg';
import Cycling from '../images/bicycle.svg';
import Suite from '../images/suit.svg';

// Custom Style
import '../styles/style.css';

const Main: React.FC = () => {
    return (
        <div className="main ion-padding">

            {/* Row 1 */}
            <IonRow>
                <IonCol size="6">
                    <IonCard className="ion-padding">
                        <IonText color="dark">
                            walking
                        </IonText>
                        <div className="main-image-wrapper ion-margin-top">
                            <img src={Walk} alt="" />
                        </div>
                    </IonCard>
                </IonCol>
                <IonCol size="6">
                    <IonCard className="ion-padding">
                        <IonText color="dark">
                            Cycling
                        </IonText>
                        <div className="main-image-wrapper ion-margin-top">
                            <img src={Cycling} alt="" />
                        </div>
                    </IonCard>
                </IonCol>
            </IonRow>

            {/* Row 2 */}
            <IonRow>
                <IonCol size="6">
                    <IonCard className="ion-padding">
                        <IonText color="dark">
                            Driving
                        </IonText>
                        <div className="main-image-wrapper ion-margin-top">
                            <img src={Car} alt="" />
                        </div>
                    </IonCard>
                </IonCol>
                <IonCol size="6">
                    <IonCard className="ion-padding">
                        <IonText color="dark">
                            Train
                        </IonText>
                        <div className="main-image-wrapper ion-margin-top">
                            <img src={Rail} alt="" />
                        </div>
                    </IonCard>
                </IonCol>
            </IonRow>

            {/* Row 3 */}
            <IonRow>
                <IonCol size="6">
                    <IonCard className="ion-padding">
                        <IonText color="dark">
                            traveling
                        </IonText>
                        <div className="main-image-wrapper ion-margin-top">
                            <img src={Traveling} alt="" />
                        </div>
                    </IonCard>
                </IonCol>
                <IonCol size="6">
                    <IonCard className="ion-padding">
                        <IonText color="dark">
                            Dressing
                        </IonText>
                        <div className="main-image-wrapper ion-margin-top">
                            <img src={Suite} alt="" />
                        </div>
                    </IonCard>
                </IonCol>
            </IonRow>

        </div>
    )
}

export default Main;