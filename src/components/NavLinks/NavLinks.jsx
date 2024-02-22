import './NavLinks.scss'; 
import { NavLink, Link } from 'react-router-dom';

function NavLinks(){

  const user_id = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token")


    return(
        <section>
              <div className="navLinks__container">
      <Link to={"/"} className="navLinks__link">
            Home
          </Link>
          {token && user_id ? (
            <NavLink to={`/profile/${user_id}`} className="navLinks__link">
           My Profile
          </NavLink>
              ): (
                <NavLink to={"/login"} className="navLinks__link">
                  My Profile 
                </NavLink>
              )
      }
          
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