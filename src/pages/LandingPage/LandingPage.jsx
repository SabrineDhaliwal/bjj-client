import "./LandingPage.scss";
import CenterLogo from "../../assets/logos/vertical_fulllogo.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="page">
      <div className="logo">
        <img src={CenterLogo} alt="Roll & Reflect Logo" className="logo__img" />
      </div>
      <div>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/createacount">
          <p>Create Account</p>
        </Link>
      </div>
      <div>
        <h1>About</h1>
        <p>Brief description about what Roll & Reflect</p>
      </div>
    </div>
  );
}

export default LandingPage;
