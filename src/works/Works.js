import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";
import style from './Works.module.css';

function Works() {
  return (
    <div className={style.worksBlock}>
      <div className={`${styleContainer.container} ${style.worksContainer}`}>
        <h2 className={style.title}>Works</h2>
        <div className={style.works}>
        <Work button={"Смотреть"} projectTitle={"todolist"} description={"work on todolist"} />
        <Work button={"Смотреть"} projectTitle={"skatemap"} description={"work on skatemap"}/>
        </div>
      </div>
    </div>
  );
}

export default Works;