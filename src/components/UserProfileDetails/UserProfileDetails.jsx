import "./UserProfileDetails.scss";
// import profilePic from "../../assets/images/sabrine_bb_8895.JPG"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserProfileDetails() {
  //UPS-> short for UserProfile Details
  const API_URL = import.meta.env.VITE_BASE_URL;


  const { id } = useParams();
  const [userdetailsObject, setUserDetailsObject] = useState([]);

  //make axios call to get information for user detail compoment

  // this is erroringout because it is making a call to a table that had been changed. need to make the call to a different table 'profile' 
  useEffect(() => {
    axios
      .get(`${API_URL}/profile/${id}`)
      .then((userdetails) => {
        const userdetailsObject = userdetails.data;
        setUserDetailsObject(userdetailsObject[0]);
      })
      .catch((err) => {
        console.error(
          err,
          "error in axios call useraccount on UserProfilePage"
        );
      });
  }, [API_URL, id]);

  return (
    <div className="UPD">
      
      {userdetailsObject ? (
        <>
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
              {`${userdetailsObject.first_name} ${userdetailsObject.last_name}`}{""}
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
        </>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
}

export default UserProfileDetails;
