import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Separator from "./components/Separator";
import MultiFilters from "./components/MultiFilters";
import { content } from "./data/content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLanguage, faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faGitAlt, faGithub, faGitlab, faNpm, faPhp, faPython } from "@fortawesome/free-brands-svg-icons";

library.add(faLanguage, faCode, faDatabase, faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faGitAlt, faGithub, faGitlab, faNpm, faPhp, faPython);

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1 className="hero__title">
          Je suis {content.name} {content.lastname}
        </h1>
        <h2 className="hero__title">étudiant en Informatique</h2>
      </div>
      <Card id="about" title="Qui suis-je ?">
        <div className="info">
          <img
            src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
            alt="img"
          />
          <p dangerouslySetInnerHTML={{ __html: content.presentation }}></p>
        </div>
      </Card>
      <Separator></Separator>
      <Card id="skills" title="Mes compétences">
        <MultiFilters items={content.skills} categories={content.skillsCategory} />
      </Card>
      <Separator></Separator>
    </>
  );
}

export default App;
