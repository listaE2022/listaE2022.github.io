import './Departamento.css';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import GoBackButton from '../../components/GoBackButton';


class Logistica extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <div className='departamento'>
                <div className="LogisticaHeader">
                    <GoBackButton></GoBackButton>
                </div>
                <div className="DepartamentoMain">
                    <div className ="paragrafo">
        
                    <p>
                    Uma associação de estudantes deve, sobretudo, servir os estudantes. A AEFEUP não é exceção. Fazer isso em todas as suas vertentes, 
                    desde eventos, à manutenção e gestão do edifício, passando pelo auxílio aos núcleos e grupos de estudantes da nossa faculdade, implica, 
                    logicamente, uma logística algo complexa. Assim, a lista E, e em particular o seu departamento de logística, dentro dos seus poderes, 
                    tratará de tudo isto de forma organizada, eficiente, justa e aberta.<b> Para que todos saibam o que se passa e sintam a AEFEUP como um 
                    espaço que também é seu.</b>
                    </p>
        
                    </div>
                    <div className ="paragrafo">
                            <p>
                            No que toca aos eventos, asseguraremos a limpeza e segurança do espaço onde decorrerem, assim como todo o processo de montagem 
                            e desmontagem do material necessário aos mesmos. Enquanto ainda vigorarem normas relativas à pandemia de Covid-19, garantiremos
                             que estas são respeitadas.
                            </p>
                            <br/>
                            <p>
                            Verifica-se que uma ampla parte da comunidade estudantil não tem o pleno conhecimento dos seus direitos 
                            nas Assembleias Gerais. Não são devidamente informados em relação a estas e muitos nem têm o conhecimento de que 
                            possuem direito de voto. A Lista E compromete-se a difundir amplamente a data, a hora, o local e a ordem de trabalhos da 
                            Assembleia Geral conforme descrito no Capítulo IV, Secção I, Artigo 25º dos Estatutos da AEFEUP. Para além do mais, 
                            compromete-se a transmitir as AG’s online em parceria com outros canais da FEUP e garantir que os alunos que estejam a 
                            assistir a transmissão tenham direito ao voto. Iremos também promover sessões de esclarecimento sobre a importância das 
                            AG’s na vida dos estudantes.
                            </p>
                            <br/>
                            <p>
                            Quanto ao edifício da AEFEUP, consideramos que este é um espaço com grande potencial e cujo uso deve ser potenciado ao máximo. Assim, para além da manutenção necessária, e do apoio às medidas propostas em outros departamentos que envolvam diretamente este espaço, propomos ainda uma maior dispersão das tomadas pela esplanada do edifício.
                            </p>
                            <br/>
                            <p>
                            Por fim, no que toca aos núcleos e grupos estudantis da FEUP, comprometemo-nos a dar todo o apoio logístico necessário às suas 
                            atividades, incluindo a cedência de materiais. Procuraremos também facilitar ao máximo a cedência do edifício da associação a 
                            estes núcleos, sempre de uma forma justa e transparente.
                            </p>
                            
                            <br/>
                    </div>
            
                   
                
                </div>
                <button id='scrollToTopBtn' className='scrollToTopBtn'>
                    <FontAwesomeIcon icon={faArrowUp} size="lg" />
                </button>
        
            <Footer></Footer>
            </div>
          );
    }

}

export default Logistica;