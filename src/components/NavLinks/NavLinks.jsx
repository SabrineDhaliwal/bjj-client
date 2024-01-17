import './NavLinks.scss'; 
import { NavLink, Link } from 'react-router-dom';

function NavLinks(){
    return(
        <section>
              <div className="navLinks__container">
      <Link to={"/"} className="navLinks__link">
            Home
          </Link>
      <NavLink to={"/userprofile/1"} className="navLinks__link">
           My Profile
          </NavLink>
      <NavLink to={"/techs"} className="navLinks__link">
            Techniques
          </NavLink>
      <NavLink to={"/positions"} className="navLinks__link">
            Positons
          </NavLink>
      </div>
        </section>
    )
}

export default NavLinks