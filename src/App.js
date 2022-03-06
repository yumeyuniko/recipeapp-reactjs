import './App.css';
import "./key";
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan")

  const APP_ID = "45912890";
  const APP_KEY = "8c2ca5e6a418788916eb8dad915f477c";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabels}`;

  
  async function getRecipes() { 
    const result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };


  return (
    <div className="app">
      <h1>Food Recipe Plaza📗</h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
            <input
                type="text"
                className='app__input'
                placeholder='enter ingredient'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app_healthLabels">
          <option onClick={() => setHealthLabels("vegan")}>vegan</option>
          <option onClick={() => setHealthLabels("vegetarian")}>vegetarian</option>
          <option onClick={() => setHealthLabels("sesame-free")}>sesame-free</option>
          <option onClick={() => setHealthLabels("dairy-free")}>dairy-free</option>
          <option onClick={() => setHealthLabels("paleo")}>paleo</option>
          <option onClick={() => setHealthLabels("gluten-free")}>gluten-free</option>
          <option onClick={() => setHealthLabels("wheat-free")}>wheat-free</option>
          <option onClick={() => setHealthLabels("low-sugar")}>low-sugar</option>
          <option onClick={() => setHealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => setHealthLabels("peanut-free")}>peanut-free</option>
          <option onClick={() => setHealthLabels("tree-nut-free")}>tree-nut-free</option>
          <option onClick={() => setHealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => setHealthLabels("fish-free")}>fish-free</option>
          <option onClick={() => setHealthLabels("shellfish-free")}>shellfish-free</option>
        </select>
      </form>

      <div className='app__recipes'>
        {recipes.map(recipe => {
        return <RecipeTile recipe={recipe}/> ;
      })}
      </div>
    </div>
  );
}

export default App;
