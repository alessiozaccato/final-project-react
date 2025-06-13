import { Link } from "react-router-dom"
import brokenSpaghetti from "../assets/imgs/broken_spaghetti.gif"

export default function NotFound() {
    return (
        <div className="container mt-5 text-center">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <img
                        src={brokenSpaghetti}
                        alt="broken spaghetti"
                        className="img-fluid mb-4 animation"
                    />
                    <h1 className="display-4 mb-3 text-warning fw-bold">Ops!</h1>
                    <h4 className="lead mb-4">We cannot find your Package Of Pasta! Someone broke them!</h4>
                    <p className="mb-4">You can go back to the Home Page.</p>
                    <div className="mt-4">
                        <Link to="/" className="btn btn-warning my-4 px-4 py-2 fw-bold">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}