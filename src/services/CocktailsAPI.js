
const baseUrl = '';
const collectionUrl = `${baseUrl}?api_key=${apiKey}`;
const memberUrl = (id) => `${baseUrl}/${id}?api_key=${apiKey}`;

const handleAPIErrors = response => {
}

const index = () => {
}

const show = id => {
}

const create = cocktail => {
}

const update = cocktail => {
}

const destroy = id => {
}

const CocktailsAPI = {
  index,
  show,
  create,
  update,
  destroy
}

export default MonstersAPI;