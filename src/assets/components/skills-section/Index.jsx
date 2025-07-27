import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faGithub,
  faGitAlt,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import './Index.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <section className="skills">
        <motion.h2
            className='gradient-text'
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1.2, ease: "easeOut"}}
    >
        Skills
    </motion.h2>

      <ul className="skills-icons">
        <li><FontAwesomeIcon icon={faHtml5} /><span className='react-text'>HTML 5</span></li>
        <li><FontAwesomeIcon icon={faCss3} /><span className='react-text'>CSS 3</span></li>
        <li><FontAwesomeIcon icon={faJsSquare} /><span className='react-text'>JavaScript</span></li>
        <li><FontAwesomeIcon icon={faGithub} /><span className='react-text'>GitHub</span></li>
        <li><FontAwesomeIcon icon={faGitAlt} /><span className='react-text'>GIT</span></li>
        <li><FontAwesomeIcon icon={faReact}/><span className='react-text'>React.js</span></li>
      </ul>

      <Link to={'/contents'}>
        <button className='btn-back-to-contents'>Voltar</button>
      </Link>
    </section>
  );
};

export { Skills };
