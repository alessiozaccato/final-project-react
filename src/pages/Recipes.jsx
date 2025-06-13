import RecipeCard from "../components/RecipeCard";
import { useEffect } from "react";
import loader from "../assets/imgs/food_loader.gif"
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Recipes() {


    const { recipes, loading, fetchRecipes, search, setSearch, fetchSearchRecipe } = useGlobalContext();

    useEffect(fetchRecipes, []);

    useEffect(() => fetchSearchRecipe(search), [search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }


    if (loading) return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
            <img className="img-fluid animation" src={loader} alt="loader" />
        </div>
    );

    // if (recipes.length === 0 && search) {
    //     return (
    //         <div className="container d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
    //             <h2 className="text-center text-danger">No recipes found for "{search}"</h2>
    //         </div>
    //     );
    // }

    return (
        <>
            <h1 className="mb-4 text-center">Recipes</h1>
            <div className="d-flex justify-content-center mb-4">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert recipe to search"
                    className="form-control search-input"
                />
            </div>
            {
                recipes.length === 0 && search
                    ? <h2 className="text-center text-danger">No recipes found for "{search}"</h2>
                    : <div className="row row-cols-1 row-cols-md-3 g-4">
                        {recipes.map((recipe) => (
                            <div className="col d-flex align-items-stretch" key={recipe.id}>
                                <div className="w-100 d-flex">
                                    <RecipeCard recipe={recipe} />
                                </div>
                            </div>
                        ))}
                    </div>
            }

        </>
    )
}