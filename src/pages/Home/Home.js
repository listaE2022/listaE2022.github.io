import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

function Home() {
  return (
    
      <div className="MainHeader">


        <div className='navigation'>
            <h1 id='slogan'>Expressa-te: É hora de mudar!</h1>

            <div className="container" id='mainButtons'>
              <div className="row">
                  <div className='col-sm navButton' >
                    <Link className='manifesto' to="/manifesto">
                    <Button variant="btn btn-outline-primary btn-round">O Nosso Manifesto</Button>
                    </Link> 
                  </div>

                  <div className='col-sm navButton'>
                    <Link className='program' to="/programa">
                  <Button variant="btn btn-outline-primary btn-round">O Nosso Programa</Button>
                  </Link> 
                  </div>
                  <div className='col-sm navButton'>
                    <Link className='program' to="/conhece_nos">
                  <Button variant="btn btn-outline-primary btn-round">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conhece-nos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    </Link> 
                  </div>
                

              </div>

            </div>
        
         </div>
         <SocialMedia></SocialMedia>
      </div>

    
  );
}

export default Home;