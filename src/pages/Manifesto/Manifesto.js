
import './Manifesto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import Indice from '../../components/Indice/Indice';
import ManifestoMain from '../../components/ManifestoMain/ManifestoMain';
import { Component } from 'react';
import Footer from '../../components/Footer/Footer.js';
import Header from '../../components/Header/Header';

class Manifesto extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.id = "goBackBtn-script";
    script.src = "./scripts/goBackBtn.js";
    script.async = true;

    var script_in_page = document.getElementById("goBackBtn-script");
    if(script_in_page == null){
      document.body.appendChild(script);
    }
  }

  render(){
      return (
      <div className="Manifesto">
        
          <Header section_name='MANIFESTO'></Header>
          <div className='centerPdfButton'>
            <a href='https://drive.google.com/u/0/uc?id=1SUUDFKGESk7r9bK8WeTA1ohfj0-kjtRq&export=download'>
              <button className="btn btn-outline-primary btn-round pdf-save">
              DOCUMENTO EM PDF 
              
              <FontAwesomeIcon className='pdfIcon' icon={faFilePdf} />
              </button>
          </a> 
          </div>

          <div className="manifesto-body">
              <Indice className="Indice"></Indice>
              <ManifestoMain className="ManifestoMain"></ManifestoMain>
          </div>

        <button id='scrollToTopBtn' className='scrollToTopBtn'>
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>

        <Footer></Footer>
      </div>
    );
  }
  
}

export default Manifesto;