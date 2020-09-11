import React from "react";
import { Link } from 'react-router-dom';
import "../styling/Header.css";
// import BurgerMenu from "./BurgerMenu";

function Header() {
  return (
    <div className="Header">
      {/* <div id="big">TRACKERISTA</div> */}
      <h1 className="small">Trackerista</h1>
      <nav id="navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="components/display">Display</Link>
        <Link className="links" to="/components/createPage">Create</Link>
      </nav>
      <div id="burger-menu">
      {/* <BurgerMenu /> */}
      </div>
      
    </div>
  )
}

export default Header