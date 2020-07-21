
const apiKey = process.env.REACT_APP_COCKTAIL_API_KEY;
const baseUrl = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`
const collectionUrl = baseUrl;
const memberUrl = (id) => `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`;
const randomShowUrl = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/random.php`;


const handleAPIErrors = response => {
   
}

const index = () => {
    return fetch(collectionUrl)
    .then(response => response.json());
   }
   
   const show = id => {
        return fetch(memberUrl(id))
        .then(response => response.json());
   }
   
   const randomShow = () => {
        return fetch(randomShow)
        .then(response => response.json());
   }
   
   const CocktailsDB = {
     index,
     show,
     apiKey, 
     randomShow
   };
   
   export default CocktailsDB;
