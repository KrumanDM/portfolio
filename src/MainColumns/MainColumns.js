import React, { useState } from "react";
import AnimatedText from "../cases/AnimatedTextCases";
import s from "./MainColumns.module.css";

export const MainColumns = () => {
  const [flippedFirst, setFlippedFirst] = useState(false);
  const [flippedSecond, setFlippedSecond] = useState(false);
  const [flippedThird, setFlippedThird] = useState(false);
  const [flippedFourth, setFlippedFourth] = useState(false);

  const handleFlipFirst = () => {
    setFlippedFirst(!flippedFirst);
  };
  const handleFlipSecond = () => {
    setFlippedSecond(!flippedSecond);
  };
  const handleFlipThird = () => {
    setFlippedThird(!flippedThird);
  };
  const handleFlipFourth = () => {
    setFlippedFourth(!flippedFourth);
  };

  return (
    <>
      <h1 className={s.titleSkills} id="mainerColumns">
        <AnimatedText>Skills</AnimatedText></h1>
      <div className={s.MainerColumns} >
        <div
          className={s.MainColumns}
          style={{
            transform: flippedFirst ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.5s",
          }}
          onClick={handleFlipFirst}
        >
          <div className={s.Column1}>
            <div className={s.SkillsBlock}>HTML, CSS</div>{" "}
            {/* Add this element */}
          </div>
          <div className={s.Column1Back}>
            {flippedFirst ? "Здарова, тут типа описание" : ""}
            <div className={s.SkillsBlockBack}>HTML, CSS</div>
          </div>
        </div>

        <div
          className={s.MainColumns}
          style={{
            transform: flippedSecond ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.5s",
          }}
          onClick={handleFlipSecond}
        >
          <div className={s.Column2}>
            <div className={s.SkillsBlock}>JAVASCRIPT, TYPESCRIPT</div>{" "}
            {/* Add this element */}
          </div>
          <div className={s.Column1Back}>
            {flippedSecond ? "Здарова, тут типа описание" : ""}
            <div className={s.SkillsBlockBack}>JAVASCRIPT, TYPESCRIPT</div>
          </div>
        </div>

        <div
          className={s.MainColumns}
          style={{
            transform: flippedThird ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.5s",
          }}
          onClick={handleFlipThird}
        >
          <div className={s.Column3}>
            <div className={s.SkillsBlock}>REACT</div> {/* Add this element */}
          </div>
          <div className={s.Column1Back}>
            {flippedThird ? "Здарова, тут типа описание" : ""}
            <div className={s.SkillsBlockBack}>REACT</div>
          </div>
        </div>

        <div
          className={s.MainColumns}
          style={{
            transform: flippedFourth ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.5s",
          }}
          onClick={handleFlipFourth}
        >
          <div className={s.Column4}>
            <div className={s.SkillsBlock}>UNIT TESTS, GIT</div>{" "}
            {/* Add this element */}
          </div>
          <div className={s.Column1Back}>
            {flippedFourth ? "Здарова, тут типа описание" : ""}
            <div className={s.SkillsBlockBack}>UNIT TESTS, GIT</div>
          </div>
        </div>
      </div>
    </>
  );
};
