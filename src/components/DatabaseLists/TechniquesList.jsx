import "./ListsStyling.scss";
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
    navigate("/add/techs");
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

    // classNames are written to be reusable styling sheet for future lists
    <div className="list__wrapper">
      <h3 className="list__title"> Select a technique below to learn more </h3>
      <ul className="list__list">
        {/* rending list of all techniques in database */}
        {allTechs
        .slice()
        .sort((a,b)=>a.tech_name.localeCompare(b.tech_name))
        .map((singletech) => (
          <Link
            to={`/techs/${singletech.tech_id}`}
            key={`${singletech.tech_id}`}
          >
            <div className="list__item">{`${singletech.tech_name}`}</div>
          </Link>
        ))}
      </ul>
      <Button
        text="Add Technique"
        type="button"
        clickHandler={handleAddTechnique}
      />
    </div>
  );
}
export default TechniquesList;
