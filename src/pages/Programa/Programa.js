import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Programa.css';
import desporto from '../../images/miguel.png';
import Figure from "../../components/Figure/Figure";

class Programa extends Component {

    componentDidMount () {
      
    }
  
    render(){
        return (
        <div className="Programa">
          <Header section_name='PROGRAMA'></Header>
          <div className="programa-container">
              <div className="container">
                  <div className="row">
                    <div className="col-lg">
                      
                      <Figure image={desporto} path="/programa/desporto"></Figure>
                  
                    </div>
                    <div className="col-lg">
                    
                      <Figure image={desporto} path="/programa/desporto"></Figure>
                  
                      
                    </div>
                    <div className="col-lg">
                   
                      <Figure image={desporto} path="/programa/desporto"></Figure>
                 
                    </div>
                    <div className="col-lg">
                    
                      <Figure image={desporto} path="/programa/desporto"></Figure>
                  
                      
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg">
                        <Figure image={desporto} path="/programa/desporto"></Figure>
                      
                    </div>
                    <div className="col-lg">
                    <Figure image={desporto} path="/programa/desporto"></Figure>
                    </div>
                    <div className="col-lg">
                    <Figure image={desporto} path="/programa/desporto"></Figure>
                    </div>
                    <div className="col-lg">
                    <Figure image={desporto} path="/programa/desporto"></Figure>
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