import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";
import loader from "../assets/imgs/food_loader.gif"
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Recipes() {


    const {recipes,loading,fetchRecipes}= useGlobalContext();

    useEffect(fetchRecipes, []);

    if (loading) return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: '75vh' }}
        >
            <img className="img-fluid animation" style={{ background: "transparent", mixBlendMode: "multiply" }} src={loader} alt="loader" />
        </div>
    );

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