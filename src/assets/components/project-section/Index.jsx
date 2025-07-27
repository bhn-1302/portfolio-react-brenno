import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Index.css'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {

    const [index, setIndex] = useState(0);

    const projetos =  [
        {
            nome: 'Search API GitHub',
            imagem: "project-one-img.png",
            descricao: 'Este projeto foi desenvolvido com o objetivo de consolidar conhecimentos em JavaScript, consumo de APIs com Fetch e manipulação do DOM. A aplicação permite ao usuário buscar perfis na API do GitHub e, caso o usuário exista, exibe informações como: foto de perfil, nome, bio, login, número de seguidores e de seguidos, além de uma lista dos repositórios públicos com dados como watchers, estrelas, forks e linguagem utilizada. Também são exibidos os dez últimos eventos realizados pelo usuário em seus repositórios, quando disponíveis.',
            tecnologias: ['html5', 'css3', 'js-square'],
            link: 'https://bhn-1302.github.io/search-api-github/',
            alt: 'demonstração da tela inicial do projeto de buscar um usuário no GitHub'
        },

        {
            nome: 'Gerador de Conselhos API',
            imagem: "project-two-img.png",
            descricao: 'Este projeto é mais um projeto do Frontend Mentor e é responsável por gerar um conselho aleatório para o usuário. Para que os conselhos fossem gerados, foi utilizado a API "Advice Slip JSON API". Além disso, as palavras-chave async e await foram essenciais para a construção da lógica por trás do funcionamento deste projeto.',
            tecnologias: ['html5', 'css3', 'js-square'],
            link: 'https://bhn-1302.github.io/gerador-de-conselhos/',
            alt: 'demonstração da tela inicial do projeto Gerador de Conselhos'
        },

        {
            nome: 'Formulário de Cadastro com Geração de Ticket',
            imagem: "project-three-img.png",
            descricao: 'Projeto desenvolvido como desafio front-end. A aplicação permite que o usuário envie uma imagem de avatar e preencha um formulário com nome, e-mail e usuário do GitHub. Ao finalizar, um ticket com essas informações é gerado automaticamente.',
            tecnologias: ['html5', 'css3', 'js-square'],
            link: 'https://bhn-1302.github.io/state-form-ticket-generator/',
            alt: 'demonstração da tela inicial do projeto Formulário de Cadastro com Geração de Ticket' 
        },

        {
            nome: 'Agência XYZ',
            imagem: "project-four-img.png",
            descricao: 'Esta landing page é o meu segundo projeto que fiz mas, desta vez, foi criada em aula com a orientação e guia do professor. O objetivo desse projeto foi praticar os conceitos aprendidos de display grid e de display flex, visando principalmente o grid para fixar melhor os seus conceitos não apenas em criações de desktop mas também para a responsividade no mobile.',
            tecnologias: ['html5', 'css3', 'js-square'],
            link: 'https://bhn-1302.github.io/landing-page-agencia/',
            alt: 'demonstração da tela inicial do projeto landing-page de uma agência fictícia' 
        }
    ];

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? projetos.length -1 : prev -1))
    }

    const handleNext = () => {
        setIndex((prev) => (prev === projetos.length -1 ? 0 : prev +1))
    }

  return (
    <section className="projects">
            <motion.h2
            className='gradient-text'
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1.2, ease: "easeOut"}}
    >
        Projetos
    </motion.h2>

       <div className="carousel-container">      
      <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} className="arrow"/>

      <div className="project">
        <div className="project-image-container">
          <img
            className="project-image"
            src={projetos[index].imagem}
            alt={projetos[index].alt}
          />
        </div>

        <div className="project-info">
          <h3 className="project-name">{projetos[index].nome}</h3>
          <p className="project-description">{projetos[index].descricao}</p>

          <ul className="project-icons">
            {projetos[index].tecnologias.map((tech) => (
                <li key={tech}><i className={`fab fa-${tech}`}></i></li>
            ))}
          </ul>

          <a href={projetos[index].link} target="_blank" className="project-link">Link do projeto</a>
          </div>

        </div>

      <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} className="arrow"/>
      </div>

      <Link to={'/contents'}>
        <button className="btn-back-to-contents">Voltar</button>
      </Link>
      
    </section>
  );
};

export { Projects };

