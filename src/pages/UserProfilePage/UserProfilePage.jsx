import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails";
import SummaryList from "../../components/SummaryList/SummaryList";
import SummaryInput from "../../components/SummaryInput/SummaryInput";
import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

function LandingPage() {

const API_URL = process.env.REACT_APP_BASE_URL;
// const {id }= useParams();
// const [userdetailsObject, setUserDetailsObject]= useState([])
    
  return (
    <>
      <UserProfileDetails  />
      {/* center display of video? */}
      <SummaryInput />
      <SummaryList />
    </>
  );
}

export default LandingPage;
