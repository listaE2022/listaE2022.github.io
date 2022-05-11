import './Conhece.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import YoutubeEmbed from '../../components/Video-Player/YouTubeEmbed';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Conhece() {
  return (
    <div className="ConheceMain">

        
        <div className='Conhece'>
             <h2 id="apresentacao_title">Apresentação da Lista 2022</h2>
      
          <YoutubeEmbed embedId="DedN5Ll6HPI" />

          
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                
                    <div id="container">
                        <h2 id="apresentacao_title" >A tua Direção</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img src='./images/oscar.png'></img>
                            </div>
                            <div id="col-sm">
                                <img src='./images/margarida (1).png'></img>
                            </div>
                            
                        </div>
                    </div>
                

                </div>
                <div class="carousel-item">

                <div id="container">
                        <h2 id="apresentacao_title" >A tua Direção</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img src='./images/miguel_lopes.png'></img>
                            </div>
                            <div id="col-sm">
                                <img src='./images/beatriz_loureiro.png'></img>
                            </div>
                            <div id="col-sm">
                                <img src='./images/joao_teixeira.png'></img>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="carousel-item">

                <div id="container">
                        <h2 id="apresentacao_title" >A tua Direção</h2>
                        <div id="row">
                            <div id="col-sm">
                                <img src='./images/oscar.png'></img>
                            </div>
                            <div id="col-sm">
                                <img src='./images/margarida.png'></img>
                            </div>
                            <div id="col-sm">
                                <img src='./images/manel.png'></img>
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