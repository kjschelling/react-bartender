
import React from 'react';
// import {Link} from 'react-router-dom';

const CocktailRow = (props) => {

  const imgSrc = `${props.strDrinkThumb}/preview`;

    return (
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={imgSrc} alt='Cocktail Pic' />
            <div className="card-body">
              <h5 className="card-title">
                {props.strDrink}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{props.idDrink}</h6>
            </div>
          </div>
        </div>
      );

}

export default CocktailRow;