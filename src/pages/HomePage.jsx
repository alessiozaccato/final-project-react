import banner from "../assets/imgs/ricettiamo_banner.png"

export default function HomePage() {
    return (
        <>
            <div className="w-100">
                <img
                    src={banner}
                    alt="banner"
                    className="img-fluid w-100"
                    style={{ height: '250px', objectFit: 'cover', margin: 0, padding: 0, display: 'block' }}
                />
            </div>
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
                <h1 className="text-center mb-4">Welcome to Ricettiamo!</h1>
                <p className="lead text-center mb-4" style={{ maxWidth: '500px', color: '#6c757d' }}>
                    Ricettiamo is the perfect place to discover, share, and enjoy the best traditional recipes and much more!<br />
                    Find inspiration for every occasion and let yourself be guided by your passion for cooking.
                </p>
            </div>
        </>
    )
}