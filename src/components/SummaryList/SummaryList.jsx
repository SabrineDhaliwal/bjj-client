import "./SummaryList.scss";
import editbutton from "../../assets/icons/edit-50.png";
import deletebutton from "../../assets/icons/delete.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SummaryList() {

  const API_URL = process.env.REACT_APP_BASE_URL;
  const params = useParams();
  const navigate = useNavigate();
  const [allSummaries, setAllSummaries] =useState([]);

  useEffect(()=>{

  }, [allSummaries]);

//getting all summaries
  useEffect(() => {
    axios
    .get(`${API_URL}/summary/${params.id}`)
    .then((summary)=>{
        setAllSummaries(summary.data.summary);
    })
    .catch((err)=>{
        console.error(err, "something went wrong at axios get request summary list")
    })

  }, [params.id]);

  //handle delete function
  const handleDelete =(event, idToDel) =>{
    alert("Are you sure you want to delete? This can not be undone")

    axios
    .delete(`${API_URL}/summary/${params.id}/${idToDel}`)
    .then((response)=> {
      console.log(response)
    })
    .catch((err)=> {
      console.error(err)
    });
   } 

   //handle edit function 
   const handleEdit =(event, idtoEdit)=> {
    navigate("/edit")

    // axios
    // .put(`${API_URL}/summary${params.id}/${idtoEdit}`)
    // .then((response)=> {
    //   console.log("editresponse", response)
    // })
    // .catch((err)=> {
    //   console.error(err, "error at edit in summary list")
    // });


   }
  return (
    <div className="summary-list">
        {allSummaries? ( 
            allSummaries.map((summary)=> (
                <div className="summary-list__wrapper" key= {`${summary.summary_id}`}>
      <div className="summary-list__left" >
        <img src={`${summary.video}`} alt="thumbnail" className="summary-list__img"/> </div>
      <div className="summary-list__center">
        <div className="summary-list__center-top">
          <p>{`${summary.title}`}</p>
          <p>{`${summary.date}`}</p>
        </div>
        <div className="summary-list__center-bottom">
          <p>Summary{`${summary.summary}`}</p>
          <p>{`${summary.tech_name} ${summary.target_name} ${summary.position_name}`}</p>
        </div>
      </div>
      <div className="summary-list__right">
        <img src={editbutton} alt="edit" className="icon" onClick={handleEdit}/>
        <img src={deletebutton} alt="delete" className="icon" onClick={(event)=> handleDelete(event, summary.summary_id)}/>
      
      </div>
    
      </div>
            ))
            
      ): (<div>LOADING</div>)
        }
    </div>
  );
}

export default SummaryList;
