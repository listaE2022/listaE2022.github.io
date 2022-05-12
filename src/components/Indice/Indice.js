
import './Indice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';

class Indice extends Component {

  componentDidMount(){
    const script = document.createElement("script");

    script.src = "./scripts/showIndice.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
        <aside className="Indice">
        <header className='IndiceName'>
            <h2 id="indice_title">Índice</h2>
        
            <button className='expand-button' id='expand-button'>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
        </header>
        <ul className='nav-indice' id='nav'>
            <li>
                <a className='indiceItem' href='#introduçao'>Introdução</a>
            </li>
            <li>
                <a className='indiceItem' href='#ensino-para-todos'>Ensino para Todos</a>
            </li>
            <li>
                <a className='indiceItem' href='#ensino-com-dignidade'>Ensino com Dignidade</a>
            </li>
            <li>
                <a className='indiceItem' href='#ensino-democratico'>Ensino Democrático</a>
            </li>
        </ul>
        </aside>
    );
  }
}

export default Indice;