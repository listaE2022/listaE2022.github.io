import './Departamento.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
function Cultural() {
  return (
    <div className='departamento'>
        <Header section_name='CULTURAL'></Header>
        <div className="ManifestoMain">
       <div id="introduçao">
            <p>
                Consideramos a cultura algo essencial para a educação de todos. Cabe, também, à AEFEUP
                promovê-la junto dos estudantes da FEUP. O acesso à mesma, seja como criador ou
                simplesmente como espectador, deve ser acessível a todos. Além de ser um direito, é
                imprescindível para uma correta formação académica e pessoal. Na nossa Faculdade
                existem vários núcleos culturais, bandas e estudantes criativos, pelo que nos propomos a
                apoiar os mesmos, dando-lhes espaço e oportunidades para expor e potenciar o seu
                talento.
            </p>
            <br/>
            <p>
                Assim, com o intuito de dinamizar o ambiente cultural no espaço da Associação, mas
                também em toda a Faculdade, propomos: 
            </p>

       </div>

       <div className="container">
           <div className="row">
                    <div className="col-sm">
                      <div>
                      <h2>Concertos e Jam Sessions</h2>
            
                        <p>
                            Concertos com artistas do panorama nacional e local, disponibilizando também o espaço
                            para as bandas e projetos de estudantes da FEUP. Por outro lado, serão organizadas Jam
                            Sessions, sessões casuais em que a AE disponibilizará instrumentos aos estudantes
                            interessados, incentivando o improviso e a espontaneidade de cada um.
                        </p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div>
                        <h2>Concursos</h2>
                        <p>
                            Com o objetivo de estimular ainda mais a criação artística organizaremos variados
                            concursos, nomeadamente:
                        </p>
                        <br/>
                        <ul>
                            <li>Escrita criativa;</li>
                            <li>Poesia;</li>
                            <li>Guitarra (Guitarmageddon: Reborn);</li>    
                            <li>Fotografia;</li>
                            <li>Bandas.</li>
                        </ul>
                        <br/>
                        <p>Em todos eles serão dados prémios aos três primeiros classificados.</p>
                        <br/>
                        </div>
                    </div>
            </div>
        </div>

        <div className="container">
           <div className="row">
                    <div className="col-sm">
                      <div>
                      <h2>Semanas Temáticas</h2>
            
                        <p>
                            Ao longo de todo o ano letivo, iremos assinalar diversas datas, dedicando-lhes uma
                            semana temática. Nestas semanas, haverá atividades relacionadas com o tema em
                            questão, tais como debates, palestras, exposições, filmes, feiras do livro ou workshops. Estas
                            incidirão sobre assuntos como:
                            <ul>
                                <li>o feminismo (celebrando o Dia Internacional da Mulher);</li>
                                <li>as artes (no dia mundial das artes, focando-se em exposições e workshops);;</li>
                                <li>a igualdade (em junho, celebrando o mês do orgulho LGBT);</li>
                                <li>as culturas à volta do mundo (com particular atenção aos países de origem dosestudantes internacionais);</li>
                                <li>a língua portuguesa (destacando a obra de escritores lusófonos, com uma feira do livro, debates e o concurso de escrita criativa);</li>
                                <li>a liberdade (celebrando o 25 de abril);</li>
                                <li>a história da FEUP (Na semana de engenharia, com divulgação de histórias de vida
                                    de alumni, e uma visita guiada à FEUP).</li>
                            </ul>
                        </p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div>
                        <h2>Biblioteca Partilhada e Clube do Livro</h2>
                        <p>
                            Implementaremos um sistema de doação e requisição de livros por parte da AE e dos
                            estudantes, de forma a criar uma biblioteca sem burocracias, da qual a comunidade FEUP
                            possa usufruir livremente. Organizaremos, ainda, de um clube do livro, onde periodicamente
                            sejam analisadas e debatidas obras literárias. A leitura é educação e conhecimento.
                        </p>                        
                        </div>
                    </div>
            </div>
        </div>
        <div className="container">
           <div className="row">
                    <div className="col-sm">
                      <div>
                      <h2>Jornal da Associação de Estudantes, com Agenda Cultural</h2>
            
                        <p>Os estudantes devem ter conhecimento do que se passa na sua Associação de Estudantes
                            e um jornal seria um espaço ideal para isso. Para além de notícias, relatando a ação da
                            associação, acontecimentos na Faculdade e outros assuntos do interesse dos estudantes,
                            este jornal daria a oportunidade aos estudantes para escreverem artigos de opinião. Por
                            fim, contaria ainda com uma agenda cultural, publicitando eventos culturais na cidade.</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div>
                        <h2>Exposições e Teatro no Espaço da AE</h2>
                        <p>
                            Dar oportunidade aos estudantes de exporem os seus trabalhos dos concursos e dos
                            workshops, revitalizando o espaço da AEFEUP. Promoveremos a realização de peças de
                            teatro, sejam com estudantes da Faculdade ou com companhias, dando a conhecer
                            melhor a importância desta arte performativa. Criaremos exposições de peças artísticas
                            realizadas pelos estudantes da FEUP, bem como em parceria com outras faculdades
                            (FBAUP, FLUP ou FAUP, por exemplo), para expor obras dos seus estudantes, que se
                            enquadrem na Faculdade de Engenharia.
                        </p>

                        <br/>
                        </div>
                    </div>
            </div>
        </div>
        <div className="container">
           <div className="row">
                    <div className="col-sm">
                      <div>
                      <h2>Workshops de Artes Plásticas e Performativas</h2>            
                        <p>Promoveremos eventos onde todos os estudantes, mesmo aqueles sem prática na área,
                            possam dar asas à criatividade e desenvolver a sua habilidade em áreas como teatro,
                            pintura, olaria, ilustração, costura ou fotografia. Também se inclui na nossa proposta um
                            passeio fotográfico..</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div>
                        <h2>Sessões de Cinema</h2>
                        <p>
                            O cinema é algo a que queremos dar a devida importância. Assim, propomo-nos a
                            promover sessões de cinema no auditório da AE, ou mesmo no espaço principal do edifício.
                            A escolha dos filmes procurará ser relacionada com o tema da semana da sessão.
                        </p>

                        <br/>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    <button id='scrollToTopBtn' className ='scrollToTopBtn'>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>

    <Footer></Footer>
        
    </div>
  );
}

export default Cultural;
