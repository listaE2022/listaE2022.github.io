import './Departamento.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
function Informatica() {
  return (
    <div className='departamento'>
        <Header section_name='INFORMATICA'></Header>
        <div className="ManifestoMain">
       <div id="introduçao">
            <p>
            Consideramos que, no contexto atual, é de grande relevância a manutenção de tecnologias de informação próprias para o funcionamento 
            correto da Associação de Estudantes. Sendo assim, o departamento de Informática será um pilar de apoio aos outros departamentos, 
            visando compreender toda a comunicação necessária entre estes.
            </p>
            <br/>
            <p>
            Será da responsabilidade deste departamento a manutenção de tais tecnologias e garantir que seja mantida uma plataforma de 
            transparência da AEFEUP, acessível a quem possa interessar. 
            </p>

       </div>
       <div class="container">
           <div class="row">
                    <div class="col-sm">
                      <div>
                      <h2>Plataforma de transparência</h2>
            
                        <p>
                        Criação de uma plataforma de transparência para adequada distribuição de documentos relacionados com a atividade da AEFEUP, tais como: 
                        documentos das Assembleias Gerais da AEFEUP, atas de reuniões com entidades externas à AEFEUP, contratos celebrados, atas e resumos da 
                        intervenção da AEFEUP em reuniões da Federação Académica do Porto, entre outros. A plataforma permitirá pesquisar e filtrar a 
                        documentação, facilitando o escrutínio público da atividade da Direção da AEFEUP. Servirá, ainda, como um arquivo central destes 
                        documentos, para garantir o acesso aos mesmos na posteridade.
                        </p>
                        </div>
                    </div>

                    <div class="col-sm">
                        <div>
                        <h2>Website AEFEUP</h2>
                        <ul>
                            <li>
                            Manter e melhorar o website da AEFEUP, procurando resolver bugs existentes;
                            </li>
                            <li>
                            Adição de um mural de atividade para divulgar a atividade de AE, não só ao nível de organização de eventos, mas também ao nível 
                            institucional, fazendo a ponte entre as atividades e documentos relevantes na plataforma de transparência;
                            </li>
                            <li>
                            Integração do calendário de atividade dos núcleos estudantis da FEUP no website
                            </li>
                        </ul>
                        <br/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <button id='scrollToTopBtn' className='scrollToTopBtn'>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>

    <Footer></Footer>
        
    </div>
  );
}

export default Informatica;
