import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

function HiddenSearchBarApp() {
  const [uiprops, setUiprops] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    borderBottomColor: "#fff",
    showSearchIcon: true,
    showsearchBar: false,
  });
  
  const inputEl = useRef(null);

  const body = document.body.style;
  const inputstyle = {
    margin: "10vh 25vw",
    height: "30px",
    width: "20vh",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "white",
    fontSize: "1.3rem",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.7)",
    opacity: uiprops.opacity,
    transition: "all .3s ease",
    borderBottom: `1px solid ${uiprops.borderBottomColor}`,
  };
  const BsSearchstyle = {
    color: "#fff",
    cursor: "pointer",
    position: "absolute",
    top: "30px",
    right: "800px",
    fontSize: "50px",
  };

  useEffect(() => {
    body.background = uiprops.bg;
    body.boxShadow = uiprops.shadow;
    body.transition = uiprops.transition;
    if (uiprops.showsearchBar) {
      inputEl.current.focus();
    }
  }, [uiprops]);

  const showsearch = () => {
    setUiprops({
      
      opacity: 1,
      showSearchIcon: false,
      showsearchBar: true,
    });
  };

  const handlesearchfocus = () => {
    setUiprops({
      
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
      borderBottomColor: "green",
    });
  };

  const handlesearchblur = () => {
    setUiprops({
      ...uiprops,
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
      showsearchBar: false,
    });
  };

  return (
    <div className='container' style={{ height: "100vh" }}>
      {uiprops.showSearchIcon ? (
        <BsSearch style={BsSearchstyle} onClick={showsearch} />
      ) : (
        <input
          ref={inputEl}
          onBlur={handlesearchblur}
          onFocus={handlesearchfocus}
          style={inputstyle}
          type="text"
          placeholder='search'
        />
      )}
    </div>
  );
}

export default HiddenSearchBarApp;
