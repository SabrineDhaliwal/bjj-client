import Button from "../Buttons/Buttons";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProfileForm({ belts, clubs }) {
  const API_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const [profile, setProfile] = useState();

  //getting current profile information
  useEffect(() => {
    axios.get(`${API_URL}/profile/${id}`).then((response) => {
      console.log(response.data);
      setProfile(response.data[0]);
      formik.setValues(response.data[0]);
    });
  }, [API_URL, id]);

  const formik = useFormik({
    initialValues: {
      // user_id: profileObj?.user_id,
      // first_name: profileObj?.first_name,
      // last_name: profileObj?.last_name,
      // club_name: profileObj?.clubName,
      // belt_rank: profileObj?.belt_rank,
      // bio: profileObj?.bio,
      // image: profileObj?.image
    },

    // profile? formik.setValues(profile): null;
  });

  return (
    <>
      <h1>Update your Profile</h1>

      <form>
        <div className="create-form__input-set">
          <label className="create-form__label">First Name: </label>

          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Jane"
            className={
              //   formik.errors.first_name
              //     ? "create-form__field create-form__field--error"
              //     :
              "create-form__field"
            }
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
        </div>
        <div className="create-form__input-set">
          <label className="create-form__label">Last Name: </label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Doe"
            className={
              //   formik.errors.last_name
              //     ? "create-form__field create-form__field--error"
              //     :
              "create-form__field"
            }
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
        </div>
        <div className="create-form__input-set">
          <label className="create-form__label">What Belt Rank are you?</label>
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
            onChange={formik.handleChange}
            value={formik.values.belt_rank}
          >
           
            <option value="" disabled="disabled">
              Select a Belt
            </option>
            {belts?.filter((belt)=> belt.belt_rank!==formik.values.belt_rank).map((belt) => (
              <option
                value={`${belt.belt_rank_id}, ${belt.belt_rank}`}
                key={belt.belt_rank_id}
              >
                {formik.values.belt_rank}
              </option>
            ))}
          </select>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label">Where do you train?</label>
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
            onChange={formik.handleChange}
            value={formik.values.club_name}
          >
            <option>Select Club</option>
            {clubs?.map((club) => (
              <option
                value={`${club.club_id},${club.club_name}`}
                key={club.club_id}
              >
                {club.club_name}
              </option>
            ))}
          </select>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label">
            Tell Us About Yourself (optional):
          </label>
          <textarea
            id="bio"
            type="text"
            name="bio"
            placeholder="Tell us something"
            className="create-form__field"
            onChange={formik.handleChange}
            value={formik.values.bio}
          ></textarea>
        </div>

        <div className="create-form__input-set">
          <label className="create-form__label">
            Upload a photo (optional)
          </label>
          <input
            id="image"
            type="file"
            name="image"
            multiple
            accept="image/*"
            className="create-form__input create-form__input--color"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>
        <Button text={"Update Profile"} type="submit" />
      </form>
    </>
  );
}

export default UserProfileForm;
