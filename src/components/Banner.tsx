import { IonAvatar, IonItem, IonLabel, IonText } from '@ionic/react';
import '../styles/Banner.css';
import Avatar from '../images/avatar.svg'

const Banner: React.FC = () => {
    return (
        <div className="bannerWrapper">
            <IonItem color="default">
                <div>
                    <IonLabel color="light">
                        Good morning
                    </IonLabel>
                    <IonText color="light">JPython</IonText>
                </div>
                <IonAvatar slot="end">
                    <img src={Avatar} alt="" />
                </IonAvatar>
            </IonItem>
        </div>
    )
}


export default Banner;