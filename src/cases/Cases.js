import React, { useEffect } from "react";
import AnimatedText from "./AnimatedTextCases";
import s from "./Cases.module.css";
import store1 from "../images/screenshots/store1.png";
import store2 from "../images/screenshots/store2.png";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const Cases = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Ваши настройки
    });
  }, []);

  return (
    <>
      <AnimatedText>
        <h1 className={s.titleProjects}>Projects</h1>
        <div className={s.casesContainer} id="gallery-wrap">
        
          <a
            id="cases"
            href={store1}
            
            data-fancybox="gallery"
            data-caption="Caption #1"
          >
            <img className={s.case} src={store1} alt="Store 1" />
          </a>
          
          
          <a href={store2} data-fancybox="gallery" data-caption="Caption #2">
            <img className={s.case} src={store2} alt="Store 2" />
          </a>
          
        </div>
      </AnimatedText>
    </>
  );
};
