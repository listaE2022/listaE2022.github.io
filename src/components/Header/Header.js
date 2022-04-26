import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  return (
    <div className="ManifestoHeader">
      <Link className='backToMain' to="/">
         <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
     </Link> 
      <h1 id='section_name'>{props.section_name}</h1>
    </div>
  );
}

export default Header;