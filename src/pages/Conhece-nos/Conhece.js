import './Conhece.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import YoutubeEmbed from '../../components/Video-Player/YouTubeEmbed';
import Footer from '../../components/Footer/Footer';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Conhece() {
const navigate = useNavigate();
return (
      
    <div className="ConheceMain">
        <div className="ConheceHeader">
            <button className='backToMain' onClick={()=> navigate(-1)}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
            </button>
        </div>
        
        <div className='Conhece'>
             <h2 id="apresentacao_title">Apresentação da Lista 2022</h2>
      
          <YoutubeEmbed embedId="DedN5Ll6HPI" />

          
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
           
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h2 id="apresentacao_title" >Direção</h2>
                    <div id="container">
                        
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/oscar.png'></img>
                            </div>
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/margarida.png'></img>
                            </div>
                            
                        </div>
                    </div>
                

                </div>
                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Direção</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/miguel_lopes.png'></img>
                            </div>
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/manel.png'></img>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Direção</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/beatriz_loureiro.png'></img>
                            </div>
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/joao_teixeira.png'></img>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Direção</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/antonio.png'></img>
                            </div>
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/ana.png'></img>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Mesa da Assembleia Geral</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/aguiar.png'></img>
                            </div>
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/vaz.png'></img>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Mesa da Assembleia Geral</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/joana.png'></img>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Conselho Fiscal</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/martim.png'></img>
                            </div>
                            
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/jose.png'></img>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="carousel-item">

                    <div id="container">
                        <h2 id="apresentacao_title" >Conselho Fiscal</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img className='responsive_img' src='./images/ligia.png'></img>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>

        </div>
     
      
      <Footer></Footer>

    </div>


  );
}

export default Conhece;