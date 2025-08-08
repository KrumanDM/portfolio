import React from "react";
import styleContainer from '../common/styles/Container.module.css'

import style from './Contacts.module.css';

function Contacts() {
  return (
    <div className={style.worksBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
      <h2 className={style.title}>Contacts</h2>
      <form className={style.formContainer}>
          <input></input>
          <input></input>
          <textarea></textarea>
      </form>
      <button className={style.button}>Отправить</button>
      </div>
    </div>
  );
}

export default Contacts;