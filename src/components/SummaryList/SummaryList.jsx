import "./SummaryList.scss";
import editbutton from "../../assets/icons/edit-50.png";
import deletebutton from "../../assets/icons/delete.svg";
import axios from "axios";
// import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SummaryList({summaryList}) {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const params = useParams();
  const navigate = useNavigate();
  // const [summaryList, setSummaryList] = useState([]);

  console.log(summaryList, "props recieved SL compoment")
  // useEffect(() => {}, [summaryList]);
  //getting all summaries
  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/summary/${params.id}`)
  //     .then((summary) => {
  //       console.log(summary.data)
  //       setSummaryList(summary.data);
  //     })
  //     .catch((err) => {
  //       console.error(
  //         err,
  //         "something went wrong at axios get request summary list"
  //       );
  //     });
  // }, [API_URL, params.id]);

  //
  //handle delete function
  const handleDelete = (event, idToDel) => {
    console.log("Clicked delete", params.id, idToDel)
    alert("Are you sure you want to delete? This can not be undone");
    axios
      .delete(`${API_URL}/summary/edit/${idToDel}`)
      .then((response) => {
        // add axios call to get summaries 
        return axios.get(`${API_URL}/summary/${params.id}`)
      })
      // .then((summary) => {
      //   setSummaryList(summary.data);
      // })
      .catch((err) => {
        console.error(err, "if you a can read this, something went wrong in front end handleDelete");
      });
  };


  //handle edit function
  const handleEdit = (event, idtoEdit) => {
    navigate(`/edit/${idtoEdit}`);
  };
  return (
    <div className="summary-list">
      {summaryList ? (
        summaryList.map((summary) => (
          <div className="summary-list__wrapper" key={`${summary.summary_id}`}>
            <div className="summary-list__left">
              {summary.video? (
              <video
                src={`${API_URL}/${summary.video}`}
                controls
                className="summary-list__img"
                type="video/mp4"
              />) : (
                <p>No video available</p>
              )}
            </div>
            <div className="summary-list__center">
              <div className="summary-list__center-top">
                <p className="summary-list__text">
                  Title <br></br>
                  <span className="summary-list__text--light">{`${summary.title}`}</span>
                </p>
                <p>{`${summary.date}`}</p>
              </div>
              <div className="summary-list__center-bottom">
                <p className="summary-list__text">
                  Summary<br></br>
                  <span className="summary-list__text--light">{`${summary.summary}`}</span>
                </p>
                <p className="summary-list__text">
                  Tags<br></br>
                  <span className="summary-list__text--light">{`Tech: ${summary.tech_name}; Target: ${summary.target_name}; Position: ${summary.position_name}`}</span>
                </p>
              </div>
            </div>
            <div className="summary-list__right">
              <img
                src={editbutton}
                alt="edit"
                className="icon"
                onClick={(event) => handleEdit(event, summary.summary_id)}
              />

              <img
                src={deletebutton}
                alt="delete"
                className="icon"
                onClick={(event) => handleDelete(event, summary.summary_id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
}

export default SummaryList;
