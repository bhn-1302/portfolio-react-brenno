import "./Index.css";
import { Link } from "react-router-dom";
import { BotaoAnimado } from "./BtnMotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about-section">
      <h1>Sobre mim</h1>
      <p>
        Olá! Meu nome é <span>Brenno Henrique Do Nascimento</span> e este é o ínicio do meu
        portfólio.
      </p>
      <Link to={"/contents"}>
        <BotaoAnimado>Acessar conteúdos</BotaoAnimado>
      </Link>

      <ul className="links">
        <li className="link">
          <a href="mailto:nascimenttobrenno1302@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
        </li>

        <li className="link">
          <a
            href="https://www.instagram.com/dev.bhn1302?igsh=eTJ4bG13ZHp4aXBj"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </li>

        <li className="link">
          <a
            href="https://www.linkedin.com/in/brenno-henrique-nascimento"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </li>

        <li className="link">
          <a
            href="https://api.whatsapp.com/send?phone=5512996355942&text=Olá, sou Brenno Henrique do Nascimento!"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
        </li> 

        <li className="link">
          <a
            href="https://github.com/bhn-1302"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export { About };
