import axios from "axios";
import PositionsList from "../../components/DatabaseLists/PositionsList"
import PositionDetails from "../../components/PositionDetails/PositionDetails";
import Button from '../../components/Buttons/Buttons';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";


export function PositionsPage() {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const [allPositions, setAllPositions] = useState([]);
  const [posById, setPosById] =useState([]);
  const params = useParams();
  const navigate = useNavigate()

  // getting all positions
  useEffect(()=> {
    axios
    .get(`${API_URL}/positions`)
    .then((positions)=>{
      setAllPositions(positions.data)
    })
    .catch((err)=> {
      console.log(err, "error at axios all positions list")
    })
  },[API_URL]);

  //getting position by ID
  useEffect(()=> {
    const getPosById = async ()=> {
     try {
         const res = await axios.get(`${API_URL}/positions/${params.id}`) 
         setPosById(res.data[0])
     } catch (err){
         console.error("error: FE getPosById", err);
     }
    }
    getPosById()
 },[params.id]);

 const handleAddPosition = (event) => {
  console.log("clicked")
  navigate('/add/postion')
}

  return (
  <>
    <div className="list_wrapper">
      {allPositions.length === 0 ? (
        <>
        <Triangle visible={true}/>
        <h3>Please wait while we fetch the list. If the page doesn't reload, please refresh your page </h3>
        </>
      ):( 
        <>
        <PositionsList allPositions={allPositions}/>
    {posById ? 
      <PositionDetails posById={posById} />
      : null}
       </>
      )}

    </div>
     <div className='btn__container'>
     <Button
       text="Add Position"
       type="button"
       clickHandler={handleAddPosition}
       />
        <Button
       text="Edit Position"
       type="button"
       
       // clickHandler={handleAddTechnique}
       />
       </div>
     
       </>
       );
}


