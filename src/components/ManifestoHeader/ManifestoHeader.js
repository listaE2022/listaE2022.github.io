import './ManifestoHeader.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';

function ManifestoHeader() {
  return (
    <div className="ManifestoHeader">
      <Link className='backToMain' to="/">
         <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
     </Link> 
    
    </div>
  );
}

export default ManifestoHeader;