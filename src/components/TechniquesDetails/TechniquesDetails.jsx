import "./TechniqueDetails.scss";
import BackButton from "../../assets/icons/left-arrow.png"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TechniquesDetails() {
  const params = useParams();
  const [techById, setTechbyId] = useState([]);

  const API_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/techs/${params.id}`)
      .then((response) => {
        setTechbyId(response.data[0]);
      })
      .catch((err) => {
        console.error(
          err,
          "if you can read this, you made another mistake :( "
        );
      });
  }, [params.id]);

  return (
    <>
    <div className="details">
    <h3 className="details__header">The Details</h3>
      <div>
        <p className="details__subheader">Technique<span className="details__text"><br />{`${techById.tech_name}`}</span></p>
        <p className="details__subheader">Target<span className="details__text"><br />{`${techById.type}`}</span></p>
        <p className="details__subheader">Level<span className="details__text"><br />{`${techById.level}`}</span></p>
        <p className="details__subheader">What is it?<span className="details__text"><br />{`${techById.description}`}</span></p>
      </div>
     <Link 
     to='/techs'>
     <img src={BackButton} alt='back-button'/>
     </Link>
      </div>
    </>
  );
}
export default TechniquesDetails;
