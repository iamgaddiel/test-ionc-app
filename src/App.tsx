import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonAvatar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heartCircleOutline, homeOutline, peopleOutline, calendar, informationCircle, people, } from 'ionicons/icons';
import profileImage from './images/avatar.svg'
import Home from './pages/Home';
import About from './pages/About';
import Client from './pages/Client';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Custom Style */
import './styles/style.css';

const App: React.FC = () => (
  <IonApp>
    <IonTabs>
      <IonRouterOutlet>
        <IonReactRouter>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/clients' component={Client} exact />
        </IonReactRouter>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className="main-color">
        {/* home button */}
        <IonTabButton tab="home" href="/" className="main-color">
          <IonIcon icon={homeOutline} color="light"></IonIcon>
          <IonLabel color="light">Home</IonLabel>
        </IonTabButton>

        {/* home button */}
        <IonTabButton tab="home" href="/" className="main-color">
          <IonIcon icon={homeOutline} color="light"></IonIcon>
          <IonLabel color="light">Home</IonLabel>
        </IonTabButton>

        {/* profile button */}
        <IonTabButton tab="home" href="/profile" className="main-color">
          <IonAvatar>
            <img src={profileImage} alt="profile"/>
          </IonAvatar>
        </IonTabButton>
        {/* client */}
        <IonTabButton tab="clients" href="/clients" className="main-color">
          <IonIcon icon={peopleOutline}></IonIcon>
          <IonLabel color="light">clients</IonLabel>
        </IonTabButton>

        {/* about page */}
        <IonTabButton tab="about" href="/about" className="main-color">
          <IonIcon icon={informationCircle} color="light"></IonIcon>
          <IonLabel color="light">About</IonLabel>
        </IonTabButton>
        
      </IonTabBar>
    </IonTabs>
  </IonApp>
);

export default App;
