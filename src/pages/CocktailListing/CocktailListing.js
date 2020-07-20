
import React, { Component} from 'react';

import CocktailRow from '../../components/CocktailRow/CocktailRow';
import CocktailsDB from '../../services/CocktailsDB';


class Cocktails extends Component {

   state = {
       cocktails: [],
   }

   
  async componentDidMount() {
    try {
      const {data, errors} = await CocktailsDB.index();
      if (data) {
        console.log(data);
        this.setState({cocktails: data});
      }
      else {
        console.log("ERROR!");
        console.log(errors);
      }
    }
    catch {
      console.log(' connection offline');
    }
  }


    render() {
        const allCocktailRows = this.state.cocktails.map( c => <CocktailRow cocktails={this.state.cocktails} key={c.idDrink} {...c} /> );

    return (
      <>
        <section className="jumbotron">
          <div className="container">
            <h1 className="display-4">Cocktails</h1>
          </div>
        </section>

        { this.state.cocktails.length ? 
          <div className="album">
            <div className="container">
              <div className="row">
                {allCocktailRows}
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