
 import React, {Component} from 'react';
 import CocktailsDB from '../../services/CocktailsDB';

class RandomCocktail extends Component {

    state = {
        random: [],
    }

    render () {

        const randomCockTail = () => {
            let url = CocktailsDB.randomShowUrl;
            fetch(url)

            .then( (response) => { return response.json();
            })
            .then( (data) => {
                this.setState({random: data.drinks} )
            });
        }
        const imgSrc = `${this.state.random.strDrinkThumb}/preview` ;

    return (
        <div className='container' style= {{"padding":"55px" }}>
            <h3>Generate Random Cocktail</h3>
        <div className="col-md-3"> 
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={imgSrc} defaultValue="Random Cocktail Pic" alt='Cocktail Pic'
            style= {{"padding":"15px" }} />
            <div className="card-body">
              <h5 className="card-title" defaultValue="Cocktail Name">
                 Name: {this.state.random.strDrink}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted" defaultValue="Cocktail ID"> ID:{this.state.random.idDrink}</h6>
              <p>{this.state.random.strInstructions}</p>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-info" onClick={randomCockTail}>Random Cocktail!</button>
        </div>
    );
    }
}

export default RandomCocktail; 