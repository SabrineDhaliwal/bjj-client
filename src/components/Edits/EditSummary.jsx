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
const [targets, setTargets] = useState([]);

//loading dropdown menus
//targets
useEffect(()=> {
  axios
  .get(`${API_URL}/targets`)
  .then((targets)=> {
    setTargets(targets.data)
  })
  .catch((err)=>{
    console.log(err)
  })

},[])
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
      // console.log("changes", values);
     navigate(`../profile/${user_id}`)

    axios
    .put(`${API_URL}/summary/edit/${params.summaryid}`, values)
    .then((response)=> {
      alert("Edits saved")
      // navigate('/userprofile/1')
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
            {/* {formik.errors.title ? (
                <div>{formik.errors.title}</div>
              ) : null} */}
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
            {/* {formik.errors.date ? (
              <div>{formik.errors.date}</div>
            ): null} */}
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
            {/* {formik.errors.tech ? (
          <div>{formik.errors.tech}</div>
        ): null} */}
          </div>

          <div className="summary-form__input-set">
            <label>What was your Target</label>
            <select
            id="target_name"
            name="target_name"
            className="summary-form__input"
            onChange={formik.handleChange}
            >
              
              <option value={formik.values.target_name}>
                {formik.values.target_name}
              </option>
              {targets.filter((target)=> target.target_name!==formik.values.target_name).map((target)=> (
                <option value = {`${target.target_id}, ${target.target_name}`} key={target.target_id}>{target.target_name}</option>
              ))}
            </select>
            {/* {formik.errors.target ? (
          <div>{formik.errors.target}</div>
        ): null} */}
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
            {/* {formik.errors.position? ( */}
        {/* //   <div>{formik.errors.position}</div>
        ): null} */}
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

          <Button text='Add Change' type="submit"/>
          </form>
          </div>
        
        </div>
    )
}

export default EditSummary;
