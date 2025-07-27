import "./Index.css";
import { Link } from "react-router-dom";

const ContentOptions = () => {
  return (
    <section className="content-options-section">
      <div className="main-content">
        <div className="options">
          <h2>Escolha qual conteúdo deseja acessar</h2>

          <ul className="content-list">
            <li>
              <div className="content">
                <h3>Projetos</h3>
                <Link to={"/projects"}>
                  <button>Acessar</button>
                </Link>
              </div>
            </li>
            <li>
              <div className="content">
                <h3>Competências</h3>
                <Link to={"/skills"}>
                  <button>Acessar</button>
                </Link>
              </div>
            </li>
            <li>
              <div className="content">
                <h3>Contato</h3>
                <Link to={"/contact"}>
                  <button>Acessar</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="author-description">
          <p>
            Atualmente em formação na área de Desenvolvimento Web, com
            conhecimentos sólidos em HTML, CSS e JavaScript. Já concluí módulos
            fundamentais de front-end, incluindo lógica de programação, consumo
            de APIs com Fetch e manipulação de DOM. Possuo conhecimento em
            Testes Automatizados com Jest e desenvolvimento com React. Sou uma
            pessoa dedicada, proativa e criativa, com facilidade para trabalhar
            em equipe e resolver problemas. Busco minha primeira oportunidade
            como desenvolvedor front-end júnior para aplicar meus conhecimentos,
            colaborar em projetos reais e continuar evoluindo técnica e
            profissionalmente.
          </p>
        </div>

        <div className="profile-photo">
          <img src="profile-photo.jpg" alt="foto de perfil" />
        </div>
      </div>
      <Link to={'/'}>
        <button className="btn-back-to-start">Voltar</button>
      </Link>
    </section>
  );
};

export { ContentOptions };
