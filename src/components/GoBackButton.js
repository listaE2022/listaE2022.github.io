import { faArrowUp, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function GoBackButton() {
    const navigate = useNavigate();
    return (
    <button className='backToMain' onClick={()=> navigate(-1)}>
            <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
    </button>
    )
}

export default GoBackButton;