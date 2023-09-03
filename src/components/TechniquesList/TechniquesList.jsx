import Button from "../Buttons/Buttons";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TechniquesList() {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [allTechs, setAllTechs] = useState([]);

  const handleAddTechnique = (event) => {
    console.log("clicked")
    navigate("/add");
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/techs`)
      .then((alltechs) => {
        setAllTechs(alltechs.data);
      })
      .catch((err) => {
        console.log(err, "error at axios call Techniques List");
      });
  }, [API_URL]);

  return (
    <>
      <h3> Select a technique below to learn more </h3>
      <ul>
        {/* rending list of all techniques in database */}
        {allTechs.map((singletech) => (
          <Link
            to={`/techs/${singletech.tech_id}`}
            key={`${singletech.tech_id}`}
          >
            <div>{`${singletech.tech_name}`}</div>
          </Link>
        ))}
      </ul>
      <Button
        text="Add Technique"
        type="button"
        clickHandler={handleAddTechnique}
      />
      {/* <button type="button" clickHandler={(event)=> {handleAddTechnique}}>tester</button> */}
    </>
  );
}
export default TechniquesList;
