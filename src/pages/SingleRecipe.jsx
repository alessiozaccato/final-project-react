import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import loader from "../assets/imgs/food_loader.gif"
import { useGlobalContext } from '../contexts/GlobalContext';



export default function SingleRecipe() {

    const { recipe, loading, fetchRecipe } = useGlobalContext();

    const { id } = useParams();

    useEffect(() => fetchRecipe(id), [id]);

    if (loading) return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
            <img className="img-fluid animation" src={loader} alt="loader" />
        </div>
    );

    if (!recipe || !recipe.name) {
        return (
            <>
                <div className="container d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
                    <h1 className="text-center text-danger">No recipe available</h1>

                    <div className="mx-4">
                        <Link to="/recipes" className="btn btn-warning my-4">Back to All Recipes</Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4 text-center">{recipe?.name}</h1>
            <img src={recipe?.imgUrl} alt={recipe?.name} className="mb-4 img-fluid" style={{ maxWidth: "400px" }} />
            <p className="lead text-center">{recipe?.description}</p>
            {
                recipe?.ingredients?.length > 0 && <h3>Ingredients:</h3>
            }
            {
                recipe?.ingredients?.length > 0
                    ? recipe.ingredients.map((ingredient) => {
                        return <p key={ingredient.id}> {ingredient.name} </p>
                    })
                    : <p>no ingredients available</p>
            }
            <div className="mt-4">
                <Link to="/recipes" className="btn btn-warning my-4">Back to All Recipes</Link>
            </div>
        </div>
    )

}