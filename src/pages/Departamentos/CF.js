import './Departamento.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
function CF() {
  return (
    <div className='departamento'>
        <Header section_name='Conselho Fiscal'></Header>
        <div className="DepartamentoMain">
            <div class="paragrafo">

            <p>
              O Conselho Fiscal tem como função a fiscalização das atividades administrativas realizadas pela AEFEUP. Este órgão tem o 
              dever de escrutinar, regularmente e de forma imparcial, os orçamentos, planos de atividades e relatórios de contas apresentados 
              pela Direção da AEFEUP, de modo a assegurar a transparência de todos os processos contabilísticos.
            </p>

            </div>
            <div class="paragrafo">
                    <p>
                    Dos Estatutos da AEFEUP consta que o Conselho Fiscal tem como principais competências “elaborar e aprovar em reunião do 
                    Conselho Fiscal, o Regulamento Interno (...)” e “fiscalizar todas as atividades financeiras da AEFEUP (...)” que deve resultar 
                    num “(...) parecer sobre o Balanço da Gerência da AEFEUP (...)“ (artigo 40º, pontos a), b) e e) dos Estatutos da AEFEUP), 
                    acessível a todos os estudantes como prova do correto desempenho das funções deste órgão social da AEFEUP. Todos os documentos 
                    referidos devem ser facultados aos estudantes da faculdade.
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
                    Deste modo, a candidatura da Lista E ao Conselho Fiscal da AEFEUP assenta-se nos seguintes três pilares:
                    </p>
                    <ul>
                        <li>Assegurar um correto, responsável, rigoroso e imparcial escrutínio contabilístico da Direção da AEFEUP;</li>
                        <li>Garantir a transparência das suas operações, assim como promover a divulgação das posições tomadas em matérias de interesse geral dos estudantes;</li>
                        <li>Fornecer documentação acessível do trabalho do órgão.</li>
                    </ul>
                    <br/>
                    <p>
                    A AEFEUP representa os estudantes da maior faculdade integrada na Federação Académica do Porto, e uma das maiores do país.<b> É 
                    fulcral garantir a máxima eficácia e transparência de todas as atividades conduzidas pela AE, especialmente tendo em conta que 
                    é a faculdade que tem mais estudantes a quem prestar contas.</b>
                    </p>
                    <br/>
                    <p>
                    Com a Lista E, os estudantes da FEUP podem contar com uma Associação de Estudantes responsável que dá prioridade às 
                    preocupações dos estudantes. Uma Associação de Estudantes tem a obrigação de servir os interesses daqueles que representa, 
                    escutando as suas preocupações e pondo em prática estratégias para colmatar os problemas dos estudantes. 
                    </p>
                    <br/>
                    <p id = "expressa"><b>Expressa-te através da Lista E!</b></p>
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

export default CF;