import "./Navbar.scss";
import logoHorizontal from "../../assets/logos/horizontal_fulllogo_nobuffer.png";
import { Link } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();
  // const handleHome = () => {
  //   console.log("home clicked");
  //   navigate("/userprofile/1");
  // };

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <img
          className="nav__logo"
          src={logoHorizontal}
          alt="Roll & Reflect logo- horizontal"
        />
        <div className="nav__link-container">
          <Link to={'/'} className="nav__link"><p className="nav__link--text">Home</p> </Link>
          <Link to={'/userprofile/1'} className="nav__link"><p className="nav__link--text">My Profile</p></Link>
          <Link to={'/techs'} className="nav__link"><p className="nav__link--text">Techniques</p> </Link> 
          <Link to={'/positions'} className="nav__link"><p className="nav__link--text">Positons</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
