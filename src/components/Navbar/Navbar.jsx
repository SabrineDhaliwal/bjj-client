import "./Navbar.scss";
import Button from "../Buttons/Buttons";
import logoHorizontal from "../../assets/logos/horizontal_fulllogo_nobuffer.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleHome = () => {
    console.log("home clicked");
    navigate("/userprofile/1");
  };

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <img
          className="nav__logo"
          src={logoHorizontal}
          alt="Roll & Reflect logo- horizontal"
        />
        <div className="nav__btn-container">
          <Button text="Home" clickHandler={handleHome}/>
          {/* <Button text="Calendar" />
          <Button text="Add Summary" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
