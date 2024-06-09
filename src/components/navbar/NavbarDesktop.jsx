import React from "react";
import "./Navbar.css";

const NavbarDesktop = () => {
  const iconsArray = [
    {
      name: "search",
      url: "/Icons/SearchIcon.svg",
    },
    {
      name: "tabs",
      url: "/Icons/Component2.svg",
    },
    {
      name: "instance",
      url: "/Icons/Component3.svg",
    },
    {
      name: "instance",
      url: "/Icons/Component4.svg",
    },
    {
      name: "timelapse",
      url: "/Icons/Component6.svg",
    },
    {
      name: "message",
      url: "/Icons/Component7.svg",
    },
  ];
  return (
    <div className="navbarDesktopContainer">
      <div className="navSec1">
        {iconsArray.map((icon) => (
          <span key={icon.name} className="cursorPointer">
            <img src={icon.url} alt="" />
          </span>
        ))}
      </div>
      <div className="navSec2">
        <span className="cursorPointer">
          <img src="/Icons/FourDots.svg" alt="" />
        </span>
        <img className="profilePicture cursorPointer" src="/Images/profileImg.jpg" alt="" />
      </div>
    </div>
  );
};

export default NavbarDesktop;
