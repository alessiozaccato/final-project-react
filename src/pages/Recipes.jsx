import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
        axios
            .get('http://localhost:8080/api/recipes')
            .then((res) => {
                setRecipes(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(fetchRecipes, []);

    return (
        <>
            <h1 className="mb-4 text-center" style={{ color: '#d2691e', fontWeight: 'bold', letterSpacing: '1px' }}>Recipes</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {recipes.map((recipe) => (
                    <div className="col d-flex align-items-stretch" key={recipe.id}>
                        <div className="w-100 d-flex">
                            <RecipeCard recipe={recipe} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}