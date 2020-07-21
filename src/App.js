import React from 'react';
// import Cocktail from './pages/Cocktail/Cocktail';
import Cocktails from './pages/Cocktails/Cocktails';
import Cocktail from './pages/Cocktail/Cocktail';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
// import NotFound from './pages/NotFound/NotFound';
// import InternalServerError from './pages/InteralServerError/InteralServerError';
// import Offline from './pages/Offline/Offline';

import './App.css';
import CocktailRow from './components/CocktailRow/CocktailRow';

const App = () => {

  return (

      <div className="App">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link to='/' className="navbar-brand" to='/'>Local Quarantine Bartender!</Link>
            {' '}
            {/* <Link to="/faves">Faves</Link> */}
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={Cocktails}
                render={ routeProps => <CocktailRow {...routeProps}/>} >
                  <Redirect to="/cocktails" />
              </Route>
                <Route path="/cocktails" component={Cocktails} />
                <Route path="/cocktails/idDrink"
                  render={ routeProps => <Cocktail {...routeProps} />}
                />
               
             </Switch>
          </main>
          </div>
       );
    }
  
              
    export default App;
          

  

              

  