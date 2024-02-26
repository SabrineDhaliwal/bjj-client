import UserProfileForm from "../../components/UserProfileForm/UserProfileForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function EditProfilePage(){

    const API_URL = import.meta.env.VITE_BASE_URL;
    const [clubs, setClubs] = useState();
    const [belts, setBelts]= useState();
   
    const { id } = useParams();

    // //getting current profile information 
    // useEffect(()=> {
    //     axios.get(`${API_URL}/profile/${id}`)
    //     .then((response)=> {
    //         console.log(response.data)
    //         setProfile(response.data[0])
    //     })
    // },[API_URL, id])

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