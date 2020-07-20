import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const popularUrl = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/randomselection.php`;

const index = () => {
    fetch(popularUrl)
           .then( response => response.json() )
           .then( data => this.state({ cocktails: data.results }) );
   }
   
   const show = (id) => {
       id = this.props.cocktail.idDrink;
       if (id !== this.cocktail.idDrink) {
           fetch()
               .then(response => response.json())
               .then(data => this.setState({cocktail: data}));
       }
   }
   
   const CocktailsDB = {
     index,
     show,
     apiKey
   };
   
   export default CocktailsDB;
