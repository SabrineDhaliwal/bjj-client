import "./UserProfileDetails.scss";
import { useEffect } from "react";
import axios from 'axios';

function UserProfileDetails() {
//UPS-> short for UserProfile Details
const API_URL =  process.env.REACT_APP_BASE_URL;


//axios call to get user details here
// useEffect(()=> {
//     axios
//     .get(`${API_URL}/users/id`)

// },[API_URL])


    return (
<div className="UPD">
    <div className="UPD__img-block">
       <img src="" alt="pull from database"/>
    </div>

    <div className="UPD__details-block">
        <p>First & Last Name</p>
        <p>Belt: </p>
        <p>Training at: </p>
        <p>Bio: </p>
    </div>

    


</div>
    );
}

export default UserProfileDetails