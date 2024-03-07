import Button from "../Buttons/Buttons";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfileForm({ belts, clubs }) {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const [profile, setProfile] = useState([]); //user details
  const [newProfile, setNewProfile] = useState(true);
  const [formErr, setFormErr] = useState({});
  const [profileImg, setProfileImg] = useState([]); //new profile picture
  const [file, setFile] = useState(); //existing profile photo in BE
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    belt_rank: "",
    belt_rank_id: "",
    club_name: "",
    club_id: "",
    bio: "",
    user_id: sessionStorage.getItem("user_id"),
  });
  const navigate = useNavigate();

  //getting current profile information
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}/profile/${id}`);
        console.log("get req", response.data);
        const profileData = response.data[0];
        setProfile(profileData);
        setProfileImg(profileData.image);
        setFormValues(profileData);
        if (profileData.length !== 0) {
          setNewProfile(false);
        }

        // if (profileData) {
        //   setFormValues({
        //     first_name: profileData.first_name || "",
        //     last_name: profileData.last_name || "",
        //     belt_rank: profileData.belt_rank || "",
        //     belt_rank_id: profileData.belt_rank_id || "",
        //     club_name: profileData.club_name || "",
        //     club_id: profileData.club_id || "",
        //     bio: profileData.bio || "",
        //     user_id: profileData.user_id || sessionStorage.getItem("user_id"),
        //   });
        // }
      } catch (err) {
        console.error(err);
      }
    };
    getProfile();
  }, [API_URL, id]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFile(formValues.image);
    if (name === "image" && e.target.files[0]) {
      setFile(e.target.files[0]);
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });

    setFormErr((prevErrors) => ({
      ...prevErrors,
      [name]: !!value,
    }));
    if (value) {
      setFormErr({
        ...formErr,
        [name]: false,
      });
    } else {
      setFormErr({
        ...formErr,
        [name]: true,
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      //new profile
      if (newProfile == true) {
        const formData = new FormData();
        for (const key in formValues) {
          if (Object.prototype.hasOwnProperty.call(formValues, key)) {
            formData.set(key, formValues[key]);
          }
        }
        formData.set("image", file);

        const response = await axios.post(
          `${API_URL}/profile/edit/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        navigate(`../profile/${id}`);
      } else if (newProfile == false && profileImg == file) {
        // editting a profile
        const formData = new FormData();
        for (const key in formValues) {
          if (Object.prototype.hasOwnProperty.call(formValues, key)) {
            formData.set(key, formValues[key]);
          }
        }
        const response = await axios.patch(
          `${API_URL}/profile/edit/${id}`,
          formValues
        );
        alert("profile updated WITHOUT image");
        navigate(`../profile/${id}`);
      } 
      
      // update with image change
      else {
        const formData = new FormData();
        formData.append("image", file);

        for (const key in formValues) {
          if (Object.prototype.hasOwnProperty.call(formValues, key)) {
            formData.set(key, formValues[key]);
          }
        }
        formData.set('image', file);
        const response = await axios
        .patch(`${API_URL}/profile/edit/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        navigate(`../profile/${id}`)
        alert("profile updated with image");
        console.log("updated WITH image", response)
      }
      
    } catch (err) {
      console.error(err);
    }
    console.log("form Values UPF", formValues);
    // try {
    //   // uploading without adding an image
    //    if(!file ){
    //
    //   } else {
    //     // uploading WITH image file
    //     const formData = new FormData();
    //     formData.append("image", file)

    //     for (const key in formValues){
    //       if (Object.prototype.hasOwnProperty.call(formValues, key)){
    //         formData.set(key, formValues[key]);
    //       }
    //     }
    //     formData.set('image', file);

    //     const response = await axios
    //     .patch(`${API_URL}/profile/edit/${id}`, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     });
    //     navigate(`../profile/${id}`)
    //     alert("profile updated with image");
    //     console.log("updated WITH image", response)
    //   }
    // } catch(err){
    //   console.error(err)
    // }
  };

  return (
    <>
      {!profile ? (
        <>
          <h2>Welcome to Roll & Reflect</h2>
          <h3>Start by creating your profile</h3>
        </>
      ) : (
        <h2>Update your Profile</h2>
      )}

      <form encType="multipart/form-data" onSubmit={handleUpdate}>
        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="first_name">
            First Name:{" "}
          </label>

          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder={profile ? `${profile.first_name}` : "Jane"}
            className={
              //   formik.errors.first_name
              //     ? "create-form__field create-form__field--error"
              //     :
              "create-form__field"
            }
            onChange={handleChange}
            value={formValues.first_name}
          />
        </div>
        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="last_name">
            Last Name:{" "}
          </label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder={profile ? `${profile.last_name}` : "Doe"}
            className={
              //   formik.errors.last_name
              //     ? "create-form__field create-form__field--error"
              //     :
              "create-form__field"
            }
            onChange={handleChange}
            value={formValues.last_name}
          />
        </div>
        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="belt_rank">
            What Belt Rank are you?
          </label>
          {/* {formik.errors.belt_rank ? (
                <div>{formik.errors.belt_rank}</div>
              ) : null} */}
          <select
            id="belt_rank"
            name="belt_rank"
            className={
              //   formik.errors.belt_rank
              //     ? "create-form__field create-form__field--error"
              //     :
              "create-form__field"
            }
            onChange={handleChange}
            value={formValues.belt_rank}
          >
            <option value="" disabled="">
              {profile ? `${profile.belt_rank}` : "Select a Belt"}
            </option>
            {belts
              ?.filter((belt) => belt.belt_rank !== formValues.belt_rank)
              .map((belt) => (
                <option
                  value={`${belt.belt_rank_id},${belt.belt_rank}`}
                  key={`${belt.belt_rank_id}`}
                >
                  {belt.belt_rank}
                </option>
              ))}
          </select>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="club_name">
            Where do you train?
          </label>
          {/* {formik.errors.club_name ? (
                <div>{formik.errors.club_name}</div>
              ) : null} */}
          <select
            id="club_name"
            name="club_name"
            // className={
            //   formik.errors.club_name
            //     ? "create-form__field create-form__field--error"
            //     : "create-form__field"
            //     }
            onChange={handleChange}
            value={formValues.club_name}
          >
            <option>
              {profile ? `${profile.club_name}` : "Select a club"}
            </option>
            {clubs
              ?.filter((club) => club.club_name !== formValues.club_name)
              .map((club) => (
                <option
                  value={`${club.club_id}, ${club.club_name}`}
                  key={club.club_id}
                >
                  {`${club.club_name}`}
                </option>
              ))}
          </select>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="bio">
            Tell Us About Yourself (optional):
          </label>
          <textarea
            id="bio"
            type="text"
            name="bio"
            placeholder={profile ? `${profile.bio}` : "Tell us something"}
            className="create-form__field"
            onChange={handleChange}
            value={formValues.bio}
          ></textarea>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="image">
            Upload a photo (optional)
          </label>
          <input
            id="image"
            type="file"
            name="image"
            multiple
            accept="image/*"
            className="create-form__input create-form__input--color"
            onChange={handleChange}
          />
        </div>
        <Button text={"Update Profile"} type="submit" />
      </form>
    </>
  );
}

export default UserProfileForm;
