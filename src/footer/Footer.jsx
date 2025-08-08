import React from "react";

import s from "./Footer.module.css";
import telegram from "../images/png/icons8-telegram-50.png"
import instagram from "../images/png/instagram.png"
import vk from "../images/png/vk.png"
import whatsapp from "../images/png/whatsapp.png"

export const Footer = () => {

  const handleContactClick = () => {
    window.location.href = 'mailto:dkryman@mail.com';
  };

  return (
    <div className={s.mainFooterContainer} id="footer">
      <div className={s.footerContainer}>
        <h2 >I’m always up for a chat.</h2>
        
        <h2>
          <span className={s.underlinedText} onClick={handleContactClick}>Pop me an email</span> at dkryman@mail.ru<p></p> or give me a shout on social
          media.
        </h2>

        <div className={s.footerLinks}>
          <a className={s.footerLink} href="https://t.me/stray_fall">
            <img src={telegram} alt="telegram" className={s.photo}></img>
          </a>
          <a className={s.footerLink} href="https://t.me/stray_fall">
            <img src={instagram} alt="instagram" className={s.photo}></img>
          </a>
          <a className={s.footerLink} href="https://t.me/stray_fall">
            <img src={vk} alt="vk" className={s.photo}></img>
          </a>
          <a className={s.footerLink} href="https://t.me/stray_fall">
            <img src={whatsapp} alt="whatsapp" className={s.photo}></img>
          </a>
        </div>
      </div>
    </div>
  );
};
