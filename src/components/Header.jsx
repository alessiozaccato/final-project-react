import { NavLink } from 'react-router-dom';
import brand from '../assets/imgs/ricettiamo.png'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex align-items-center" to="/">
                        <img src={brand} alt="brand" style={{ height: '40px', marginRight: '10px', borderRadius: '12px' }} />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" style={({ isActive }) => ({ color: isActive ? '#d2691e' : '#3d2c1e', fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/recipes" style={({ isActive }) => ({ color: isActive ? '#d2691e' : '#3d2c1e', fontWeight: isActive ? 'bold' : 'normal' })}>Recipes</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}