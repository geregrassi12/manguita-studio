import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import logo2manguita from '../../../img/manguitastudio_logo2.png';
import emailjs from "emailjs-com";



export default function Footer() {

        const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm(
            "service_r7sfrfv",
            "template_8lnt6no",
            e.target,
            "dFwR6VhuETojKBjKy"
          )
          e.target.reset();
        };


    return (
        <footer>
        
        <div className='container-form'>
            
            <form onSubmit={sendEmail}>

              <div>
              <input type="email" name="email" placeholder="Email" required />
              </div>

              <div>
              <textarea name="message" placeholder="Mensaje" required></textarea>
              </div>

              <div>
              <button type="submit">Enviar</button>
              </div>
            
            </form>
        </div>
        
        <div className="navbar navbar-expand-lg  fixed-buton" data-bs-theme="dark">
            <div className="container-fluid">
                 <li className='nav-link'>
                     <Link className="nav-link" to={'/privacy'}>Privacy</Link>
                 </li>
              <a className="navbar-brand"><Link className="nav-link active" aria-current="page" to={'/'}><span><img src={logo2manguita} alt="Logo Manguita" /></span>ManguitaStudio</Link></a>
            </div>
        
        </div>
        </footer>
    );
}


