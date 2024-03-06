import UserProfileForm from "../../components/UserProfileForm/UpdateProfileForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function EditProfilePage(){

    const API_URL = import.meta.env.VITE_BASE_URL;
    const [clubs, setClubs] = useState();
    const [belts, setBelts]= useState();
   
    const { id } = useParams();

    //loading belts on mount
  useEffect(() => {
    axios
      .get(`${API_URL}/utils/belts`)
      .then((belts) => {
        setBelts(belts.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [API_URL]);

  // loading clubs on mount

  useEffect(() => {
    axios
      .get(`${API_URL}/utils/clubs`)
      .then((clubs) => {
        setClubs(clubs.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [API_URL]);
    return(
        <>
        {/* use this when updating profile */}
        <UserProfileForm belts={belts} clubs={clubs}/>
        </>
    )
}