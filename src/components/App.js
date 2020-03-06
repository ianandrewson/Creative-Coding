import React from 'react';
import HelloSketch from './processing/HelloSketch.js';
import FirstFractal from './processing/FirstFractal.js';
import { 
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/hello-sketch' component={HelloSketch} />
        <Route path='/fractal-tree' component={FirstFractal} />
      </Switch>
    </Router>
  );
}
