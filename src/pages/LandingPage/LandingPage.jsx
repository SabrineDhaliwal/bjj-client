import "./LandingPage.scss";
import TransparentIcon from "../../assets/icons/icononly_transparent_nobuffer.png";
import LogoText from "../../assets/icons/textonly_nobuffer.png"
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="page">
      <div className="logo">
        <img src={TransparentIcon} alt="Roll & Reflect Logo" className="logo__img logo__img--animation" />
        <img src={LogoText} alt="Roll & Reflect text" className="logo__img"/> 
      </div>
      <div className='link'>
        <Link to="/login">
          <p className="link__text">Login</p>
        </Link>
        <Link to='/createaccount'>
          <p className="link__text">Create Account</p>
        </Link>
      </div>
      <div>
        <h3>Welcome to Roll & Reflect!</h3>
        <div>
            <h4>What are we?</h4>
        <p>We are a tool you can use to help you keep track of your learning throughout your Jiu-Jitsu Journey. This new app is social media meets learning tracker. Create a profile, join your club and its existing members and start logging your training sessions. 
With every training session, you can upload a video so that you are better able to review it and reflect on your learnings. 


        </p>
        </div>
       
      </div>
    </div>
  );
}

export default LandingPage;
