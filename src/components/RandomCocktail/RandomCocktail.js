 import styles from './RandomCocktail.module.css';
 import React, {Component} from 'react';
 import CocktailsDB from '../../services/CocktailsDB';

class RandomCocktail extends Component {

    state = {
        random: {},
    }

    render () {

        let fetchRandomCockTail = () => {
            const url = `https://www.thecocktaildb.com/api/json/v2/${CocktailsDB.apiKey}/random.php`;
            fetch(url)

            .then( (response) => { return response.json();
            })
            .then( (data) => {
                this.setState({random: data.drinks[0]});
             });
            }

        const imgSrc = `${this.state.random.strDrinkThumb}/preview` ;

    return (
        <div className={styles.randomDivWrapper}>
            
      
          
              <h6 className=" text-muted" defaultValue="ID"> ID:{this.state.random.idDrink}</h6>
            <img className="" src={imgSrc}  alt='Cocktail Pic'
            style= {{"padding":"15px" }} />
            <div className="body">
              <h5 className="" defaultValue="Cocktail Name">
                 {this.state.random.strDrink}
              </h5>
              <p>{this.state.random.strInstructions}</p>
          
          </div>
       
        <button type="button" className="btn btn-info" onClick={fetchRandomCockTail}>RANDOM COCKTAIL</button>
        </div>
    );
    }
}

export default RandomCocktail; 