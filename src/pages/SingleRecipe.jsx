import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function SingleRecipe() {

    const [recipe, setRecipe] = useState({});

    const { id } = useParams();

    const fetchRecipe = () => {
        axios
            .get(`http://localhost:8080/api/recipes/${id}`)
            .then((res) => setRecipe(res.data))
            .catch((error) => console.log(error));
    };

    useEffect(fetchRecipe, [id]);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
            <h1 className="mb-4 text-center">{recipe?.name}</h1>
            <img src={recipe?.imgUrl} alt={recipe?.name} className="mb-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px", objectFit: "cover" }} />
            <p className="lead text-center">{recipe?.description}</p>
            {
                recipe?.ingredients?.length > 0
                    ? recipe.ingredients.map((ingredient) => {
                        return <p key={ingredient.id}> {ingredient.name} </p>
                    })
                    : <p>no ingredients available</p>
            }
        </div>
    )

}