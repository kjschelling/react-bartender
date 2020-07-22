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
        <div className='container' className={styles.randomDivWrapper}>
            <div className='jumbotron-fluid'>
                <h3 className={styles.randomH3}>Show Random Cocktail</h3>
            </div>
            
        <div className="col-md-4"> 
          <div className="card mb-4 shadow-sm" 
          style= {{"padding":"20px"}}>
              <h6 className="card-subtitle mb-2 text-muted" defaultValue="ID"> ID:{this.state.random.idDrink}</h6>
            <img className="card-img-top" src={imgSrc} defaultValue="icon dice-6"  alt='Cocktail Pic'
            style= {{"padding":"15px" }} />
            <div className="card-body">
              <h5 className="card-title" defaultValue="Cocktail Name">
                 Name: {this.state.random.strDrink}
              </h5>
              <p>{this.state.random.strInstructions}</p>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-info" onClick={fetchRandomCockTail}> Get random cocktail!</button>
        </div>
    );
    }
}

export default RandomCocktail; 