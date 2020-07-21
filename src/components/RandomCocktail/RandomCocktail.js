import React from 'react';

const RandomCocktail = ({random}) => {
 const imgSrc = `${random.strDrinkThumb}/preview`;
    return (
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={imgSrc} alt='Cocktail Pic'
            style= {{"padding":"15px" }} />
            <div className="card-body">
              <h5 className="card-title">
                {random.strDrink}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{random.idDrink}</h6>
              <p>{random.strInstructions}</p>
            </div>
          </div>
        </div>
    );
}

export default RandomCocktail; 