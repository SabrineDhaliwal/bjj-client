import TechniquesList from "../../components/DatabaseLists/TechniquesList";
import TechniquesDetails from "../../components/TechniquesDetails/TechniquesDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import BackButton from "../../assets/icons/left-arrow.png";
import Button from "../../components/Buttons/Buttons";

function TechniquesPage() {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const params = useParams();

  const [allTechs, setAllTechs] = useState([]);
  const [techById, setTechbyId] = useState([]);

  const handleAddTechnique = (event) => {
    console.log("clicked");
    navigate("/add/techs");
  };

  // call to get full list of techniques
  useEffect(() => {
    axios
      .get(`${API_URL}/techs`)
      .then((alltechs) => {
        setAllTechs(alltechs.data);
      })
      .catch((err) => {
        console.log(err, "FE: error at axios call Techniques List");
      });
  }, [API_URL]);

  // axios call to get tech by id
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
      {techById ? <TechniquesDetails techById={techById} />: null}
      <TechniquesList
        allTechs={allTechs}
      />
        <Button
        text="Add Technique"
        type="button"
        clickHandler={handleAddTechnique}
      />
      <Button text="Edit Technique" type="button" />
      {/* <Link to="/techs">
        <img src={BackButton} alt="back-button" />
      </Link> */}
    </>
  );
}
export default TechniquesPage;
