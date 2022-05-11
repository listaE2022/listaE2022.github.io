import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Programa.css';
import desporto from '../../images/desporto.png';
import acao_social from '../../images/acao_social.png';
import ambiente from '../../images/ambiente.png';
import comunicacao from '../../images/comunicacao.png';
import cooperacao from '../../images/cooperacao.png';
import cultural from '../../images/cultural.png';
import saude from '../../images/saude.png';
import mag from '../../images/MAG.png';
import cf from '../../images/CF.png';
import logistica from '../../images/logistica.png';
import recreativo from '../../images/recreativo.png';
import pedagogia from '../../images/pedagogia.png';
import informatica from '../../images/informatica.png';
import Figure from "../../components/Figure/Figure";

class Programa extends Component {
    render(){
        return (
        <div className="Programa">
          <Header section_name='PROGRAMA'></Header>
          <div className="programa-container">
              <div className="container">
                  <div className="row">
                    <div className="col-lg">
                      
                      <Figure image={mag} path="/programa/mag"></Figure>
                  
                    </div>
                    <div className="col-lg">
                    
                      <Figure image={cf} path="/programa/conselho_fiscal"></Figure>
                  
                      
                    </div>
                    <div className="col-lg">
                   
                      <Figure image={recreativo} path="/programa/recreativo"></Figure>
                 
                    </div>
                  
                  </div>

                <div className="row">
                  <div className="col-lg">
                    <Figure image={saude} path="/programa/saude"></Figure>
                  </div>

                  <div className="col-lg">
                    <Figure image={acao_social} path="/programa/acao_social"></Figure>
                  </div>
                  <div className="col-lg">
                    <Figure image={ambiente} path="/programa/ambiente"></Figure>
                  </div>
                    
                </div>
                    


                <div className="row">
                  <div className="col-lg">
                    <Figure image={comunicacao} path="/programa/comunicacao"></Figure>
                  </div>
                  <div className="col-lg">
                    <Figure image={cooperacao} path="/programa/cooperacao_e_estudantes"></Figure>
                  </div>
                  <div className="col-lg">
                    <Figure image={cultural} path="/programa/cultural"></Figure>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg">
                    <Figure image={desporto} path="/programa/desporto"></Figure>
                  </div>
                  <div className="col-lg">
                    <Figure image={informatica} path="/programa/informatica"></Figure>
                  </div>
                  <div className="col-lg">
                      <Figure image={logistica} path="/programa/logistica"></Figure>
                  </div>
                  

                </div>

                <div className="row">
                  <div className="col-lg" class="pedagogia">
                    <Figure image={pedagogia} path="/programa/pedagogia"></Figure>
                  </div>

                </div>

              </div>
            </div>
            <Footer></Footer>
        </div>
      );
    }
    
  }
  
  export default Programa;