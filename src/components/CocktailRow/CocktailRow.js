const { Component } = require("react");
import React from 'react';
import {Link} from 'react-router-dom';

const MonsterRow = ({idDrink, strDrink, strDrinkThumb}) => {
    return (
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={strDrinkThumb} alt='Cocktail Pic' />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/cocktails/${idDrink}`}>{strDrink}</Link>
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{strDrink}</h6>
            </div>
          </div>
        </div>
      );

}

export default MonsterRow;