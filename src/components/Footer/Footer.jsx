import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import logo2manguita from '../../../img/manguitastudio_logo2.png';



export default function Footer() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-buton" data-bs-theme="dark">
            <div className="container-fluid">
            <li className='nav-link'>
                <Link className="nav-link" to={'/privacy'}>Privacy</Link>
                </li>
            <a className="navbar-brand"><Link className="nav-link active" aria-current="page" to={'/'}><span><img src={logo2manguita} alt="Logo Manguita" /></span>ManguitaStudio</Link></a>
            </div>
        </nav>
    );
}
