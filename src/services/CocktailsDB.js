
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
   
   const show = idDrink => {
        return fetch(memberUrl(idDrink))
        .then(response => response.json());
   }
   
   const CocktailsDB = {
     index,
     show,
     apiKey
   };
   
   export default CocktailsDB;
