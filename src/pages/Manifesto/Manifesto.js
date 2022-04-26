import ManifestoHeader from '../../components/ManifestoHeader/ManifestoHeader';
import './Manifesto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import Indice from '../../components/Indice/Indice';
import ManifestoMain from '../../components/ManifestoMain/ManifestoMain';
import { Component } from 'react';
import Footer from '../../components/Footer/Footer.js';

class Manifesto extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./scripts/goBackBtn.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render(){
      return (
      <div className="Manifesto">
        
          <ManifestoHeader></ManifestoHeader>
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