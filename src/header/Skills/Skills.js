import React, { useState } from "react";

import s from "./Skills.module.css";




export const Skills = () => {
  // Создаем переменную состояния для хранения видимости блока меню
  const [showMenu, setShowMenu] = useState(false);

  // Создаем функцию для показа блока меню при наведении на ссылку
  const showMenuHandler = () => {
    setShowMenu(true);
  };

  // Создаем функцию для скрытия блока меню при убирании мыши с блока
  const hideMenuHandler = () => {
    setShowMenu(false);
  };

   // Предотвращаем переход по ссылке href={'#'}
   const linkClickHandler = (event) => {
    event.preventDefault();
    showMenuHandler();
  };

  return (
    <>
    <button className={s.clothingContainer}>
      <a
        // Добавляем обработчик события onMouseOver для показа блока меню
        onMouseOver={showMenuHandler}
        onClick={linkClickHandler}
        className={s.clothingContainer}
        href={"/#"}
      >
        Skills
      </a>
      
    </button>
    </>
  );
};
