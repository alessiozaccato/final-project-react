import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    const { id, name, imgUrl } = recipe;

    return (
        <div className="card h-100 d-flex flex-column shadow-sm" style={{ background: '#fffbe7', borderRadius: '16px', minHeight: '370px' }}>
            <img src={imgUrl} alt={name} className="card-img-top" style={{ objectFit: "cover", height: "200px", borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3" style={{ color: '#d2691e', fontWeight: 'bold' }}>{name}</h5>
                <div className="mt-auto text-center">
                    <Link to={`/recipe/${id}`} className="btn btn-success btn-sm px-4">Read More</Link>
                </div>
            </div>
        </div>
    )
}