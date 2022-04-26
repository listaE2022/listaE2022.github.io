
import './Footer.css';
import SocialMedia from '../SocialMedia/SocialMedia.js';
import { Link } from 'react-router-dom';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="Footer">
        <div className='container'>
        <div className='row footer-inner'>
            <div className='col-lg-4 col-md-6 lista-desc'>
                <h3>Lista E</h3>
                <p>A Lista E compromete-se a defender os direitos dos estudantes! Escutar os Estudantes! Elevar Engenharia!</p>
            </div>
            <div className='col-lg-4 col-md-6 links'>
                <h3>Links</h3>
                <ul>
                <li >
                    <Link className='link' to="/">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Home
                    </Link> 
                </li>
                    <li>
                    <Link className='link' to="/manifesto">
                    <FontAwesomeIcon icon={faArrowRight} />Manifesto
                    </Link> 
                    </li>
                </ul>
            </div>
            <div className='col-lg-4 col-md-6 contactos'>
                <h3>Contactos</h3>
                <p>Rua Dr Roberto Frias
                    Paranhos, s/n
                    4200-465 Porto</p>
                    <p>
                    Email: listae@gmail.com
                </p>
                <div className='social-media'>
                <SocialMedia></SocialMedia>
                </div>
            </div>

        </div>
        </div>
    </footer>
  );
}

export default Footer;