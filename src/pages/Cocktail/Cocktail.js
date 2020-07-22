import React, {Component} from 'react';
import CocktailsDB from '../../services/CocktailsDB';
import {Link} from 'react-router-dom';


class Cocktail extends Component {

    state = {
        drink: {},
    }


    async componentDidMount() {
        const data = await CocktailsDB.show(this.props.match.params.id);
        this.setState({drink: data.drinks[0]});
      }

    render () {

    
        const imgSrc = `${this.state.drink.strDrinkThumb}/preview`;
                    
            

        return (
            <>
             <div className="container">
                <div className="m-5 card text-center" style={{"padding":"20px"}}>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.drink.idDrink}</h6>
                    <h3 className="card-header"> {this.state.drink.strDrink}</h3>
                <div className="card-body">
                    <img className="m-3" src={imgSrc} alt='Cocktail Pic' />
                    <h5 className="card-title">{this.state.drink.strDrink}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Category: {this.state.drink.strCategory}</h6>
                    <p className="card-text">{this.state.drink.strInstructions}</p>
                    <div className="container">
                        <ul>
                           
                        </ul>
                    </div>
                    

                <Link className="btn btn-primary" to='/cocktails'>Back</Link>
        </div>
      </div>
    </div>

            </>
        );
    }
}

    



export default Cocktail;
