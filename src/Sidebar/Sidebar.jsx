import React, { useState, useEffect, useRef } from 'react';
import s from './Sidebar.module.css';
import burgerButton from '../images/png/burgerButton.png'
import closeIcon from '../images/png/closeIcon.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleHomeClick = () => {
    const slider = document.getElementById("main");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  const handleSkillsClick = () => {
    const slider = document.getElementById("mainerColumns");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  const handleProjectsClick = () => {
    const slider = document.getElementById("cases");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  const handleFooterClick = () => {
    const slider = document.getElementById("footer");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <img src={burgerButton} onClick={handleOpen} />
      <div
        className={`${s.sidebar} ${isOpen ? s.sidebarOpen : ''}`}
        ref={sidebarRef}
      >
        <img src={closeIcon} className={s.closeIcon} onClick={handleClose} />
        <ul className={s.sidebarButtonContainer}>
          <li><button onClick={handleHomeClick} className={s.sidebarButton}>Home</button></li>
          <li><button onClick={handleSkillsClick} className={s.sidebarButton}>Skills</button></li>
          <li><button onClick={handleProjectsClick} className={s.sidebarButton}>Projects</button></li>
          <li><button onClick={handleFooterClick} className={s.sidebarButton}>Contacts</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
