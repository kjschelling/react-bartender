
import React, { Component} from 'react';
import styles from './Cocktails.module.css';

import CocktailRow from '../../components/CocktailRow/CocktailRow';
import CocktailsDB from '../../services/CocktailsDB';
import RandomCocktail from '../../components/RandomCocktail/RandomCocktail';
import Greeting from '../../components/Greeting/Greeting';


class Cocktails extends Component {

   state = {
       drinks: [],
       over21: true,
   }

   handleClick = () => {
     this.setState({over21 : false});
   }

  async componentDidMount() {
  
      const data = await CocktailsDB.index();
       this.setState({drinks: data.drinks});
    }
  
    render() {

        const allCocktailRows = this.state.drinks.map( d => <CocktailRow  key={d.idDrink} {...d} /> );
        const over21Rows =  this.state.over21 === true ? allCocktailRows : null;

    return (
      <>
      <Greeting handleClick={this.handleClick} />
        <section className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 
            className={styles.cocktailsH1} 
             >Cocktails</h1>
          </div>
        </section>

        { this.state.over21 === true ? <RandomCocktail /> : null }

        { this.state.drinks.length ? 
          <div className="album">
            <div className="container">
              <div className="row">
                   {over21Rows} 
              </div>
            </div>
          </div>
          :
          <div className="text-center">
            <div className="spinner-border">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      </>
    );
    }
}

export default Cocktails;