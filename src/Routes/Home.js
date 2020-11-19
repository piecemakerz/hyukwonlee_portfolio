import React from "react";
import { FullPage, Slide } from "react-full-page";

import Header from "../Component/Partials/Header";
import Main from "../Component/Partials/Main";
import About from "../Component/Partials/About";
import Skills from "../Component/Partials/Skills";
import ProjectWeb from "../Component/Partials/ProjectWeb";
import ProjectApp from "../Component/Partials/ProjectApp";
import Contact from "../Component/Partials/Contact";

export default React.memo(() => {
  return (
    <FullPage controls={Header}>
      <Slide>
        <Main />
      </Slide>
      <Slide>
        <About />
      </Slide>
      <Slide>
        <Skills />
      </Slide>
      <Slide>
        <ProjectWeb />
      </Slide>
      <Slide>
        <ProjectApp />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
  );
});
