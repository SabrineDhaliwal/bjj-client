import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails";
import SummaryList from "../../components/SummaryList/SummaryList";
import SummaryInput from "../../components/SummaryInput/SummaryInput";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function UserProfilePage({ loggedIn, setLoggedIn }) {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [summaryList, setSummaryList] = useState([]);
 
  
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("user_id");

  const handleEdit = (event) => {
    navigate("/edit");
  };
  const updateSummaryList = (newSummary) => {
    setSummaryList([newSummary, ...summaryList]);
  };
  //getting all summaries named: summaryList

  useEffect(() => {
    const getSummaries = async () => {
      try {
        if (token && user_id == id) {
          const response = await axios.get(
            `${API_URL}/summary/${id}`
          );
          
          setSummaryList(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getSummaries();
  }, [API_URL, token, user_id, id]);

  useEffect(() => {}, [summaryList]);

  const handleDelete = (event, idToDel) => {
    // console.log("Clicked delete", params.id, idToDel)
    alert("Are you sure you want to delete? This can not be undone");

    axios
      .delete(`${API_URL}/summary/edit/${idToDel}`)
      .then((response) => {
        // add axios call to get summaries
        return axios.get(`${API_URL}/summary/${id}`);
      })
      .then((summary) => {
        setSummaryList(summary.data);
      })
      .catch((err) => {
        console.error(
          err,
          "if you a can read this, something went wrong in front end handleDelete"
        );
      });
  };

  return (
    <>
      {token && user_id? (
        <>
          <UserProfileDetails />
          <SummaryInput
            updateSummaryList={updateSummaryList}
            summaryList={summaryList}
          />
          <SummaryList
            handleEdit={handleEdit}
            summaryList={summaryList}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <div>Login or create an account to start tracking your training</div>
      )}
    </>
  );
}
// export default UserProfilePage;
