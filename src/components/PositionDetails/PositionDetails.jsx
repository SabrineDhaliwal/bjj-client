import "./PositionDetails.scss";
import BackButton from "../../assets/icons/left-arrow.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function PositionDetails({posById}){
const API_URL = import.meta.env.VITE_BASE_URL;

    return(
        <div className="details">
     
    <h3 className="details__header">The Details</h3>
      <div>
        <p className="details__subheader">Position<span className="details__text"><br />{`${posById.position_name}`}</span></p>
        <p className="details__subheader">Description<span className="details__text"><br />{`${posById.description}`}</span></p>
      </div>
     <Link 
     to='/positions'>
     <img src={BackButton} alt='back-button'/>
     </Link>
        </div>
    )
}

export default PositionDetails;