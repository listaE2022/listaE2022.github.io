import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function Imagem() {
  return (
    <div className='departamento'>
        <Header section_name='IMAGEM'></Header>
        <div className="ManifestoMain">
       <div id="introduçao">
            <p>Acreditamos que a comunicação deve estabelecer uma ponte entre os alunos e órgãos sociais da FEUP e alcançar 
                tanto a comunidade académica quanto parceiros externos e grupos de interesse, procurando, simultaneamente, inovar na forma como 
                se apresenta ao público, utilizando novos meios de transmissão de informação.
            </p>

       </div>
      
        <div className="paragrafo" id = "last">
            <p>A Lista E reconhece a importância de que seja usada uma comunicação coesa, concisa e transparente entre a Associação de Estudantes 
                e os restantes membros da comunidade FEUP. Esta deverá concordar com a identidade visual da AEFEUP e garantir ser percetível por 
                todos os estudantes. Deste modo, queremos dar a conhecer o trabalho realizado ao nível da preparação das atividades, da produção de 
                materiais e relatórios oficiais e também ao nível da representação externa dos estudantes.
            </p>
            <p>Promoveremos o estabelecimento da comunicação por meios offline (posters, panfletos e flyers) e online através das mais variadas 
                plataformas digitais, tais como Instagram, Facebook, Youtube, Linkedin, Twitch e website.
            </p>
            <p>
                Será também papel da comunicação trazer benefícios para os núcleos ao apoiá-los na divulgação e promoção dos seus eventos, para além 
                de promover iniciativas e eventos de toda a comunidade estudantil. Através de um planeamento estruturado e atempado, pretendemos que 
                o trabalho seja realizado sempre dentro dos prazos estipulados e necessários às atividades a divulgar.
            </p>
            <p>Consideramos ser relevante, também, o departamento de comunicação promover iniciativas de caráter social, ambiental e cultural, de maneira 
                a alertar para problemas existentes que concernem a comunidade académica. 
            </p>
            <p>A comunicação deve procurar atender, ao máximo, à metodologia de design de inclusão, de forma a agregar todos os estudantes de 
                maneira diversificada e tendo em conta todas as diferentes perspetivas. Acreditamos que o departamento de imagem e comunicação 
                deve ter em conta o interesse dos estudantes internacionais e da comunidade académica portadora de deficiência.</p>
        </div>
       
    
    </div>
    <button id='scrollToTopBtn' className='scrollToTopBtn'>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>

    <Footer></Footer>
        
    </div>
  );
}

export default Imagem;
