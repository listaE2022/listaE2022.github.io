import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMedia.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
  return (
    <div className="SocialMedia">
		
        <a className="btn btn-primary social-button" href="https://www.facebook.com" role="button">
        <FontAwesomeIcon icon={faFacebook} size="lg"/>
	    
          </a>
        <a className="btn btn-primary social-button" href="https://www.instagram.com/lista.e.aefeup/" role="button">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
         
    </div>
     
  );
}

export default SocialMedia;