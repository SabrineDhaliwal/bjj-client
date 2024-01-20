import "./LandingPage.scss";
import TransparentIcon from "../../assets/icons/icononly_transparent_nobuffer.png";
import LogoText from "../../assets/icons/textonly_nobuffer.png";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <section className="landingPage">
      <div className="landingPage__logo">
        <img
          src={TransparentIcon}
          alt="Roll & Reflect Logo"
          className="landingPage__img landingPage__img--animation"
        />
        <img
          src={LogoText}
          alt="Roll & Reflect text"
          className="landingPage__img--text landingPage__img"
        />
      </div>
      <div className="landingPage__link">
        <Link to="/login">
          Login
        </Link>
        <Link to="/createaccount">
          Create Account
        </Link>
      </div>
      <div className="landingPage__text">
        <h3>Welcome to Roll & Reflect!</h3>
        <h4>What are we?</h4>
        <p>
          We are a tool you can use to help you keep track of your learning
          throughout your Jiu-Jitsu Journey. This new app is social media meets
          learning tracker. Create a profile, join your club and its existing
          members and start logging your training sessions. With every training
          session, you can upload a video so that you are better able to review
          it and reflect on your learnings.
        </p>
      </div>
    </section>
  );
}
