import "./UserProfileDetails.scss";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfileDetails() {
//UPS-> short for UserProfile Details
const API_URL =  process.env.REACT_APP_BASE_URL;


const {id }= useParams();
const [userdetailsObject, setUserDetailsObject]= useState([])

//make axios call to get information for user detail compoment
useEffect(()=>{
  axios
  .get(`${API_URL}/useraccount/${id}`)
  .then((userdetails)=> {
    const userdetailsObject = userdetails.data;
    // console.log("user details;", userdetailsObject)
    setUserDetailsObject(userdetailsObject[0]);
  })
  .catch((err)=> {
    console.error(err, "error in axios call useraccount on UserProfilePage")
  })
},[API_URL, id])


    return (
    
<div className="UPD">
    {userdetailsObject? (
        <>
    <div className="UPD__img-block">
       <img src={`${userdetailsObject.image}`} alt="pull from database"/>
    </div>

    <div className="UPD__details-block">
        <p>{`${userdetailsObject.first_name} ${userdetailsObject.last_name}`} </p>
        <p>Belt:{`${userdetailsObject.belt_rank}`}</p>
        <p>Training at:{`${userdetailsObject.club_name}`} </p>
        <p>Bio: {`${userdetailsObject.bio}`} </p>
    </div>
    </>
) : (
<div>LOADING</div>
)}
</div>

    );
  
}

export default UserProfileDetails