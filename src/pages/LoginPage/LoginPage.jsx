import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from "../../components/Buttons/Buttons";
import logo from "../../assets/logos/print.svg";
import "./LoginPage.scss";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({uername: "", password: ""});
  //   const [createAccount, setCreateAccount] = useState("createAccount");
  const navigate = useNavigate();

    function handleCreateAccount(event) {
        console.log("handle Create Account", event)
        console.log("Clicked create account");
        event.preventDefault();
        navigate('/createaccount')
      }


    const isInputValid = () => {
        let errors = { username: "", password:"" };

        if (!username) {
            errors.username = "Username is required";
        }

        if (!password) {
            errors.password = 'Password is required';
        }

        setFormErrors(errors);
        // Return true if no errors, false otherwise
        return !(errors.username || errors.password);


    }


  function handleOnSubmit(event) {
    event.preventDefault();
    if (isInputValid() ) {
    console.log("username:", username);
    console.log("password", password);

    //TODO add useNavigate if passes validation to landingPage
    //validation needs to check information in database users table
    // history.push("/CreateAccountPage")
    }else {
        console.log('Errors on form')
    }
  }
  return (
    <div className="body">
      <img className="logo" src={logo} alt="Roll & Reflect Logo" />

      <h2>Welcome Back {username}</h2>
      <div className="form__wrapper">
        <form 
        className="form__form"
        onSubmit={handleOnSubmit}>
          <label className="form__label">Username</label>
          <input
            type="text"
            className="form__field"
            name="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
          />
           {formErrors.username && (
          <div className="form__error-message">{formErrors.username}</div>
        )}
          <label className="form__label" id="password">Password</label>
          <input
            type="password"
            className="form__field"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
          />
           {formErrors.password && (
          <div className="form__error-message">{formErrors.password}</div>
        )}

          <div className="btn-container">
          <Button text= "Login" />
          
            <Button
              text="Create an Account"
              type="button"
              onClick={(event) => handleCreateAccount}
              
            />
           
          </div>
        </form>
      </div>

      <p className="quote">
        Learning to grapple can be a real twisty journey, but remember, every
        submission brings you one step closer to becoming a master of your own
        fate!
      </p>
    </div>
  );
}

export default LoginPage;
