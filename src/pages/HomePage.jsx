export default function HomePage() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center py-5" style={{ minHeight: '70vh' }}>
            <h1 className="text-center mb-4">Welcome to Ricettiamo!</h1>
            <p className="lead text-center mb-4" style={{ maxWidth: '500px', color: '#6c757d' }}>
                Ricettiamo is the perfect place to discover, share, and enjoy the best traditional recipes and much more!<br />
                Find inspiration for every occasion and let yourself be guided by your passion for cooking.
            </p>
        </div>
    )
}