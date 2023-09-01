import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails";
import SummaryList from "../../components/SummaryList/SummaryList";
import SummaryInput from "../../components/SummaryInput/SummaryInput";
import axios from "axios";
import { useParams } from "react-router-dom";

function LandingPage() {
//make axios call here and pass down props to each component
// need to use useParams
const API_URL = process.env.REACT_APP_BASE_URL;

axios
.get(`${API_URL}/useraccount`)
.then((userdetail)=> {
  console.log(userdetail.data)
})
.catch((err)=> {
  console.error(err, "erro in axios call useraccount on UserProfilePage")
})
    
  return (
    <>
      <UserProfileDetails />
      {/* center display of video? */}
      <SummaryInput />
      <SummaryList />
    </>
  );
}

export default LandingPage;
