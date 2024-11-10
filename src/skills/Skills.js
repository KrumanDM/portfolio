import React from "react";
import AnimatedText from "../cases/AnimatedTextCases";
import htmlPng from "../images/logos/html.png";
import cssPng from "../images/logos/css.png";
import jsPng from "../images/logos/js.png";
import tsPng from "../images/logos/typescript.png";
import reactPng from "../images/logos/react.png";
import reduxPng from "../images/logos/redux.png";
import gitPng from "../images/logos/git.png";
import githubPng from "../images/logos/github.png";
import postmanPng from "../images/logos/postman.png";
import apiPng from "../images/logos/api.png";
import sassPng from "../images/logos/sass.png";
import muiPng from "../images/logos/mui.png"
import vitePng from "../images/logos/vite.png"
import s from "./Skills.module.css";

function Skills() {
  return (
    <div className={s.skillsBlockContainer}>
      <AnimatedText>
      <h1 className={s.skillsFirstText} id="mainerColumns">
        Skills
      </h1>
      <div className={s.skillsBlock}>
        <div className={s.block}>
          <h2>Frontend</h2>
          <div className={s.descriptionOfBlock}>I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.</div>
          <div className={s.element}>
            <img src={htmlPng} alt="htmlPng" className={s.photo} />
            <img src={cssPng} alt="cssPng" className={s.photo} />
            <img src={jsPng} alt="jsPng" className={s.photo} />
            <img src={tsPng} alt="tsPng" className={s.photo} />
            <img src={reactPng} alt="reactPng" className={s.photo} />
            <img src={reduxPng} alt="reduxPng" className={s.photo} />
            
            <img src={sassPng} alt="sassPng" className={s.photo} />
            <img src={muiPng} alt="muiPng" className={s.photo} />
          </div>
        </div>
        <div className={s.block}>
          <h2>Auxiliary</h2>
          <div className={s.descriptionOfBlock}>And i have experience with a variety of tools and technologies that complement our frontend skills.</div>
          <div className={s.element}>
            
            <img src={gitPng} alt="gitPng" className={s.photo} />
            <img src={vitePng} alt="vitePng" className={s.photo} />
            <img src={postmanPng} alt="postmanPng" className={s.photo} />
            <img src={apiPng} alt="apiPng" className={s.photo} />
            <img src={githubPng} alt="githubPng" className={s.photo} />
          </div>
        </div>
      </div>
      </AnimatedText>
    </div>
  );
}

export default Skills;
