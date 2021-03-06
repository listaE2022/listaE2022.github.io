import './Conhece.css';
import YoutubeEmbed from '../../components/Video-Player/YouTubeEmbed';
import Footer from '../../components/Footer/Footer';
import { Component } from 'react';
import GoBackButton from '../../components/GoBackButton';

class Conhece extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
    return (
        <div className="ConheceMain">
            <div className="ConheceHeader">
                <GoBackButton></GoBackButton>
            </div>
            
            <div className='Conhece'>
                
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
               
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
                        
                            <img className='responsive_img' src='./images/oscar.png'></img>
                                
                        </div>
                    
    
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
                        
                            <img className='responsive_img' src='./images/margarida.png'></img>
                                
                        </div>
                    
    
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
                        
                            <img className='responsive_img' src='./images/manel.png'></img>
                                
                        </div>
                    
    
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
                        
                            <img className='responsive_img' src='./images/miguel_lopes.png'></img>
                            
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
                           
                            <img className='responsive_img' src='./images/beatriz_loureiro.png'></img>
                
                        </div>
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
                                <img className='responsive_img' src='./images/antonio.png'></img>
                            </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Direção</h2>
                        <div id="container">
    
                                    <img className='responsive_img' src='./images/ana.png'></img>
                            </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Mesa da Assembleia Geral</h2>
                        <div id="container">
    
                                    <img className='responsive_img' src='./images/aguiar.png'></img>
                            </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Mesa da Assembleia Geral</h2>
                        <div id="container">
    
                                    <img className='responsive_img' src='./images/vaz.png'></img>
                            </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Mesa da Assembleia Geral</h2>
                        <div id="container">
    
                                    <img className='responsive_img' src='./images/joana.png'></img>
                            </div>
                        
                    </div>
    
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Conselho Fiscal</h2>
                        <div id="container">
    
                                <img className='responsive_img' src='./images/martim.png'></img>
                            </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Conselho Fiscal</h2>
                        <div id="container">
                            <img className='responsive_img' src='./images/jose.png'></img>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                    <h2 id="apresentacao_title" >Conselho Fiscal</h2>
                        <div id="container">
    
                                    <img className='responsive_img' src='./images/ligia.png'></img>
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


    <h2 id="apresentacao_title">Apresentação da Lista 2022</h2>
          
              <YoutubeEmbed embedId="HZPi-L0enPY" />
    
            
              <h2 id="apresentacao_title">Debate Eleitoral</h2>
          
          <YoutubeEmbed embedId="t4nw3gpbDsk" />
            </div>

            
         
          
          <Footer></Footer>
    
        </div>
    
    
      );
}

}

export default Conhece;