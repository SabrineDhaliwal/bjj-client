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
  
  useEffect(() => {}, [summaryList]);

  const handleDelete = (event, idToDel) => {
    console.log("Clicked delete", params.id, idToDel)
    alert("Are you sure you want to delete? This can not be undone");
    
    axios
      .delete(`${API_URL}/summary/edit/${idToDel}`)
      .then((response) => {
        console.log(response)
        // add axios call to get summaries 
        return axios.get(`${API_URL}/summary/${params.id}`)
      })
      .then((summary) => {
        console.log(summary.data, "summary delete response")
        setSummaryList(summary.data[0]);
      })
      .catch((err) => {
        console.error(err, "if you a can read this, something went wrong in front end handleDelete");
      });
  };

  return (
    <>
      <UserProfileDetails />
      {/* center display of video? */}
      <SummaryInput updateSummaryList={updateSummaryList}/>
      <SummaryList handleEdit={handleEdit} summaryList={summaryList} handleDelete={handleDelete}/>
    </>
  );
}

export default UserProfilePage;
