import Button from "../Buttons/Buttons";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import axios from "axios";

function UserProfileForm({ belts, clubs }) {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const [profile, setProfile] = useState(); //user details
  const [formErr, setFormErr] = useState({});
  const [profileImg, setProfileImg] = useState(); //new profile picture
  const [file, setFile]= useState(); //existing profile photo in BE
  const [formValues, setFormValues]= useState({
    first_name: "",
      last_name: "",
      belt_rank: "",
      belt_rank_id: "",
      club_name: "",
      club_id: "",
      bio: "",
      user_id: sessionStorage.getItem("user_id")
      
  })
  const navigate = useNavigate();
  

  //getting current profile information
  useEffect(() => {
    const getProfile = async ()=> {
      if (id === undefined){
        return;
      }
      try{
        const response = await 
        axios.get(`${API_URL}/profile/${id}`)
        console.log(response.data)
        setProfile(response.data[0]);
        setProfileImg(response.data[0].image)
      } catch(err) {
        console.error(err);
      }
    }
    getProfile()
    },[API_URL, id])
     

    const handleChange = (e)=> {
      e.preventDefault();
      const { name, value } =e.target;

      setFormValues((prevValues)=> ({
        ...prevValues, 
        [name]:value,
      }))

      setFormErr((prevErrors)=> ({
        ...prevErrors,
        [name]: !!value,
      }))

      setFile(formValues.image);
      if (name === 'image' && e.target.files[0]){
        setFile(e.target.files[0]);
      }
      setFormValues({
        ...formValues, [name]:value,
      });
      if(e.target.value){
        setFormErr({
          ...formErr, [name]: false,
        });
      } else {
        setFormErr({
          ...formErr, [name]:true,
        })
      }
      // console.log(name, value)
    }
    
    const handleUpdate = async (e) => {
      e.preventDefault();
      
      try {
        // uploading without adding an image 
         if(profileImg === file ){
          const response = await axios
            .patch(`${API_URL}/profile/edit/${id}`, formValues);
            alert("profile updated");
            navigate(`../profile/${id}`)
        } 
        else {
          // uploading WITH image file
          const formData = new FormData();
          formData.append("image", file)
          
          for (const key in formValues){
            if (Object.prototype.hasOwnProperty.call(formValues, key)){
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
          alert("profile updated");
          navigate(`../profile/${id}`)
          console.log("I hope this works", response)
        }
      } catch(err){
        console.error(err)
      }
      

    }
    
  return (
    <>
      <h1>Update your Profile</h1>

      <form encType="multipart/form-data" onSubmit={handleUpdate}>
        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="first_name">First Name: </label>

          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder={profile ? `${profile.first_name}`: "Jane"} 
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
          <label className="create-form__label" htmlFor="last_name">Last Name: </label>
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
          <label className="create-form__label" htmlFor="belt_rank">What Belt Rank are you?</label>
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
              {profile? `${profile.belt_rank}`: 'Select a Belt'}
            </option>
            {belts?.filter((belt)=> belt.belt_rank!==formValues.belt_rank).map((belt) => (
              <option
                value={`${belt.belt_rank_id}, ${belt.belt_rank}`}
                key={`${belt.belt_rank_id}`}
              >
                {belt.belt_rank}
              </option>
            ))}
          </select>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label" htmlFor="club_name">Where do you train?</label>
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
            <option>{profile? `${profile.club_name}`: 'Select a club'}</option>
            {clubs?.filter((club)=>club.club_name !==formValues.club_name).map((club) => (
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
            placeholder={profile? `${profile.bio}`: "Tell us something"}
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
