import Button from "../../components/Buttons/Buttons"
import { useNavigate } from "react-router-dom"

function EditTechForm(){

  const navigate = useNavigate()

  const handleCancelTech = (event) => {
    event.preventDefault();
    console.log("cancel clicked");
    navigate('/');
  }

  const handleSubmit = ()=> {
    console.log("submit cliecked")
  }
    return (
        <div className="add">
        <h3>Add to our Database</h3>
        <form onSubmit={handleSubmit}>
          <div className="add__input-wrapper">
            <div className="add__input-set">
              <label className="add__label">Technique Name:</label>
              {/* {errors.tech_name ? (
                <div>{formik.errors.tech_name}</div>
              ) : null} */}
              <input
                type="text"
                id="tech_name"
                name="tech_name"
                // className={
                //   formik.errors.tech_name
                //     ? "add__field add__field--error"
                //     : "add__field"
                // }
                // value={formik.values.tech_name}
                // onChange={formik.handleChange}
              />
            </div>
  
            <div className="add__input-set">
              <label className="add__label">Type:</label>
              {/* {formik.errors.type ? <div>{formik.errors.type}</div> : null} */}
              <input
                type="text"
                id="type"
                name="type"
                // className={
                //   formik.errors.type
                //     ? "add__field add__field--error"
                //     : "add__field"
                // }
                placeholder="Joint? Strangle? Sweep? Defense?"
                // value={formik.values.type}
                // onChange={formik.handleChange}
              />
            </div>
  
            <div className="add__input-set">
              <label className="add__label">Level:</label>
              {/* {formik.errors.level ? <div>{formik.errors.level}</div> : null} */}
              <input
                type="text"
                id="level"
                name="level"
                // className={
                //   formik.errors.level
                //     ? "add__field add__field--error"
                //     : "add__field"
                // }
                placeholder="Beginner? Intermediate? Advanced?"
                // value={formik.values.level}
                // onChange={formik.handleChange}
              />
            </div>
            <div className="add__input-set">
              <label className="add__label"> Description:</label>
              {/* {formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null} */}
              <textarea
                type="text"
                id="desciption"
                name="description"
                // className={
                //   formik.errors.description
                //     ? "add__textarea add__textarea--error"
                //     : "add__textarea"
                // }
                placeholder="Please describe the technique"
                // value={formik.values.description}
                // onChange={formik.handleChange}
              ></textarea>
            </div>
          </div>
          <div className="btn-container">
            <Button text="Submit" type="submit" />
            <Button text="Cancel" type="button" clickHandler={handleCancelTech} />
            <Button
              text="View Techniques List"
              type="button"
              // clickHandler={handleViewList}
            />
          </div>
        </form>
      </div>
    )
}

export default EditTechForm