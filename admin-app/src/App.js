import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import home from './containers/home'
import signin from './containers/signin';
import signup from './containers/signup';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path='/signin' component={signin} />
          <Route exact path='/signup' component={signup} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
