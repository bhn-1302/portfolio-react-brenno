import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./assets/components/about-section/Index";
import { ContentOptions } from "./assets/components/content-options/Index";
import { Projects } from "./assets/components/project-section/Index";
import { Skills } from "./assets/components/skills-section/Index";
import { Contact } from "./assets/components/contact-section/Index";
import { Obrigado } from "./assets/components/thank-you-message/Index";
import { createGlobalStyle } from "styled-components";

import "./App.css";

const GlobalStyle = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
}

  body {
    font-family: 'Roboto', sans-serif;
    background-image: url('/5302920.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  a {
    text-decoration: none;
}

  ul {
    list-style: none;
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/contents" element={<ContentOptions />}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/skills" element={<Skills />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/obrigado" element={<Obrigado />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
