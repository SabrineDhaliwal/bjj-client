import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails";
import SummaryList from "../../components/SummaryList/SummaryList";
import SummaryInput from "../../components/SummaryInput/SummaryInput";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserProfilePage() {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const params = useParams();
  const [summaryList, setSummaryList] = useState([]);
  

  const handleEdit = (event) => {
    navigate("/edit");
  };
const updateSummaryList = (newSummary)=> {
  setSummaryList([...summaryList, newSummary])
}
   //getting all summaries named: summaryList
   useEffect(() => {
    axios
      .get(`${API_URL}/summary/${params.id}`)
      .then((summary) => {
        setSummaryList(summary.data);
      })
      .catch((err) => {
        console.error(
          err,
          "something went wrong at axios get request summary list"
        );
      });
  }, [API_URL, params.id]);

  return (
    <>
      <UserProfileDetails />
      {/* center display of video? */}
      <SummaryInput updateSummaryList={updateSummaryList}/>
      <SummaryList handleEdit={handleEdit} summaryList={summaryList} />
    </>
  );
}

export default UserProfilePage;
