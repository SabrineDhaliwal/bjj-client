import "./UserProfileDetails.scss";

import { useParams } from "react-router-dom";
import editImg from "../../assets/icons/edit-50.png";

function UserProfileDetails({ userDetailsObject, handleProfileEdit }) {
  //UPS-> short for UserProfile Details
  const API_URL = import.meta.env.VITE_BASE_URL;

  const { id } = useParams();

  return (
    <>
      <div className="UPD">
        <div className="UPD__wrapper">
          <div className="UPD__img-block">
            <img
              src={`${API_URL}/${userDetailsObject.image}`}
              alt="profile picture"
              className="UPD__image"
            />
          </div>

          <div className="UPD__details-block">
            <p className="UPD__text">
              {`${userDetailsObject.first_name} ${userDetailsObject.last_name}`}
              {""}
            </p>
            <p className="UPD__text">
              Belt:{" "}
              <span className="UPD__text--light">{`${userDetailsObject.belt_rank}`}</span>
            </p>
            <p className="UPD__text">
              Training Club:{" "}
              <span className="UPD__text--light">
                {`${userDetailsObject.club_name}`}{" "}
              </span>
            </p>
            <p className="UPD__text">
              Bio:
              <span className="UPD__text--light">
                {" "}
                {`${userDetailsObject.bio}`}
              </span>{" "}
            </p>
          </div>
         </div> {/* closing div --wrapper */}
      <div className="UPD__icon">
        <img
          src={editImg}
          alt="edit"
          className="icon"
          onClick={(event) => handleProfileEdit(event, id)}
        />
      </div>
      </div>
    </>
  );
}

export default UserProfileDetails;
