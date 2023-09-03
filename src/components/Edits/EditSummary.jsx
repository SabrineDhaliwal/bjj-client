import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect  } from "react";
import axios from "axios";

function EditSummary(){

const API_URL = process.env.REACT_APP_BASE_URL;
const params = useParams();
console.log(params);

useEffect(()=> {
    
},[])
const formik = useFormik({
    initialValues: {
    id: params.id, 
    title: "",
    date:"",
    tech:"",
    target:"",
    position:"",
    summary:"",
}

});



    return(
        <>
        <h1> build a another form to edit summary</h1>
       
      <div>Enter your summary here</div>
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
            //   value={formik.values.title}
            //   onChange={formik.handleChange}
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
            //   value={formik.values.date}
            //   onChange={formik.handleChange}
            />
            {/* {formik.errors.date ? (
              <div>{formik.errors.date}</div>
            ): null} */}
          </div>

          <div className="summary-form__input-set">
            <label>What technique did you learn?</label>
            <select
              id="tech"
              name="tech"
              className="create-form__input"
            //   value={formik.values.tech}
            //   onChange={formik.handleChange}
            >
              <option value="" disabled="disabled">
                Select a Technique
              </option>
              {/* {techs.map((tech) => (
                  <option value = {`${tech.tech_id}, ${tech.tech_name}`} key={tech.tech_id}>{tech.tech_name}</option>
                ))} */}
            </select>
            {/* {formik.errors.tech ? (
          <div>{formik.errors.tech}</div>
        ): null} */}
          </div>

          <div className="summary-form__input-set">
            <label>What was your Target</label>
            <select
            id="target"
            name="target"
            className="summary-form__input"
            // value = {formik.values.target}
            // onChange={formik.handleChange}
            
            >
              
              <option value="" disabled="disabled">
                Select a Target
              </option>
              {/* {targets.map((target)=> (
                <option value = {`${target.target_id}, ${target.target_name}`} key={target.target_id}>{target.target_name}</option>
              ))} */}
            </select>
            {/* {formik.errors.target ? (
          <div>{formik.errors.target}</div>
        ): null} */}
          </div>

          <div className="summary-form__input-set">
            <label>What Position did you implement it from?</label>
            <select
            id="position"
            name="position"
            className="summary-form__input"
            // value ={formik.values.position}
            // onChange={formik.handleChange}
            >
            
              <option value="" disabled="disabled">
                Select a Position
              </option>
              {/* {positions.map((position)=>(
                <option value = {`${position.position_id}, ${position.position_name}`}key ={position.position_id}>{position.position_name}</option>
              ))} */}
            </select>
            {/* {formik.errors.position? ( */}
        {/* //   <div>{formik.errors.position}</div>
        ): null} */}
          </div>


          <div className="summary-form__summary">
            <label className="summary-form__label">Summary</label>
            <textarea
              className="summary-form__input"
              id="summary"
              type="text"
              name="summary"
              placeholder="a brief summary of your learning"
            //   value = {formik.values.summary}
            //   onChange={formik.handleChange}
            ></textarea>
          </div>
          </form>
          </div>
        
        </>
    )
}

export default EditSummary;
