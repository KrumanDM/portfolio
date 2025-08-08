import React, { useEffect, useRef } from "react";
import s from "./CustomCursor.module.css";

export const CustomCursor = () => {
  const cursorRef = useRef(null); // Create a ref for the custom cursor
  const scrollTopRef = useRef(0); // Create a ref to store the current scroll top position

  useEffect(() => {
    // console.log('useEffect called');
    // console.log('cursorRef:', cursorRef);
    document.body.style.cursor = "none"; // Hide the default cursor

    const handleMouseMove = (e) => {
      console.log('handleMouseMove called');
      console.log('e.pageY:', e.pageY);
      console.log('scrollTopRef.current:', scrollTopRef.current);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY - scrollTopRef.current}px`; // Subtract scrollTopRef.current from e.pageY
      }
    };

    const handleScroll = () => {
      scrollTopRef.current = window.scrollY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={`${s.customCursor} ${s.customCursorActive}`} ref={cursorRef}></div>;
};