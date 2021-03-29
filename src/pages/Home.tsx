import { IonContent, IonPage} from '@ionic/react';
import Banner from '../components/Banner';
import Main from '../components/Main';
import './Home.css';

// custom style
import '../styles/style.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Banner/>
        <Main/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
