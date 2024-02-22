import "./UserProfileDetails.scss";
// import profilePic from "../../assets/images/sabrine_bb_8895.JPG"
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect,} from "react";
import editImg from "../../assets/icons/edit-50.png";

function UserProfileDetails({ }) {
  //UPS-> short for UserProfile Details
  const API_URL = import.meta.env.VITE_BASE_URL;

  const { id } = useParams();
  const navigate = useNavigate();
  const [userdetailsObject, setUserDetailsObject] = useState([]);
  const [profileExists, setProfileExists] = useState(true)
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("user_id");

  //make axios call to get information for user detail compoment

  const handleEdit = (event, id) => {
    navigate(`/profile/edit/${id}`);
  };
  useEffect(() => {
    const getUser = async () => {
// create an if statement that if userprofile exists it sets updateprofile state and loads form

      try {
        if (token && user_id==id) {
          const userResponse = await axios.get(
            `${API_URL}/profile/${id}`,
          );
          setUserDetailsObject(userResponse.data[0]);
        }
      } catch (err) {
        console.error("error at getUser UPD", err);
      }
    };
    getUser();
  }, [API_URL, token, user_id]);

  return (
    <div className="UPD">

      {token ? (
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
        </>
      ) : (
        <div>
          <p>OOPS! Something went wrong</p>
          <p>Please return to home page and try loggin again</p>
        </div>
      )}
      <div>
        <img src={editImg} alt="edit" className="icon"
                onClick={(event) => handleEdit(event, userdetailsObject.id)}/>
      </div>
    </div>
  );
}

export default UserProfileDetails;
