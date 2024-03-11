import TechniquesList from "../../components/DatabaseLists/TechniquesList";
import TechniquesDetails from "../../components/TechniquesDetails/TechniquesDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import BackButton from "../../assets/icons/left-arrow.png";
import Button from "../../components/Buttons/Buttons";

export function TechniquesPage() {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const {id} = useParams();

  const [allTechs, setAllTechs] = useState([]);
  const [techById, setTechbyId] = useState([]);
  
  const handleAddTechnique = (event) => {
    console.log("clicked");
    navigate("/add/techs");
  };

  const handleEditTechnique = (event) => {
    if (!id){
     alert('you need to select a technique')
     console.log('clicked')
    } else {
    console.log('tech selected')
    navigate(`/techs/${id}/edit`)
    }
  }
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
      .get(`${API_URL}/techs/${id}`)
      .then((response) => {
        setTechbyId(response.data[0]);
      })
      .catch((err) => {
        console.error(
          err,
          "axios error at techs by ID"
        );
      });
  }, [id]);

  return (
    <>
      <TechniquesList
        allTechs={allTechs}
      />
      {techById ? <TechniquesDetails techById={techById} />: null}
        <Button
        text="Add Technique"
        type="button"
        clickHandler={handleAddTechnique}
      />
      <Button text="Edit Technique" type="button" clickHandler={handleEditTechnique}/>
    
    </>
  );
}

