
import React from 'react';
import {Link} from 'react-router-dom';



const CocktailRow = ({strDrink, strDrinkThumb, idDrink}) => {

  const imgSrc = `${strDrinkThumb}/preview`;

    return (
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm" style= {{"padding":"15px" }}>
          <h6 className="card-subtitle mb-2 text-muted">ID:{idDrink}</h6>
            <img className="card-img-top" src={imgSrc} alt='Cocktail Pic' />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/cocktails/${idDrink}`}>{strDrink}</Link>
              </h5>
            </div>
          </div>
        </div>
      );

}

export default CocktailRow;