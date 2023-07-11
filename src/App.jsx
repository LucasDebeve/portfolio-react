import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Separator from "./components/Separator";
import MultiFilters from "./components/MultiFilters";
import Footer from "./components/Footer";
import { content } from "./data/content";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLanguage,
  faCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faGitlab,
  faNpm,
  faPhp,
  faPython,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

library.add(
  faLanguage,
  faCode,
  faDatabase,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faGitlab,
  faNpm,
  faPhp,
  faPython,
  faYoutube,
  faLinkedin
);

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <motion.div
          className="hero__title"
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Je suis {content.name} {content.lastname} <br />étudiant en Informatique
        </motion.div>
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
      <Separator />
      <Card id="skills" title="Mes compétences">
        <MultiFilters
          items={content.skills}
          categories={content.skillsCategory}
        />
      </Card>
      <Separator />
      <Card id="projects" title="Mes projets">
        <MultiFilters
          items={content.projects}
          categories={content.technologies}
          className="big"
        />
      </Card>
      <Separator />
      <Card id="contact" title="Comment me contacter ?">
        <div className="info r">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41667.25550401116!2d4.013908581294216!3d49.253589248850574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e974334a533b09%3A0x40a5fb99a3b45c0!2s51100%20Reims!5e0!3m2!1sfr!2sfr!4v1689095743413!5m2!1sfr!2sfr"
            loading="lazy"
          ></iframe>
          <div className="contact">
            <a href="mailto:lucas.debeve2003@gmail.com">
              lucas.debeve2003@gmail.com
            </a>
            <a href="tel:+336 21 35 10 87">06 21 35 10 87</a>
            <p>51100, Reims, France</p>
          </div>
        </div>
      </Card>
      <Separator />
      <Footer networks={content.networks} />
    </>
  );
}

export default App;
