import "./UserProfileDetails.scss";
// import profilePic from "../../assets/images/sabrine_bb_8895.JPG"
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect,} from "react";
import editImg from "../../assets/icons/edit-50.png";

function UserProfileDetails({userdetailsObject, handleProfileEdit }) {
  //UPS-> short for UserProfile Details
  const API_URL = import.meta.env.VITE_BASE_URL;

  const { id } = useParams();

  return (
    <div className="UPD">
          <div className="UPD__img-block">
            <img
              // src={profilePic}
              // {`${userdetailsObject.image}`}
              alt="profile picture"
              className="UPD__image"
            />
          </div>

          <div className="UPD__details-block">
            <p className="UPD__text">
              {`${userdetailsObject.first_name} ${userdetailsObject.last_name}`}
              {""}
            </p>
            <p className="UPD__text">
              Belt:{" "}
              <span className="UPD__text--light">{`${userdetailsObject.belt_rank}`}</span>
            </p>
            <p className="UPD__text">
              Training Club:{" "}
              <span className="UPD__text--light">
                {`${userdetailsObject.club_name}`}{" "}
              </span>
            </p>
            <p className="UPD__text">
              Bio:
              <span className="UPD__text--light">
                {" "}
                {`${userdetailsObject.bio}`}
              </span>{" "}
            </p>
          </div>
    
      <div>
        <img src={editImg} alt="edit" className="icon"
                onClick={(event) => handleProfileEdit(event, id)}
                />
      </div>
    </div>
  );
}

export default UserProfileDetails;
