import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    const { id, name, imgUrl } = recipe;

    return (
        <div className="card h-100 d-flex flex-column">
            <img src={imgUrl} alt={name} className="card-img-top" style={{ objectFit: "cover", height: "200px" }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <div className="mt-auto">
                    <Link to={`recipes/${id}`} className="btn btn-success btn-sm">Read More</Link>
                </div>
            </div>
        </div>
    )
}