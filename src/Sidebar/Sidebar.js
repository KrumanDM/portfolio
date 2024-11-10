import React, { useState, useEffect, useRef } from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

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
      <button className={s.sidebarButton} onClick={handleOpen}>Открыть Sidebar</button>
      {isOpen && (
        <div ref={sidebarRef} className={`${s.sidebar} ${s.sidebarOpen}`}>
          <button onClick={handleClose}>Закрыть</button>
          <ul>
            <li><button className={s.sidebarButton}>Hello</button></li>
            <li><button className={s.sidebarButton}>Hi</button></li>
            <li><button className={s.sidebarButton}>Thanks</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
