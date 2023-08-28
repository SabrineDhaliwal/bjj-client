import Button from "../../components/Buttons/Buttons";
import "./CreateAccountPage.scss";
import { useFormik } from "formik";

function CreateAccountPage() {

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required Field";
    } else if (values.firstName.length > 20) {
      errors.firstName = "Name must be less than 20 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Required Field";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be less than 20 characters";
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

    if (!values.belt) {
      errors.belt = "Please select a belt";
    }

    return errors;
    
  };
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      belt: "",
      bio: "",
    },

    validate,

    onSubmit: (values) => {
      console.log("onSubmit formik", values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h1>We're happy you've decided to commit</h1>
      <p>We have a few questions, please fill out the form</p>
      <form onSubmit={formik.handleSubmit}>
        <label>First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Jane"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

        <label>Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Doe"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

        <label>E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="jane@example.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <label>Pick a Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="JaneDoeBJJnewbie"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}

        <label>What Belt Rank are you?</label>
        <select
        id="belt"
        name="belt"
        onChange={formik.handleChange}
        value={formik.values.belt}>
          {/* create table of belts in database */}
          <option value ="" disabled='disabled'>Select a Belt</option>
          <option value ="white belt">White Belt</option>
          <option value ="white belt 1 stripe">White Belt: 1 stripe</option>
          <option value = "blue belt">Blue Belt</option>
        </select>
        {formik.errors.belt ? <div>{formik.errors.belt}</div> : null}

        <label>Tell Us About Yourself (optional)</label>
        <textarea
          id="bio"
          type="text"
          name="bio"
          placeholder="Tell us something"
          onChange={formik.handleChange}
          value={formik.values.bio}
        ></textarea>

        <label>Upload a photo (optional)</label>
        <div className="btn-container">
          <Button text="Yes! create my account" type="submit" />
          <Button text="No, I'm not ready yet" type ="button"/>
        </div>
      </form>
    </>
  );
}

export default CreateAccountPage;
