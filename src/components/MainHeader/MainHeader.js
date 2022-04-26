import './MainHeader.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SocialMedia from '../SocialMedia/SocialMedia';

function MainHeader() {
  return (
    <div className="MainHeader">
        <div className='navigation'>
          <Link className='manifesto' to="/manifesto">
          <Button variant="btn btn-outline-primary btn-round">O Nosso Manifesto</Button>
          </Link> 

          <Link className='program' to="/programa">
          <Button variant="btn btn-outline-primary btn-round">O Nosso Programa</Button>
          </Link> 
         </div>
         <SocialMedia></SocialMedia>
    </div>
     
  
  );
}

export default MainHeader;