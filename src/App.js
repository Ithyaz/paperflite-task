import React, { useEffect, useState } from "react";
import "./App.css";
import NavbarMobile from "./components/navbar/NavbarMobile";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import Maincontent from "./components/Main";
const App = () => {
  const [displayWidth,setDisplayWidth] =useState(window.innerWidth) 
  useEffect(() => {
    const handleResize = () => {
      setDisplayWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="main">
      <div className="body">
        <Maincontent displayWidth={displayWidth} />
      </div>
      <div className="nav">
        {displayWidth >= 768 ? <NavbarDesktop /> : <NavbarMobile />}
      </div>
    </div>
  );
};

export default App;
