import "./Header.scss";
import logoHorizontal from "../../assets/logos/horizontal_fulllogo_nobuffer.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "../Hamburger/Hamburger";

function Header() {
  // const navigate = useNavigate();
  // const handleHome = () => {
  //   console.log("home clicked");
  //   navigate("/userprofile/1");
  // };

  return (
    <header className="header">
      <div className="header__left">
        <Link to={"/"}>
          <img
            className="header__logo"
            src={logoHorizontal}
            alt="Roll & Reflect logo- horizontal"
          />
        </Link>
      </div>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
