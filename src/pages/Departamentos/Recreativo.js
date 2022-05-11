import './Departamento.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Recreativo() {
  const navigate = useNavigate();
  return (
    <div className='departamento'>
        <div className="RecreativoHeader">
              <button className='backToMain' onClick={()=> navigate(-1)}>
                      <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
              </button>
            </div>
      <div className="DepartamentoMain">
       <div className="paragrafo">
            <p>
            Um estudante não deve dedicar todo o seu tempo ao estudo, pelo que espaços e momentos de convívio
             e lazer também são necessários à sua vida e até à sua função. Uma Associação de Estudantes deve promovê-los,
            tentando sempre incluir todos os estudantes, diversificando as temáticas e atividades destes momentos, sempre
            num ambiente de segurança, liberdade e amizade. Isto tudo, claro, assegurando sempre a diversão e proporcionando
             aos estudantes momentos inesquecíveis que sempre levarão na memória.
            <br/>
            <b>A lista E propõe:</b>
            </p>

       </div>

       <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="paragrafo">
                            <h2>FEUPcaffé</h2>
                                    <ul>
                                        <li> Realização de FEUPcaffé’s com a maior regularidade possível, abrangendo gostos musicais diferentes,
                                            e, quando adequado, acompanhando a temática da semana;
                                        </li>
                                        <li>
                                            Limpeza cuidada do edifício da AEFEUP no final de cada evento;
                                        </li>
                                        <li>
                                            Divulgação atempada dos regulamentos para a concessão de bares;
                                        </li>
                                        <li>
                                            Publicação do calendário dos FEUPcaffé’s, no início de cada semestre.
                                        </li>
                                    </ul>
                                <p>
                                Teremos também uma atitude proativa na promoção da segurança nos eventos. 
                                Não toleraremos assédio sexual ou qualquer outro tipo de violência. Responsabilizaremos um ou mais membros, 
                                identificados com um colete refletor, para que estejam atentos a situações de assédio ou distúrbios. 
                                Estes membros estarão espalhados pelo edifício, facilitando a qualquer estudante que se sinta, por algum motivo, 
                                ameaçado a pedir ajuda, podendo estes agir em conformidade.
                                </p>
                        </div>
                    </div>

                    <div class="col-sm">
                        <div class="paragrafo">
                                <h2>Arraial d’Engenharia</h2>
                                <ul>
                                    <li>
                                    Asseguraremos a realização do Arraial d’Engenharia 2022, durante a Semana de
                                        Engenharia, como habitualmente. Procuraremos vender as entradas a um preço
                                        acessível a todos os estudantes;
                                    </li>
                                    <li>
                                    Convidaremos artistas diversos, de modo a promover um evento dinâmico, privilegiando ainda artistas com ligações à FEUP;
                                    </li>
                                    <li>
                                    Divulgaremos atempadamente os regulamentos para a concessão de bares;
                                    </li>
                                    <li>
                                    Tal como nos FEUPcaffé’s, não toleraremos qualquer tipo de violência, tomando as mesmas medidas
                                    </li>
                                </ul>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm">
                        <div class="paragrafo">
                            <h2>Noites e Tardes Temáticas</h2>
                            <p>Para além dos já referidos FEUPcaffé’s, organizaremos eventos regulares de convívio, 
                                como game nights, jogos de quizz, karaokes, espetáculos de comédia, entre outros. </p>
                                <br/>
                                <p>
                                Alguns destes serão momentos de partilha cultural, simplificando a integração de estudantes 
                                internacionais. Distribuiremos estes eventos, não só pelas famosas quintas académicas, mas também pelos restantes 
                                dias do fim-de-semana, atendendo aos estudantes deslocados que não regressem a casa.
                                </p>
                                <br/>
                                <p>
                                Utilizaremos, ainda, o novo Parque da Asprela, dado a sua proximidade à FEUP, para desenvolver atividades lúdicas.
                                </p>
                                <br/>
                        </div>
                    </div>

                    <div class="col-sm">
                        <div class="paragrafo">
                            <h2>
                            Churrascos e Sunsets
                            </h2>
                            <p>
                            Promoveremos churrascos e festas de sunset, aproveitando a esplanada do edifício da AEFEUP. 
                            Alguns destes eventos poderão estar relacionados com as restantes atividades desse dia, incluindo-se na mesma temática.
                            </p>
                            <br/>
                            <p>
                            Retomaremos a Pool Party, que antes da pandemia se realizava no início do ano.
                            </p>
                            <br/>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm">
                        <div class = "paragrafo">
                            <h2>Jogos de Tabuleiro</h2>
                            <p>Disponibilizaremos jogos de tabuleiro e cartas, para requisição e uso no espaço da AEFEUP, sem qualquer custo para os estudantes. 
                                Caso haja um grande interesse por parte dos estudantes em algum jogo, poderá ser organizado torneio do mesmo, atribuindo prémios 
                                aos primeiros classificados
                            </p>
                            <br/>
                        </div>
                    </div>

                    <div class="col-sm">
                        <div class = "paragrafo">
                            <h2>Torneios </h2>
                            <p>
                            Uma competição amigável é uma excelente forma de socialização. Assim organizaremos alguns torneios como de beer pong, sueca ou 
                            matraquilhos, por exemplo.
                            </p>
                            <br/>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm">
                        <div class = "paragrafo">
                            <h2>
                            Transmissão de Eventos Desportivos
                            </h2>
                            <p>
                            Transmitiremos, na AEFEUP, os jogos do mundial de futebol de 2022, assim como as corridas da Fórmula 1, e outros eventos que se 
                            justifiquem.
                            </p>
                            <br/>

                        </div>
                    </div>

                    <div class="col-sm">
                        <div class = "paragrafo">
                            <h2>Peddy Paper e Rally Tascas</h2>
                            <p>
                            Realizaremos, no início do ano, um Peddy Paper pela baixa do Porto, dando a conhecer a cidade aos estudantes da FEUP que cá chegam, 
                            e terminando com um Rally Tascas, pela cidade.
                            </p>
                            <br/>
                        </div>
                    </div>

                </div>

             </div>
    
        <div class = "paragrafo">
            <h2>Viagens da AEFEUP</h2>
            <p>
            Organizaremos viagens de fins de semana, ou durante as interrupções letivas, a preços acessíveis aos estudantes. Consideramos que são 
            uma excelente oportunidade de confraternização entre os estudantes, enquanto aprendem e se valorizam. Estas viagens terão maior 
            regularidade, abrangendo algumas cidades estrangeiras, mas também portuguesas.
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

export default Recreativo;
