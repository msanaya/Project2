import React from "react";
import { slide as Menu } from "react-burger-menu";

function BurgerMenu(props) {

  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/components/display">
        Display
      </a>

      <a className="menu-item" href="/components/create">
        Create
      </a>
    </Menu>
  );
};

export default BurgerMenu;