import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loader from "../assets/imgs/food_loader.gif"
import { useGlobalContext } from '../contexts/GlobalContext';



export default function SingleRecipe() {

    const{recipe,loading,fetchRecipe}=useGlobalContext();

    const {id} =useParams();

    // const [recipe, setRecipe] = useState({});
    // const [loading, setLoading] = useState(true);


    // const { id } = useParams();

    // const fetchRecipe = () => {
    //     axios
    //         .get(`http://localhost:8080/api/recipes/${id}`)
    //         .then((res) => {
    //             setRecipe(res.data);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setLoading(false);
    //         })
    // };

    useEffect(fetchRecipe, [id]);

    if (loading) return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: '75vh' }}
        >
            <img className="img-fluid animation" style={{ background: "transparent", mixBlendMode: "multiply" }} src={loader} alt="loader" />
        </div>
    );

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