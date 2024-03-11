import "./EditSummary.scss";
import Button from "../Buttons/Buttons";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";

function EditSummary(){

const API_URL = import.meta.env.VITE_BASE_URL;
const params = useParams();
const navigate = useNavigate();

const user_id = sessionStorage.getItem("user_id")


const [editSummary, setEditSummary]= useState([])
const [techs, setTechs] = useState([]);
const [positions, setPositions] = useState([]);


//loading dropdown menus

//positions
useEffect(()=>{
  axios
  .get(`${API_URL}/positions`)
  .then((positions)=> {
    setPositions(positions.data)
  })
  .catch((err)=>{
    console.error(err)
  })

},[])

//techs

useEffect(()=>{
  axios
  .get(`${API_URL}/techs`)
  .then((techs)=>{
    setTechs(techs.data)
  })
  .catch((err)=>{
    console.error(err)
  })
},[])


useEffect(()=> {
    axios
    .get(`${API_URL}/summary/edit/${params.summaryid}`)
    .then((response)=>{
        setEditSummary(response.data)
        formik.setValues(response.data)
    })
    .catch((err)=> {
        console.error(err,"error at axios params edit summary")
    })
},[params.summaryid]);


const formik = useFormik({
    initialValues: {},
  
    onSubmit:(values)=> {
    
      axios
      .put(`${API_URL}/summary/edit/${params.summaryid}`, values)
      .then((response)=> {
        console.log("response after put,", response)
        alert("Edits saved")  
        navigate(`/profile/${user_id}`)
      })
      .catch((err)=> {
        console.log(err, "error at axios put call Edit Summary.jsx")
      })

    } 
});


    return(
        <div className="edit-summary">   
      <h3>Edit Your Summary</h3>
      <div>
        <form
         onSubmit = {formik.handleSubmit}
        >
          <div className="summary-form__input-set">
            <label className="summary-form__label">Title</label>
            <input
              className="summary-form__input"
              id="title"
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
           
          </div>

          <div className="summary-form__input-set">
            <label className="summary-form__label">Date:</label>
            <input
              className="summary-form__input"
              id="date"
              type="date"
              name="date"
              placeholder=""
              value={formik.values.date}
              onChange={formik.handleChange}
            />
           
          </div>

          <div className="summary-form__input-set">
            <label>What technique did you learn?</label>
            <select
              id="tech_name"
              name="tech_name"
              className="create-form__input"  
              onChange={formik.handleChange}
            >
              <option value={formik.values.tech_name} >
                {formik.values.tech_name}
              </option>
              {techs.filter((tech)=>tech.tech_name!==formik.values.tech_name).map((tech) => (
                  <option value = {`${tech.tech_id}, ${tech.tech_name}`} key={tech.tech_id}>{tech.tech_name}</option>
                ))}
            </select>
          
          </div>


          <div className="summary-form__input-set">
            <label>What Position did you implement it from?</label>
            <select
            id="position_name"
            name="position_name"
            className="summary-form__input"
            onChange={formik.handleChange}
            >
            
              <option value={formik.values.position_name}>
                {formik.values.position_name}
              </option>
              {positions.filter((position)=>position.position_name!==formik.values.position_name).map((position)=>(
                <option value = {`${position.position_id}, ${position.position_name}`}key ={position.position_id}>{position.position_name}</option>
              ))}
            </select>
  
          </div>


          <div className="summary-form__input-set">
            <label className="summary-form__label">Summary</label>
            <textarea
              className="summary-form__input, summary-form__input--textarea"
              id="summary"
              type="text"
              name="summary"
              placeholder="a brief summary of your learning"
              value = {formik.values.summary}
              onChange={formik.handleChange}
            ></textarea>
          </div>

<h5>Updating the video feature will be coming soon</h5>
          {/* <div className="summary-form__input-set">
            <label className="summary-form__label">Video Upload</label>
            <input
              className="summary-form__field summary-form__field--color"
              id="video"
              type="file"
              name="video"
              accept="video/*"
              onChange={(e) =>
                formik.setFieldValue("video", e.currentTarget.files[0])
              }
            />
          </div> */}

          <Button text='Add Change' type="submit"/>
          </form>
          </div>
        
        </div>
    )
}

export default EditSummary;
