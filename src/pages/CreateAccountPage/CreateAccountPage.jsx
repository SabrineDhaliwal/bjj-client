import Button from "../../components/Buttons/Buttons";
import "./CreateAccountPage.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function CreateAccountPage() {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();


  //form validations
  const validate = (values) => {
    const errors = {};
    // if (!values.first_name) {
    //   errors.first_name = "Required Field";
    // } else if (values.first_name.length > 20) {
    //   errors.first_name = "Name must be less than 20 characters";
    // }

    // if (!values.last_name) {
    //   errors.last_name = "Required Field";
    // } else if (values.last_name.length > 20) {
    //   errors.last_name = "Must be less than 20 characters";
    // }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    // add validation that checks emails against database of user

    // if (!values.username) {
    //   errors.username = "Username required";
    // } else if (values.username.length < 1) {
    //   errors.username = "Username too short";
    // }

    // add validation that checks username against database of user
    if (!values.password) {
      errors.password = "Password required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    // if (!values.belt_rank) {
    //   errors.belt_rank = "Please select a belt";
    // }
    // return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      // username: "",
      password: "",
      confirmPassword: "",
    },

    //call validation
    validate,

    onSubmit: (values) => {
      console.log("onSubmit formik", values);
      //posting new user to database
      axios
      .post(`${API_URL}/login/newuser`, values)
      .then((response)=> {
        console.log("response", response)
      })
      .catch((err)=> {
        console.error("error posting new user FE", err)
      })
    },
  });

  const handleCancelClick = () => {
    // console.log("click");
    navigate("/");
  };

  const handleHaveAccount = () => {
    navigate("/login");
  };
  return (
    <div className="create-page">
      <div className="create-page__wrapper">
        <h1>Create an Account</h1>
        

        <form onSubmit={formik.handleSubmit}>
          <div className="create-form__wrapper">
            <div className="create-form__input-set">
              <label className="create-form__label">E-mail: </label>
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <input
                id="email"
                type="email"
                name="email"
                className={
                  formik.errors.email
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                placeholder="jane@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            {/* <div className="create-form__input-set">
              <label className="create-form__label">Username: </label>
              {formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
              <input
                id="username"
                type="text"
                name="username"
                placeholder="JaneDoeBJJnewbie"
                className={
                  formik.errors.username
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.username}
              />
             
            </div> */}
            <div className="create-form__input-set">
              <label className="create-form__label">Password </label>
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className={
                  formik.errors.password
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.password}
              />
             
            </div>

            <div className="create-form__input-set">
              <label className="create-form__label">Confirm Password </label>
              {formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={
                  formik.errors.confirmPassword
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </div>

            <div className="btn-container">
              <Button
                text="Yes! create my account"
                type="submit"
                classname="btn__main"
              />
              <Button
                text="No, I'm not ready yet"
                type="reset"
                clickHandler={handleCancelClick}
              />
              <Button
                text={"I already have an account"}
                type="button"
                clickHandler={handleHaveAccount}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// export default CreateAccountPage;
