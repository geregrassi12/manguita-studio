import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de tener estilos definidos para la clase active
import logo2manguita from '../../../img/manguitastudio_logo2.png';


export default function NavBar() {

    const location = useLocation(); // Hook para obtener la ubicación actual

    // Función para verificar si la ruta es activa
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} aria-current="page" to={'/'}>
                        <span>
                            <img src={logo2manguita} alt="Logo Manguita" />
                        </span> 
                        ManguitaStudio
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} aria-current="page" to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/privacy') ? 'active' : ''}`} to={'/privacy'}>
                                Privacy
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
