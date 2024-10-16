import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-buton" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand"><Link className="nav-link active" aria-current="page" to={'/'}><span><img src="../../../img/manguitastudio_logo2.png" alt="Logo Manguita" /></span>ManguitaStudio</Link></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/privacy'}>Privacy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
