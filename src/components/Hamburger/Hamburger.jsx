import "./Hamburger.scss";
import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";

function HamburgerMenu() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visable");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="hamburger__wrapper">
      <nav>
         {/* three lines that make up the clickable menubar */}
        <div className="hamburger__bar" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>

      <div className={menuClass}>
        <NavLinks />
      </div>
    </div>
  );
}

export default HamburgerMenu;
