import Button from "../../components/Buttons/Buttons";
import "./CreateAccountPage.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function CreateAccountPage({ setLoggedIn }) {
  const API_URL = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();

  //form validations
  const validate = (values) => {
    const errors = {};
    //validate email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

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

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    //call validation
    validate,

    onSubmit: (values) => {
      //posting new user to database
      axios
        .post(`${API_URL}/login/newuser`, values)
        .then((response) => {
          alert("You account is create, login to get started!");
          navigate("../login");
        })
        .catch((err) => {
          console.error("error posting new user FE", err);
        });
    },
  });

  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <div className="create-page">
      <div className="create-page__wrapper">
        <h1>Create an Account</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="create-form__wrapper">
            <div className="create-form__input-set">
              <label className="create-form__label">E-mail: </label>
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
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <div className="create-form__input-set">
              <label className="create-form__label">Password: </label>
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
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <div className="create-form__input-set">
              <label className="create-form__label">Confirm Password: </label>

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
            {formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
            <div></div>
            <div className="btn-containerCA">
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
