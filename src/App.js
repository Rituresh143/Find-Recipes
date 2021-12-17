// import logo from './logo.svg';
import './App.css';
import SearchBar from "./component/SearchBar";
import RecipeCard from "./component/RecipeCard";
import { useEffect, useState } from 'react';


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function App() {

  const [isLoading,setIsLoading] =  useState(false);
  const [query,setQuery] =  useState("");
  const [recipes,setRecipes] = useState([]);

  // function to search for the recipes

  const searcRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);

  };


  useEffect(() => {
    searcRecipes()

}, []);
  
  const handleSubmit = event => {
    event.preventDefault()
    searcRecipes();
  };




  return (
    <div className="container">
     <h2>Find Recipes</h2>
     <SearchBar 
        
        handleSubmit={handleSubmit}

        value={query}
        onChange={event => setQuery(event.target.value)}
        isLoading={isLoading}

     />
     <div className="recipes">
       {recipes ? recipes.map(recipes => (
         <RecipeCard 
            key={recipes.idMeal} recipes={recipes}
         />
       ))
       :"No Recipes!"
      }
     </div>
    </div>

  );
}

export default App;
