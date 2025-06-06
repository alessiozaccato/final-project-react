import { NavLink } from 'react-router-dom';
import brand from '../assets/imgs/ricettiamo.png'

export default function Header() {
  return (
    <header>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={brand} alt="brand" />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/recipes">Recipes</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}