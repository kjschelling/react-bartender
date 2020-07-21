
const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/randomselection.php`


const handleAPIErrors = response => {
    if (!response.ok) {
        return response.json().then(data =>{
          return {errors: data.error}
        })
      }
      return response.json().then(data => ({data}));
}

// const reformatResponseData = response => {
//     if (!response.data) return response;
// }

const index = () => {
    fetch(baseUrl)
           .then( response => response.json() )
           .then( data => this.state({ drinks: data.results }) );
   }
   
   const show = (id) => {
    //    id = this.props.cocktail.idDrink;
    //    if (id !== this.cocktail.idDrink) {
    //        fetch()
    //            .then(response => response.json())
    //            .then(data => this.setState({cocktail: data}));
    //    }
   }
   
   const CocktailsDB = {
     index,
     show,
     apiKey
   };
   
   export default CocktailsDB;
