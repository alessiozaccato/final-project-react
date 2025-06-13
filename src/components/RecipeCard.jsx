import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    const { id, name, imgUrl } = recipe;

    return (
        <div className="card h-100 d-flex flex-column shadow-sm recipe-card">
            <img src={imgUrl} alt={name} className="card-img-top recipe-card-img" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{name}</h5>
                <div className="mt-auto text-center">
                    <Link to={`/recipe/${id}`} className="btn btn-success btn-sm px-4">Read More</Link>
                </div>
            </div>
        </div>
    )
}