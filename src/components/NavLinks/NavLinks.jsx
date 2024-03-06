import "./NavLinks.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";

function NavLinks() {
  const navigate = useNavigate()
  const user_id = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token");

  const handleLogout =(e) =>{
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem('token');
    navigate('/');

  }

  return (
    <section>
      <div className="navLinks__container">
        <Link to={"/"} className="navLinks__link">
          Home
        </Link>
        {token && user_id ? (
          <NavLink to={`/profile/${user_id}`} className="navLinks__link">
            My Profile
          </NavLink>
        ) : (
          <NavLink to={"/login"} className="navLinks__link">
            My Profile
          </NavLink>
        )}

        <NavLink to={"/techs"} className="navLinks__link">
          Techniques
        </NavLink>
        <NavLink to={"/positions"} className="navLinks__link">
          Positons
        </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </section>
  );
}

export default NavLinks;
