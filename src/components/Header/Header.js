import './Header.css';
import { Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="ManifestoHeader">
      <button className='backToMain' onClick={()=> navigate(-1)}>
         <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
     </button> 
      <h1 id='section_name'>{props.section_name}</h1>
    </div>
  );
}

export default Header;