import React from 'react';
import Cocktail from './pages/Cocktail/Cocktail';
import Cocktails from './pages/Cocktails/Cocktails';
import {Switch, Route, Link} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import InternalServerError from './pages/InteralServerError/InteralServerError';
import Offline from './pages/Offline/Offline';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
          <Link style= {{textDecoration: 'none'}}to='/'>Local Quarantine Bartender!</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/"/>
          <Route />
          <Route />
        </Switch>
      </main>

    </div>
  );
}

export default App;
