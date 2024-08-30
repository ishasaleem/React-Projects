import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';
import { NavStyle } from './NavStyle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';

function ResponsiveNav() {
  const [showElement, setShowElement] = useState({
    navbarnav: true,
    hamburgerIcon: false,
    closeicon: false,
    navOpened: false,
  });
const [pagetitle,setPagetitle]=useState("");
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 600) {
        setShowElement({
          navbarnav: true,
          hamburgerIcon: false,
          closeicon: false,
          navOpened: false,
        });
      } else {
        setShowElement({
          navbarnav: false,
          hamburgerIcon: true,
          closeicon: false,
          navOpened: false,
        });
      }
    };

  }, []);

  const openNavbar = () => {
    setShowElement({
      navbarnav: true,
      hamburgerIcon: false,
      closeicon: true,
      navOpened: true,
    });
  };

  const closeNavbar = () => {
    setShowElement({
      navbarnav: false,
      hamburgerIcon: true,
      closeicon: false,
      navOpened: false,
    });
  };
  const handleactive=(e)=>{
    document.querySelectorAll('.nav-link').forEach((navLink)=>navLink.classList.remove("active"));
  e.target.classList.add("active"); 
setPagetitle(e.target.innerText);}
  return (
    <>
    <NavStyle className={`navbar bg-primary text-light ${showElement.navOpened && 'shownavbar'}`}>
      <nav>
        <div className="navbar-logo">
          <a href="#" className="navbar-brand">
           
          </a>
          {showElement.hamburgerIcon && <GiHamburgerMenu onClick={openNavbar} />}
          {showElement.closeicon && <RxHamburgerMenu onClick={closeNavbar} />}
        </div>
        {showElement.navbarnav? (
          <div className="navbar-collapse">
            <ul className="navbar-items">
              <NavItem text="Home" active="active"onClick={handleactive} />
              <NavItem text="About"onClick={handleactive} />
              <NavItem text="Contact" onClick={handleactive}/>
            </ul>
          </div>
        ):null}
      </nav>
    </NavStyle>
    <h1 className='title text-center '>{!pagetitle?"Home":pagetitle}</h1></>
  );
}

export default ResponsiveNav;
