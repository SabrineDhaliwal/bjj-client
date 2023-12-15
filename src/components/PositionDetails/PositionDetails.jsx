import "./PositionDetails.scss";
import BackButton from "../../assets/icons/left-arrow.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function PositionDetails(){
const API_URL = import.meta.env.VITE_BASE_URL;
const params = useParams();
const [posById, setPosById] =useState([]);

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
    },[]);

    return(
        <div className="details">
     
    <h3 className="details__header">The Details</h3>
      <div>
        <p className="details__subheader">Position<span className="details__text"><br />{`${posById.position_name}`}</span></p>
        <p className="details__subheader">Description<span className="details__text"><br />{`${posById.description}`}</span></p>
        {/* <p className="details__subheader">Level<span className="details__text"><br />{`${techById.level}`}</span></p> */}
        {/* <p className="details__subheader">What is it?<span className="details__text"><br />{`${techById.description}`}</span></p> */}
      </div>
     <Link 
     to='/positions'>
     <img src={BackButton} alt='back-button'/>
     </Link>
        </div>
    )
}

export default PositionDetails;