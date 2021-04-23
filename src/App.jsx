import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CollectMap from './components/CollectMap';
import SliderComponent from './components/SliderComponent';

import Quiz from './components/Quiz';
import logoNaotri from './components/logoNaotri.png';
import trash from './components/trash.png';
import trophy from './components/trophy.png';
import shopping from './components/shopping.png';
import bottle from './components/bottle.png';
import robinet from './components/robinet.png';
import totebag from './components/totebag.png';
import plasticbag from './components/plasticbag.png';
import don from './components/don.png';
import benne from './components/benne.png';
import './App.css';
import Footer from './components/Footer';
import Social from './components/Social';
import Home from './components/Home';
import Header from './components/Header';
import WorkInProgress from './components/WorkInProgress';
import TemporaryLinks from './components/TemporaryLinks';
import ProfileCreation from './components/ProfileCreation';

const sliderItems = [
  {
    image: logoNaotri,
    description: 'Trie tes déchets de manière ludique!',
  },
  {
    image: trash,
    description: 'Trouve les points de collecte les plus proches de chez toi !',
  },
  {
    image: trophy,
    description: 'Relève des défis et gagne des points!',
  },
  {
    image: shopping,
    description:
      'Echange tes points contre des réductions dans tes enseignes préférées!',
  },
];

const quizQuestions = [
  {
    key: 0,
    id: 0,
    question: 'Quand tu as soif tu...',
    image2: bottle,
    answer1: "...cours acheter une bouteille d'eau en plastique",
    image3: robinet,
    answer2: '...prends ta gourde et la remplis au robinet ?',
  },
  {
    key: 1,
    id: 1,
    question: 'Quand tu vas faire les courses tu...',
    image2: totebag,
    answer1: '...utilises un cabas ou un tot bag',
    image3: plasticbag,
    answer2: '...achètes un sac plastique à chaque fois ?',
  },
  {
    key: 2,
    id: 2,
    question: 'Quand tes vêtements ne sont plus à ton goût tu...',
    image2: benne,
    answer1: '...les jettes, bon débarras !',
    image3: don,
    answer2:
      '...les déposes à une benne de recyclage ou les donnes à une association ?',
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/slider">
              {sliderItems.map((sliderItem) => (
                <SliderComponent {...sliderItem} />
              ))}
              <Link to="/quiz0">
                <button type="button">Quiz1</button>
              </Link>
            </Route>
            <Route exact path="/quiz0">
              <Quiz {...quizQuestions[0]} />
            </Route>
            <Route exact path="/quiz1">
              <Quiz {...quizQuestions[1]} />
            </Route>
            <Route exact path="/quiz2">
              <Quiz {...quizQuestions[2]} />
            </Route>
            <Route exact path="/quizResult">
              <WorkInProgress />
            </Route>
            <Route exact path="/login">
              <WorkInProgress />
            </Route>
            <Route exact path="/home">
              <Header />
              <Home />
              <Social />
            </Route>
            <Route exact path="/map">
              <CollectMap />
            </Route>
            <Route exact path="/shop">
              <WorkInProgress />
            </Route>
            <Route exact path="/profile">
              <ProfileCreation />
            </Route>
            <Route exact path="/challenge">
              <WorkInProgress />
            </Route>
            <Route exact path="/tips">
              <TemporaryLinks />
            </Route>
            <Route exact path="/about">
              <WorkInProgress />
            </Route>
          </Switch>
        </div>
        <nav>
          <Footer />
        </nav>
      </Router>
    </div>
  );
}

export default App;
