import React from "react";
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import cupOfCoffee from '../images/cupOfCoffee.png'
import steam from '../images/steam.png'

export const Main = () => {

  const handleContactClick = () => {
    window.location.href = 'mailto:dkryman@mail.com';
  };
  
  return (
    <div className={s.mainBlock} id="main">
      
      <div className={s.container}>
        <div className={s.text}>
           <div className={s.h1Main} style={{ fontSize: '30px'}}>Hi there</div>
        
           <div className={s.h1Main}> 
             <span>
             <h1 className={s.h1Main}>I am <span style={{ color: '#0361be' }}>Dmitry Kruman</span></h1>
               <h1 className={s.h1Main}>Frontend Developer</h1>
               <button className={s.contactButton} onClick={handleContactClick}>
                 Contact</button>
             </span>
           </div>
        
           
        </div>
      <div className={s.photo}>
      {/* <div className={s.cupWrap}>
    

    <div className={s.smokeWrap}>
      <img className={s.smoke} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke2} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke2} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
    <div className={s.smokeWrap}>
      <img className={s.smoke3} src={steam} alt="smoke"/>
    </div>
  </div> */}
      </div>
        </div>
      
    </div>
  );
}


