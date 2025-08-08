import React from "react";

import style from './Work.module.css';

function Work(props) {
  return (
    <div className={style.skill}>
      <div className={style.image}>
        <button>{props.button}</button>
      </div>
      <div className={style.projects}>
      <span className={style.projectTitle}>{props.projectTitle}</span>
      <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Work;