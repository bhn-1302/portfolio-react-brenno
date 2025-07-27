import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Index.css";

const Contact = () => {
  
  return (
    <section className="contact-section">
      <motion.h2
        className="gradient-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Contato
      </motion.h2>

      <p className="contact-message">
        Caso tenha se interessado pelo meu trabalho, entre em contato comigo
        preenchendo o formulário abaixo:
      </p>

      <form
        className="form"
        target="_blank"
        action="https://formsubmit.co/nascimenttobrenno1302@gmail.com"
        method="POST"
        onSubmit={(e) => {
          const email = e.target.email.value;

          if (!email.includes("@")) {
            alert("Digite um e-mail válido.");
            e.preventDefault();
          }
        }}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://localhost:5173/obrigado"
        />

        <div>
          <label htmlFor="nome" />
          <input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            className="campo"
            name="nome"
            required
          />
        </div>

        <div>
          <label htmlFor="email" />
          <input
            type="text"
            id="email"
            placeholder="Digite seu e-mail"
            className="campo"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="mensagem" />
          <textarea
            id="mensagem"
            placeholder="Digite sua mensagem"
            className="campo-mensagem"
            name="mensagem"
            required
          ></textarea>
        </div>

        <button className="btn-submit" type="submit">
          Enviar
        </button>
      </form>

      <Link to={"/contents"}>
        <button className="btn-back-to-contents">Voltar</button>
      </Link>
    </section>
  );
};

export { Contact };
