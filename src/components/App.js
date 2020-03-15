import React from 'react';
import HelloSketch from './processing/HelloSketch.js';
import FirstFractal from './processing/FirstFractal.js';
import { 
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';
import Header from './header/Header.js';
import styles from './App.css';
import Dazed from './processing/dazed.js';
import Shrink from './processing/Shrink.js';
import Polaris from './processing/Polaris.js';
import CounterRotate from './processing/CounterRotate.js';
import Boxer from './processing/Boxer.js';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <div className={styles.sketchContainer}>
          <Switch>
            <Route exact path='/' component={Polaris} />
            <Route path='/polaris' component={Polaris} />
            <Route path='/boxer' component={Boxer} />
            <Route path='/counter-rotate' component={CounterRotate} />
            <Route path='/hello-sketch' component={HelloSketch} />
            <Route path='/fractal-tree' component={FirstFractal} />
            <Route path='/dazed' component={Dazed} />
            <Route path='/shrink' component={Shrink} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
