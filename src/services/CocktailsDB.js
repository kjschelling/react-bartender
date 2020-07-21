
const apiKey = process.env.REACT_APP_COCKTAIL_API_KEY;
const baseUrl = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`
const collectionUrl = baseUrl;
const memberUrl = (idDrink) => `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${idDrink}`


// const handleAPIErrors = response => {
//     if (!response.ok) {
//         return response.json().then(data =>{
//           return {errors: data.error}
//         })
//       }
//       return response.json().then(data => ({data}));
// }

const index = () => {
    return fetch(collectionUrl)
    .then(response => response.json());
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
