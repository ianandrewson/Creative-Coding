import React from 'react';
import HelloSketch from './processing/HelloSketch.js';
import FirstFractal from './processing/FirstFractal.js';
import { 
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';
import Header from './header/Header.js';
import Dazed from './processing/dazed.js';
import Shrink from './processing/Shrink.js';
import Polaris from './processing/Polaris.js';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/Polaris' component={Polaris} />
          <Route path='/hello-sketch' component={HelloSketch} />
          <Route path='/fractal-tree' component={FirstFractal} />
          <Route path='/dazed' component={Dazed} />
          <Route path='/shrink' component={Shrink} />
        </Switch>
      </Router>
    </>
  );
}
