import './Departamento.css';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Desporto() {
const navigate = useNavigate();
return (
    <div className='departamento'>
        <div className="DesportoHeader">
            <button className='backToMain' onClick={()=> navigate(-1)}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} size="3x"></FontAwesomeIcon>
            </button>
        </div>
        <div className="DepartamentoMain">
            <div id="introduçao">
                    <p>
                        Para a Lista E, a dinamização da prática desportiva é fulcral para um salutar ambiente
                    académico, sendo crucial garantir que todos os estudantes tenham acesso aos meios que
                    permitem usufruir da prática desportiva na FEUP. A prática de desporto e exercício físico são
                    essenciais para a integral formação dos alunos, independentemente da sua especialização
                    profissional. É importante promover um estilo de vida saudável de forma a assegurar que,
                    para além da formação académica de excelência provida pela nossa faculdade, os
                    estudantes sejam saudáveis. Para além de todos os benefícios ao nível da saúde física, o
                    desporto tem um papel fundamental na saúde mental dos indivíduos.
                    Deste modo, sugerimos, como diretrizes a seguir no próximo mandato, o seguinte:
                    </p>


            </div>

            <div className="co ntainer">
                <div className="ro w">
                    <div className="co l-sm">
                        <div>
                            <h2>Torneios de E-Sports</h2>
                                <p>
                                É necessário, e a situação pandémica demonstrou isso mesmo, adaptar os programas
                                às circunstâncias. Ainda que tenham sido feitos alguns torneios de e-sports no mandato
                                transato, o peso no orçamento foi desnecessariamente alto para o custo real destes eventos.
                                Além disso, é da maior importância realizar-se o esforço de ser mais transparente na
                                organização dos mesmos, bem como melhorar a comunicação tanto das regras, como das
                                datas, que muitas das vezes coincidiram com os horários de aulas dos estudantes. Estarão
                                incluídos torneios de <i>Counter Strike</i> , <i>League of Legends</i> e <i>FIFA</i>.
                                </p>
                        </div>
                    </div>

                    <div className="co l-sm">
                    <div id="ensino-com-dignidade">
                        <h2>Torneios de desportos individuais e de equipa</h2>
                            <p>
                                    A realização de torneios dos mais diversos desportos (futsal, futebol, voleibol,
                            basquetebol) deve e pode ser facilitada por uma AE que preze o desporto como algo
                            essencial na promoção de um estilo de vida saudável. As instalações desportivas do CDUP,
                            do qual fazem parte o pavilhão Luís Falcão, ou mesmo a FADEUP, são locais nos quais é
                            possível realizar este tipo de eventos, que podem até ser dinamizados em conjunto com
                            outras faculdades, sendo que a maior parte dos custos de organização e de aluguer dos
                            espaços devem, na nossa ótica, ser assegurados pela AE.
                            </p>

                            <p>
                                Estes torneios poderão ser realizados inter e intra faculdade, fazendo um esforço por
                        negociar melhores preços de aluguéis de pavilhões, de modo a assegurar a maior parte dos
                        custos de organização (negociando com outras universidades, por exemplo). Será também
                        introduzido um torneio de xadrez e de matraquilhos, ambos realizados no edifício da AEFEUP.
                        Por fim, promoveremos o convívio entre alunos, fazendo um lanche no final de cada
                        torneio e implementando um pódio com prémios a serem atribuídos.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="ro w">
                    <div className="co l-sm">
                        <div>
                            <h2 id="ensino-democratico">Aulas individuais</h2>
                                <p>
                                Iremos promover a atividade física, fazendo uma aula ao ar livre personalizada, com
                                    um preço por pessoa, com personal trainer, e realização de aulas de yoga.
                                </p>
                        </div>
                    </div>

                    <div className="co l-sm">
                        <div>
                            <h2 id="ensino-democratico">Corridas de Orientação</h2>
                        <p>
                            Implementaremos corridas de orientação, nas quais grupos terão que se orientar em
                        espaço florestal de modo a completar uma corrida através de checkpoints, estilo corta-
                        mato. A equipa vencedora terá direito a prémio.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

       <div>
           <h2>Seleções AEFEUP</h2>
            <p><ul id="selecoes_aefeup">
                <li>Garantir mais investimento para as seleções da AEFEUP</li>
                <li> Ter um membro da direção responsável pelas seleções, que se disponibilize a ajudar
                    sempre que necessário e que mobilize estudantes para os jogos</li>
                <li>Garantir que o desporto é acessível a todos os estudantes e impedir que os
                praticantes gastem do seu dinheiro para poderem praticá-lo;
                Colmatar a falta de equipamento</li>
                <li>Ter em atenção a escolha de treinadores procurando-os com antecedência e
                motivados em treinar a equipa</li>
                <li>Colmatar falta de transportes para as competições onde os desportistas vão
                representar a faculdade</li>
                <li>Preparar lanche para os jogos do campeonato nacional</li>
                <li>Promover jantares entre a AE e as equipas</li>
                <li>Potenciar a criação de novos desportos</li>
                <li>Divulgar e transmitir os jogos das Seleções AEFEUP via online.</li>
            </ul></p>
       </div>

       </div>

       <button id='scrollToTopBtn' className ='scrollToTopBtn'>
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>

        <Footer></Footer>
    
    </div>
        
  );
}

export default Desporto;