import { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import GoBackButton from '../../components/GoBackButton';
import './Departamento.css';

class Cooperacao extends Component {
   

    componentDidMount(){
        const script = document.createElement("script");
        script.id = "goBackBtn-script";
        script.src = "./scripts/goBackBtn.js";
        script.async = true;

        var script_in_page = document.getElementById("goBackBtn-script");
        if(script_in_page != null) script_in_page.remove()
        document.body.appendChild(script);
        window.scrollTo(0,0);
    }

    render(){
        return (
            <div className="departamento">
                <div className="CooperacaoHeader">
                <GoBackButton></GoBackButton>
                </div>
                <div className='DepartamentoMain'>
               <div id="introduçao">
        
                    <p>
                    Na Lista E acreditamos que a AEFEUP deve servir os estudantes e defender os seus interesses
                    em todos os lugares onde tem representação. É a maior associação de estudantes do Porto,
                    e como tal, deve ter uma voz ativa e estar na linha da frente da luta pelos direitos dos
                    estudantes.
                    </p>
                    <p>
                    <strong>Para isto, é necessário ouvir e envolver todos os estudantes da FEUP na construção de
                uma associação aberta, justa, próxima e democrática, que os sirva verdadeiramente.</strong>
                    </p>
                <p>
                    Também na FEUP, existe uma grande quantidade de núcleos e grupos estudantis, que
                prestam um serviço aos estudantes, promovendo eventos, ajudando a integrar os
                estudantes, por exemplo. É preciso ouvi-los e apoiá-los e é isso a que nos propomos no
                departamento de cooperação e estudantes.
                </p>
                <p>
                Acreditamos também que, como Associação de Estudantes, teremos o dever de promover
                a reflexão crítica sobre assuntos da atualidade académica, associativa, ou mesmo política.
                Focar-nos-emos em grupos de estudantes, como os Estudantes Internacionais, ou os
                Trabalhadores-Estudantes, que têm ainda mais obstáculos no seu percurso académico. Por
                fim, rejeitamos determinantemente qualquer tipo de discriminação entre os estudantes, e
                procuraremos promover um ambiente de respeito e entre-ajuda entre todos.
                </p>
               </div>
        
        
               <div className = "paragrafo">
                        <h2>Recrutamento</h2>
                        <p>
                        Uma Associação dos Estudantes deve ser, precisamente, dos estudantes, e a melhor forma
                        de sê-lo é envolvendo todos na sua atividade, apoiando a Direção na execução de tudo o
                        que for planeado.
                        </p>
                        
                        <p>
                        Segundo os estatutos, cabe à Direção coordenar o trabalho da AEFEUP, pelo que não vemos
                    nenhum impedimento, antes pelo contrário, em envolver o maior número de estudantes
                    possível nos trabalhos da associação, ainda que apenas com um papel consultivo, sem
                    poder de voto, de modo a respeitar os estatutos e a legitimidade da direção eleita.
                        </p>
        
                        <p>
                        Este envolvimento traria mais transparência e abertura da associação, e ainda para o
                    próprio desenrolar das atividades, pois seriam mais pessoas interessadas, competentes e
                    empenhadas para que tudo corresse pelo melhor.
                        </p>
        
                        <p>
                        Haveria duas fases de recrutamento, uma por semestre, possibilitando que quem o deseje
                    se possa candidatar, privilegiando sempre a transparência do processo, baseando-se a
                    escolha no perfil do candidato, demonstração de empenho, e outros critérios, definidos num
                    regulamento próprio.
                        </p>
                </div>
        
                <div className = "paragrafo">
                        <h2>Estudantes Internacionais</h2>
                        <p>
                        Cada vez há mais estudantes internacionais na nossa Faculdade. Estes para além de
                    sofrerem os problemas que abrangem todos os estudantes, ainda são atingidos por muitos
                    outros. É imperioso que a Associação de Estudantes olhe também para estes problemas
                    específicos, de forma a não deixar ninguém para trás. Existem variados núcleos de
                    estudantes internacionais na Universidade do Porto e na FEUP em particular.
                    Comprometemo-nos a cooperar com estes, de modo a representar melhor este grupo de
                    estudantes e procurar resolver os problemas.
                        </p>
                        
                        <p>
                        Os estudantes internacionais são muitas vezes vistos, pela própria faculdade, como mais
                    uma fonte de rendimento e, uma vez que o Estado não financia de igual forma a sua
                    formação, acabam por pagar propinas desproporcionais, sofrendo por vezes aumentos
                    abusivos. Note-se ainda que também há bastantes flutuações na taxa de câmbio da
                    moeda do seu país de origem relativamente ao Euro, desestabilizando assim ainda mais a
                    sua vida. Intercederemos junto das entidades competentes e realizaremos ações de
                    sensibilização e mobilização pela descida desta propina, e pelo acesso à ação social direta
                    e indireta.
                        </p>
        
                        <p>
                        Sabemos também que a FEUP, como a sociedade em geral, não está livre de situações de
                    discriminação, racismo e xenofobia que afetam particularmente estes estudantes.
                    Consideramos isto inadmissível, e estaremos sempre solidários com os afetados por estes
                    casos. Faremos campanhas de sensibilização, procurando evitar e condenar ao máximo
                    todas estas atitudes. Por outro lado, reconhecendo que isto não será suficiente, a curto
                    prazo, para parar todos os casos, criaremos mecanismos de denúncia e apoio para que as
                    vítimas nunca sintam que estão sozinhas e que as discriminações são justificáveis.
                        </p>
        
                        <p>
                        Organizaremos, também, ações de formação dedicadas a estes estudantes, como de
                    língua portuguesa, escrita académica ou literacia digital. Estes poderão ser particularmente
                    importantes para estudantes que cheguem a Portugal refugiados de situações de guerra,
                    ou de extrema pobreza.
                        </p>
        
                        <p>
                        Por fim, procuraremos ainda integrar ao máximo estes estudantes na vida académica,
                    criando eventos dedicados, em parceria com os departamentos recreativo e cultural, de
                    modo a dar a conhecer todas as culturas que confluem no espaço da Faculdade.
                        </p>
                </div>
        
                <div className = "paragrafo">
                        <h2>Estudantes de Mobilidade</h2>
                        <p>
                        Os estudantes de mobilidade não são sócios efetivos da AEFEUP, porém deve-lhes ser dada
                        toda a atenção que é dada aos restantes. À exceção da propina, que aqui é paga
                        consoante a universidade de origem, estes estudantes sofrem dos mesmos problemas que
                        os estudantes internacionais, estando também abrangidos pelas soluções apresentadas no
                        ponto anterior.
                        </p>
                        
                        <p>
                        Colaboraremos, ainda, com a FEUP na receção aos estudantes de mobilidade internacional,
                        integrando-os não só na faculdade, mas também na cidade do Porto. Criaremos ainda
                        guias informativos que os ajudem nesta integração.
                        </p>
        
                        <p>
                        Para além disso, teremos sempre uma versão de todos os documentos, comunicações e
                        textos escrita em inglês, para que todos os possam ler. Se se mostrar necessário,
                        poderemos também alargar esta comunicação a mais línguas.
                        </p>
        
                        <p>
                        Por fim, criaremos uma comissão de acompanhamento e avaliação do programa ERASMUS
                        que auxiliará não só os estudantes que chegam à FEUP, mas também aqueles que partem e
                        estabeleceremos parcerias com entidades ligadas a este programa, trazendo vantagens
                        aos estudantes.
                        </p>
        
                    
                </div>
        
        
                <div className = "paragrafo">
                        <h2>Trabalhadores-Estudantes</h2>
                        <p>
                        Sabemos que as particularidades associadas a este grupo de estudantes são muitas vezes
                        esquecidas nas decisões da Direção da FEUP e dos seus cursos, principalmente no que diz
                        respeito à avaliação. Sendo cada vez mais os estudantes que se vêm forçados a trabalhar
                        para conseguir terminar o seu curso , é fundamental que a AEFEUP dedique uma particular
                        atenção à sua defesa, acompanhamento e apoio a este grupo. Dada a sua reduzida
                        disponibilidade, estes são muitas vezes deixados de fora dos eventos e até do trabalho e
                        das decisões da Associação.
                        </p>
                        
                        <p>
                       <strong> Comprometemo-nos a ouvir estes estudantes, aproximando-os o mais possível das
                            decisões da AE.</strong>
                        </p>
        
                    
                </div>
        
        
                <div className = "paragrafo">
                        <h2>Núcleos e Grupos Académicos</h2>
                        <p>
                        Os núcleos são uma parte essencial da FEUP. Estes são essenciais para desenvolver
                        atividades dedicadas aos seus cursos, para promover a integração dos estudantes, para
                        promover a cultura ou o desporto no espaço da faculdade ou mesmo para criar relações
                        internacionais com outros estudantes de engenharia. Assim, continuaremos o trabalho de
                        cooperação entre os núcleos da FEUP e a AE, estejam estes associados à mesma ou não.
                        Tentaremos sempre estreitar relações sempre que os núcleos o queiram, realizando
                        reuniões periódicas com as respetivas direções. Divulgaremos também nas redes sociais as
                        principais atividades de cada núcleo, dando-lhes mais visibilidade, bem como criaremos
                        um calendário completo da atividade de todos os núcleos e dos seus eventos. Este será
                        disponibilizado do site da AEFEUP.
                        </p>
                        
                        <p>
                        É também fulcral financiar adequadamente a atividade dos núcleos, para que estes
                        possam funcionar nas melhores condições possíveis. Daremos, assim, continuidade ao
                        Plano de Apoio e Financiamento em vigor, facilitando sempre o acesso ao mesmo,
                        permitindo não só o normal desenrolar das atividades de cada núcleo, mas também a
                        melhoria das condições das suas salas e equipamentos.
                        </p>
        
                        <p>
                        Sabemos também que há vários núcleos na FEUP que não dispõem de uma sala, que é
                    quase fundamental para a sua atividade. Interviremos junto da Direção da FEUP para que
                    isto se altere e para que sejam criadas as condições necessárias. No início do ano,
                    organizaremos ainda uma feira de núcleos, para que os mesmos possam publicitar a sua
                    atividade, principalmente junto dos estudantes recém chegados à FEUP.
                        </p>
        
                        <p>
                        Incentivaremos a cooperação inter-núcleos, nomeadamente criando condições para
                    atividades inter-núcleos, com o apoio da AEFEUP. Por outro lado, cooperaremos com o IPDJ,
                    no sentido de desenvolver ações de formação e workshops específicos para os membros
                    dos núcleos. Fomentaremos e apoiaremos também todos os grupos de estudantes que se
                    desejem formalizar como núcleo. Destacamos, a título de exemplo, a criação de um núcleo
                    feminista na faculdade, à semelhança do que existe já noutras faculdades da UP.
                    Consideramos que este deve ser criado por um grupo de estudantes dedicadas à causa, e
                    não diretamente pela AEFEUP, porém, daremos todo o apoio necessário à sua criação.
                        </p>
        
                    
                </div>
        
                <div className = "paragrafo">
                        <h2>A FEUP não é uma empresa</h2>
                        <p>
                        As faculdades devem funcionar com o principal objetivo de ensinar os seus estudantes, que
                    devem ser o foco da sua atividade.<strong> Os estudantes não podem ser vistos como meros
                    clientes.</strong> Deste modo, a Lista E rejeita o atual RJIES - Regime Jurídico das Instituições de
                    Ensino Superior - e o Regime Fundacional da Universidade do Porto. Bater-nos-emos pela
                    sua reversão junto das instituições competentes, visto que estes instrumentos forçam as IES
                    a obter financiamento próprio. Este, para além das propinas que pagamos, provém de
                    parcerias com privados e trabalhos para entidades externas. Na FEUP, assistimos a uma
                    frequente alocação dos laboratórios e dos seus recursos humanos a estes trabalhos,
                    quando poderiam estar a ser usados pelos estudantes. Assistimos também à crescente
                    importância dos partners, a quem é dada promoção por todo o espaço da faculdade,
                    recentemente até alocando auditórios a estas empresas, colocando o seu logotipo na
                    porta.
                    </p>
                        
        
                    
                </div>
        
                <div className = "paragrafo">
                        <h2>Novos Edifícios</h2>
                        <p>
                        A falta de espaço na FEUP é um problema atual e relevante. Com o aumento do número de
                        vagas para as licenciaturas e a retoma do ensino 100% presencial, a falta de salas fez-se
                        sentir, obrigando, por exemplo, à realização de exames, e até mesmo algumas aulas, ao
                        sábado. Sabemos que está em curso o projeto de construção de novos edifícios, a nascente
                        dos atuais. <strong>Salientamos que estes devem servir essencialmente os estudantes, e não
                        interesses externos.</strong> Segundo previsto, o atual parque de estacionamento ficará reduzido,
                        pelo que intercederemos junto da Direção, procurando alternativas ao mesmo.
                    </p>
                        
        
                    
                </div>
        
                <div className = "paragrafo">
                        <h2>Contra a Subida da Propina</h2>
                        <p>
                        Já no nosso programa de 2021 havíamos previsto que “o mais provável é que as propinas
                        do mestrado aumentarão para os futuros estudantes.” Infelizmente, tivemos razão e este
                        ano as propinas para novos estudantes de mestrado mais que duplicaram, atingindo um
                        valor mínimo de 1500€ e afetando, desde logo, os estudantes que agora estão no 1o ano da
                        licenciatura. <strong>Consideramos que este aumento é totalmente injustificado e injusto, e que
                        contraria o direito a uma educação progressivamente gratuita.</strong> Vale a pena salientar que
                        os estudantes expressaram a sua oposição a esta medida, sendo que um abaixo-assinado
                        contra o aumento do valor da propina contou com mais de 1600 assinaturas. Por outro lado,
                        repudiamos a postura da atual AEFEUP, apenas tomando uma posição no fim do processo,
                        e não promovendo mais atividades que visassem lutar contra esta medida.
                        <strong>Reiteramos ainda que somos contra toda e qualquer propina, que será sempre um
                        entrave à frequência ao ensino superior.</strong> É função do estado financiar um ensino superior
                        de qualidade.
                    </p>
                        
        
                    
                </div>
        
                <div className = "paragrafo">
                        <h2>Representação Institucional</h2>
                        <p>
                        Os Estatutos da AEFEUP reconhecem que esta tem, entre outros, por objetivos “Representar,
                        a nível interno e externo, todos os estudantes da FEUP e defender os seus interesses”, bem
                        como “Participar em todas as questões que digam respeito aos estudantes,
                        nomeadamente na emissão de pareceres sobre a elaboração de legislação relativa ao
                        Ensino Superior e no funcionamento e orientação político-pedagógica da FEUP e em
                        atividades de carácter sócio escolar;”. Assim, é fundamental que a AFEUP esteja bem
                        representada nas instituições, como é o caso da Federação Académica do Porto (FAP), do
                        senado da Universidade do Porto, ou do Encontro Nacional de Dirigentes Associativos
                        (ENDA), onde nos propomos a levar todos os problemas da FEUP, e da UP em geral.
                        <strong>Comprometemo-nos também a divulgar estas reuniões, as nossas posições e as suas
                        conclusões, promovendo sempre a transparência.</strong>
                        </p>
                        
        
                    
                </div>
        
                <div className = "paragrafo">
                        <h2>Política</h2>
                        <p>
                        Consideramos que uma Associação de Estudantes deve promover uma atitude crítica dos
                        estudantes em relação ao mundo que os rodeia e aos problemas que os afetam. Assim,
                        propomos a realização de reuniões abertas a todos os estudantes, para além das
                        Assembleias Gerais, promovendo o debate sobre temas mais gerais. Procuraremos
                        colaborar com instituições cujo trabalho incida sobre esses mesmos temas, promovendo
                        um debate esclarecido, informado, e produtivo. Por outro lado, organizaremos também
                        debates convidando os partidos políticos para discutirem assuntos da atualidade,
                        relacionados com os estudantes e com engenharia.
                        </p>
        
                        <p>
                        <strong>Assinalaremos também o Dia Nacional do Estudante, a 24 de Março, recordando a luta
                        associativa de todos aqueles que lutaram no passado pelos direitos de que usufruímos
                        agora, bem como outros dias relevantes, em colaboração com o departamento cultural.</strong>
                        </p>
                        
        
                    
                </div>
        
                <div className = "paragrafo">
                        <h2>Integração</h2>
                        <p>
                        Os estudantes necessitam de estar bem integrados na vida da FEUP, de modo a
                    conseguirem completar os estudos num ambiente saudável e de cooperação, não
                    desprezando a saúde mental. Para isso, consideramos que a Associação de Estudantes
                    deve promover atividades de integração, complementares às já existentes, como a praxe
                    ou os programas de mentoria. Como Lista E, propomos realizar um dia com atividades de
                    <i>ice-breaking</i> e <i>team building</i> no início do ano, dedicado aos estudantes recém-chegados.
                    Desenvolveremos também o guia do estudante, procurando orientar os estudantes no
                    grande espaço que é a FEUP e a cidade do Porto. Por outro lado, colaboraremos com a FEUP,
                    na divulgação dos seus cursos junto dos estudantes do ensino secundário e criaremos um
                    grupo de acompanhamento dos estudantes deslocados, para que estes nunca se sintam
                    abandonados.
                        </p>
        
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

export default Cooperacao;