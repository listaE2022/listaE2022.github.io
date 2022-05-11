import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

function Home() {
  return (
    <div className="Home">
      <div className="MainHeader">

        
        <div className='navigation'>
        <h1 id='slogan'>Expressa-te: É hora de mudar!</h1>
          <Link className='manifesto' to="/manifesto">
          <Button variant="btn btn-outline-primary btn-round">O Nosso Manifesto</Button>
          </Link> 

          <Link className='program' to="/programa">
          <Button variant="btn btn-outline-primary btn-round">O Nosso Programa</Button>
          </Link> 
         </div>
         <SocialMedia></SocialMedia>
      </div>

    </div>
  );
}

export default Home;