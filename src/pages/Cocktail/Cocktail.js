import React, {Component} from 'react';
import CocktailsDB from '../../services/CocktailsDB';
import {Link} from 'react-router-dom';


class Cocktail extends Component {

    state = {
        drink: {},
    }


    async componentDidMount() {
        const data = await CocktailsDB.show(this.props.match.params.id);
        this.setState({drink: data.drinks});
      }

    render () {

        const {idDrink, strDrink, strInstructions, strDrinkThumb, strCategory} = this.state.drink;
        const imgSrc = `${strDrinkThumb}/preview`;
        // const IngredList = ({strIngredients}) => {
        //     <ul>
        //         {strIngredients.map((ingred, i) => <li key={i}>{ingred}</li>)}
        //     </ul>
        // }

        return (
            <>
             <div className="container">
                <div className="m-5 card text-center">
                <h6 className="card-subtitle mb-2 text-muted">{idDrink}</h6>
                    <h3 className="card-header"> {strDrink}</h3>
                <div className="card-body">
                    <img className="m-3" src={imgSrc} alt='Cocktail Pic' />
                    <h5 className="card-title">{strDrink}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Category: {strCategory}</h6>
                    <p className="card-text">{strInstructions}</p>

                <Link className="btn btn-primary" to="/cocktails">Back</Link>
        </div>
      </div>
    </div>

            </>
        );
    }
}
    



export default Cocktail;
