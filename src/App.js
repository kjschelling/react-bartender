import React from 'react';
// import Cocktail from './pages/Cocktail/Cocktail';
import CocktailListing from './pages/CocktailListing/CocktailListing';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
// import NotFound from './pages/NotFound/NotFound';
// import InternalServerError from './pages/InteralServerError/InteralServerError';
// import Offline from './pages/Offline/Offline';

import './App.css';
import CocktailRow from './components/CocktailRow/CocktailRow';

function App() {
  return (
   
    //   <header className="App-header">
    //    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //       <Link className="navbar-brand" to='/'>Local Quarantine Bartender!</Link>
    //     </nav>
    //   </header>
    //   <main>
    //     <Switch>
    //       <Route exact path="/"/>
    //       <Route />
    //       <Route />
    //     </Switch>
    //   </main>

      <div className="App">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to='/'>Local Quarantine Bartender!</Link>
            {' '}
            <Link to="/about">About</Link>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" component={CocktailListing}
                render={ routeProps => <CocktailRow 
                cocktails={this.state.cocktails} {...routeProps}/>} >
                  <Redirect to="/cocktails" />
              </Route>

                {/* <Route path="/cocktails/:id" /> */}
               
             </Switch>
          </main>
          </div>
       );
    }
              
    export default App;
          

  

              

  