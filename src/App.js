import React from 'react';
import Cocktails from './pages/Cocktails/Cocktails';
import Cocktail from './pages/Cocktail/Cocktail';
import {Switch, Route, Link, Redirect} from 'react-router-dom';
import Greeting from './components/Greeting/Greeting';
// import NotFound from './pages/NotFound/NotFound';
// import InternalServerError from './pages/InteralServerError/InteralServerError';
// import Offline from './pages/Offline/Offline';

import './App.css';
import CocktailRow from './components/CocktailRow/CocktailRow';
import RandomCocktail from './components/RandomCocktail/RandomCocktail';


const App = () => {

  return (

      <div className="App">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link to='/' className="navbar-brand" to='/'> Quarantine Drink Inspiration</Link>
          </nav>
          <main>
            <Switch>
              
              <Route exact path="/" component={Greeting}/>

              <Route path="/cocktails/:id" component={Cocktail} />
                <Route path="/cocktails/:id"
                render={ routeProps => <Cocktail {...routeProps} />} 
                />


              <Route path="/cocktails" component={Cocktails} />
              
              <Route path="/cocktails" 
                render={ routeProps => <RandomCocktail {...routeProps}/>}/>

                

              <Route path="/cocktails" 
                render={ routeProps => <CocktailRow {...routeProps}/>} />
          
               
              
             </Switch>
          </main>
          </div>
       );
    }
  
              
    export default App;
          

  

              

  