
import React, { Component} from 'react';

import CocktailRow from '../../components/CocktailRow/CocktailRow';
import CocktailsDB from '../../services/CocktailsDB';


class Cocktails extends Component {

   state = {
       drinks: [],
   }

  async componentDidMount() {
  
      const data = await CocktailsDB.index();
      this.setState({drinks: data.drinks});
    }
  
  //     if (data) {
  //       this.setState({drinks: data})
  //     }
  //       else {
  //         console.log("ERROR!");
  //         console.log(errors);
  //       }
  //   }
  //   catch {
  //     console.log(' connection offline');
  //   }
  // }


    render() {
        const allCocktailRows = this.state.drinks.map( d => <CocktailRow key={d.idDrink} {...d} /> );

    return (
      <>
        <section className="jumbotron">
          <div className="container">
            <h1 className="display-4">Cocktails</h1>
          </div>
        </section>
        { this.state.drinks.length ? 
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