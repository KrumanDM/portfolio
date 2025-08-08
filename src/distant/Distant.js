import React from "react";
import styleContainer from '../common/styles/Container.module.css'

import style from './Distant.module.css';

function Distant() {
  return (
    <div className={style.worksBlock}>
      <div className={`${styleContainer.container} ${style.distantContainer}`}>
        <h2 className={style.title}>I'm looking into remote work options</h2>
        <button className={style.button}>{'Hire me'}
        </button>
      </div>
    </div>
  );
}

export default Distant;