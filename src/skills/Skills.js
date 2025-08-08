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

  function TooltipIcon({ src, label }) {
    return (
      <div className={s.iconWrapper}>
        <img src={src} alt={label} className={s.photo} />
        <span className={s.tooltip}>{label}</span>
      </div>
    );
  }
  
  

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
            <TooltipIcon  src={htmlPng} label="HTML" alt="htmlPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={cssPng} label="CSS" alt="cssPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={jsPng} label="JAVASCRIPT" alt="jsPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={tsPng} label="TYPESCRIPT" alt="tsPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={reactPng} label="REACT" alt="reactPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={reduxPng} label="REDUX" alt="reduxPng" className={s.photo} loading="lazy"/>
            
            <TooltipIcon src={sassPng}label="SAAS" alt="sassPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={muiPng}label="MATERIAL UI" alt="muiPng" className={s.photo} loading="lazy"/>
          </div>
        </div>
        <div className={s.block}>
          <h2>Auxiliary</h2>
          <div className={s.descriptionOfBlock}>And i have experience with a variety of tools and technologies that complement our frontend skills.</div>
          <div className={s.element}>
            
            <TooltipIcon src={gitPng} label="GIT" alt="gitPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={vitePng} label="VITE" alt="vitePng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={postmanPng} label="POSTMAN" alt="postmanPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={apiPng} label="API" alt="apiPng" className={s.photo} loading="lazy"/>
            <TooltipIcon src={githubPng} label="GITHUB" alt="githubPng" className={s.photo} loading="lazy"/>
          </div>
        </div>
      </div>
      </AnimatedText>
    </div>
  );
}

export default Skills;
