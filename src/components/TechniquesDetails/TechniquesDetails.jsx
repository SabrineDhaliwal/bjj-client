import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div>
        <p>{`${techById.tech_name}`}</p>
        <p>{`${techById.type}`}</p>
        <p>{`${techById.level}`}</p>
        <p>{`${techById.description}`}</p>
      </div>
    </>
  );
}
export default TechniquesDetails;
