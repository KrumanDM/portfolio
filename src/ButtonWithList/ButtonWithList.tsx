import React, { useState } from 'react';
import './ButtonWithList.css';

export const ButtonWithList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <div className="dropdown" onMouseEnter={toggleOpen} onMouseLeave={close}>
      Наведите или нажмите здесь
      {isOpen && (
        <div className="list">
          <div>Dima</div>
          <div>Kate</div>
          <div>Jake</div>
        </div>
      )}
    </div>
  );
};
