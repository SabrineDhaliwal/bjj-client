import Button from "../../Buttons/Buttons";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTech() {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      tech_name: "",
      type: "",
      level: "",
      description: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log("onSubmit values", values);
      axios
        .post(`${API_URL}/techs/add`, values)
        .then((addTech) => {
          console.log(addTech.data);
          alert("Addition was successful");
          resetForm();
        })
        .catch((err) => {
          console.error(err, "error at axios call at adding technique");
        });
    },
  });
  const handleCancel = () => {
    console.log("cancel clicked");
    window.location.reload();
  };

  const handleViewList = () => {
    console.log("cancel clicked");
    navigate("/techs");
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="add__input-wrapper">
          <div className="add__input-set">
            <label className="add__label">Technique Name</label>
            <input
              type="text"
              id="tech_name"
              name="tech_name"
              className="add__input"
              value={formik.values.tech_name}
              onChange={formik.handleChange}
            />
          </div>

          <div className="add__input-set">
            <label className="add__label">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              className="add__input"
              placeholder="Joint? Strangle? Defense?"
              value={formik.values.type}
              onChange={formik.handleChange}
            />
          </div>

          <div className="add__input-set">
            <label className="add__label">Level</label>
            <input
              type="text"
              id="level"
              name="level"
              className="add__input"
              placeholder="Beginner? Intermediate? Advanced?"
              value={formik.values.level}
              onChange={formik.handleChange}
            />
          </div>
          <div className="add__input-set">
            <label className="add__label"> Description</label>
            <textarea
              type="text"
              id="desciption"
              name="description"
              className="add__input"
              placeholder="Please describe the technique"
              value={formik.values.description}
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>
        <div className="btn-container">
          <Button text="Add Technique" type="submit" />
          <Button text="Cancel" type="button" clickHandler={handleCancel} />
          <Button
            text="View Techniques List"
            type="button"
            clickHandler={handleViewList}
          />
        </div>
      </form>
    </>
  );
}

export default AddTech;
