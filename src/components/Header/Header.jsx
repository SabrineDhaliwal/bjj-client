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
      {/* <div className="nav__link-container">
      <Link to={"/"} className="nav__link">
            <p className="nav__link--text">Home</p>{" "}
          </Link>
      <Link to={"/userprofile/1"} className="nav__link">
            <p className="nav__link--text">My Profile</p>
          </Link>
      <Link to={"/techs"} className="nav__link">
            <p className="nav__link--text">Techniques</p>{" "}
          </Link>
      <Link to={"/positions"} className="nav__link">
            <p className="nav__link--text">Positons</p>
          </Link>
      </div> */}
    </header>
  );
}

export default Header;
