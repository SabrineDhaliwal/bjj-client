import Button from "../../components/Buttons/Buttons";
import "./CreateAccountPage.scss";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CreateAccountPage() {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [belts, setBelts] = useState([]); //used for belts dropdown
  const [clubs, setClubs] = useState([]); // used for clubs dropdown

  //loading belts on mount
  useEffect(() => {
    axios
      .get(`${API_URL}/utils/belts`)
      .then((belts) => {
        setBelts(belts.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [API_URL]);

  // loading clubs on mount
  useEffect(() => {
    axios
      .get(`${API_URL}/utils/clubs`)
      .then((clubs) => {
        setClubs(clubs.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [API_URL]);

  //form validations
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required Field";
    } else if (values.first_name.length > 20) {
      errors.first_name = "Name must be less than 20 characters";
    }

    if (!values.last_name) {
      errors.last_name = "Required Field";
    } else if (values.last_name.length > 20) {
      errors.last_name = "Must be less than 20 characters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    // add validation that checks emails against database of user

    if (!values.username) {
      errors.username = "Username required";
    } else if (values.username.length < 1) {
      errors.username = "Username too short";
    }
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

    if (!values.belt_rank) {
      errors.belt_rank = "Please select a belt";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      belt_rank: "",
      bio: "",
      club_name: "",
      password: "",
      confirmPassword: "",
    },

    //call validation
    validate,

    onSubmit: (values) => {
      console.log("onSubmit formik", values);
      //posting new user to database
      navigate("/useraccount/1");
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
        <p>We have a few questions, please fill out the form</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="create-form__wrapper">
            <div className="create-form__input-set">
              <label className="create-form__label">First Name: </label>
              {formik.errors.first_name ? (
                <div>{formik.errors.first_name}</div>
              ) : null}
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="Jane"
                className={
                  formik.errors.first_name
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
            </div>
            <div className="create-form__input-set">
              <label className="create-form__label">Last Name: </label>
              {formik.errors.last_name ? (
                <div>{formik.errors.last_name}</div>
              ) : null}
              <input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Doe"
                className={
                  formik.errors.last_name
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </div>

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

            <div className="create-form__input-set">
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
             
            </div>
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

            <div className="create-form__input-set">
              <label className="create-form__label">
                What Belt Rank are you?
              </label>
              {formik.errors.belt_rank ? (
                <div>{formik.errors.belt_rank}</div>
              ) : null}
              <select
                id="belt_rank"
                name="belt_rank"
                className={
                  formik.errors.belt_rank
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.belt_rank}
              >
                {/* create table of belts in database */}
                <option value="" disabled="disabled">
                  Select a Belt
                </option>
                {belts.map((belt) => (
                  <option
                    value={`${belt.belt_rank_id}, ${belt.belt_rank}`}
                    key={belt.belt_rank_id}
                  >
                    {belt.belt_rank}
                  </option>
                ))}
              </select>
             
            </div>

            <div className="create-form__input-set">
              <label className="create-form__label">Where do you train?</label>
              {formik.errors.club_name ? (
                <div>{formik.errors.club_name}</div>
              ) : null}
              <select
                id="club_name"
                name="club_name"
                className={
                  formik.errors.club_name
                    ? "create-form__field create-form__field--error"
                    : "create-form__field"
                }
                onChange={formik.handleChange}
                value={formik.values.club_name}
              >
                <option>Select Club</option>
                {clubs.map((club) => (
                  <option
                    value={`${club.club_id},${club.club_name}`}
                    key={club.club_id}
                  >
                    {club.club_name}
                  </option>
                ))}
              </select>
             
            </div>

            <div className="create-form__input-set">
              <label className="create-form__label">
                Tell Us About Yourself (optional):
              </label>
              <textarea
                id="bio"
                type="text"
                name="bio"
                placeholder="Tell us something"
                className="create-form__field"
                onChange={formik.handleChange}
                value={formik.values.bio}
              ></textarea>
            </div>
            <div className="create-form__input-set">
              <label className="create-form__label">
                Upload a photo (optional)
              </label>
              <input
                id="image"
                type="file"
                name="image"
                multiple
                accept="image/*"
                className="create-form__input create-form__input--color"
                onChange={formik.handleChange}
                value={formik.values.image}
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

export default CreateAccountPage;
