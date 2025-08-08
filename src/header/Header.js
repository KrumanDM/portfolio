import React, { useEffect, useRef, useState } from "react";



import s from "./Header.module.css";

// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useMediaQuery } from "react-responsive";
import {  Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import Sidebar from "../Sidebar/Sidebar";




export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleOpenSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleHomeClick = () => {
    const slider = document.getElementById("main");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSkillsClick = () => {
    const slider = document.getElementById("mainerColumns");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProjectsClick = () => {
    const slider = document.getElementById("cases");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFooterClick = () => {
    const slider = document.getElementById("footer");
    if (slider) {
      slider.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSidebar]);

  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        {isMobile ? (
          <>
          <Sidebar/>
            {/* <MenuIcon className={s.burger} onClick={handleOpenMobileMenu} />
            {isMobileMenuOpen && <Sidebar onClickOutside={() => setIsMobileMenuOpen(false)} />} */}
          </>
        ) : (
          <div className={s.storeContainer}>
            
            <div onClick={handleHomeClick}><Home/> </div>
            <div onClick={handleSkillsClick}><Skills/></div>
            <div onClick={handleProjectsClick}><Projects/></div>
            <div onClick={handleFooterClick}><Contact/></div>
            
          </div>
        )}

        {/* <a className={s.logo} href="/plitka">
          Plitka
        </a> */}

        <div className={s.userContainer}>
          <div onClick={handleOpenSearch} className={s.searchContainer}>
            {/* {isSearchOpen && <SearchForm open={isSearchOpen} handleOpen={handleOpenSearch}/>}
            <SearchIcon /> */}
          </div>
          <div className={s.profile}>
            {/* <Link to="/profile">
              <AccountCircleIcon/>
            </Link> */}
          </div>
          <div className={s.busket}>
            {/* <Link to="/busket">
              <ShoppingBasketOutlinedIcon/>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};


