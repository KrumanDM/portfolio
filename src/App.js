import React, { useEffect, useState } from "react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { MainColumns } from "./MainColumns/MainColumns";
import { Footer } from "./footer/Footer";
import { CustomCursor } from "./CustomCursor/CustomCursor";
import { Flipper } from "./MainColumns/Flipper";
import { Cases } from "./cases/Cases";
import Skills from "./skills/Skills";
import s from "./App.module.css"
import { Arrow } from "./Arrow";


const App = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <div className={s.App}>
      {/* <CustomCursor /> */}
      
      <Header />
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={s.backToTopButton}
        >
          <Arrow/>
        </button>
      )}
      <Main />
      <Skills/>
      {/* <MainColumns /> */}
      {/* <Flipper/> */}
      <Cases/>
      <Footer />
      
    </div>
  );
};

export default App;




