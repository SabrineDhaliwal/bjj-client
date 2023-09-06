import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails";
import SummaryList from "../../components/SummaryList/SummaryList";
import SummaryInput from "../../components/SummaryInput/SummaryInput";
import { useNavigate } from "react-router-dom";

function UserProfilePage() {
  const API_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const handleEdit = (event) => {
    navigate("/edit");
  };

  return (
    <>
      <UserProfileDetails />
      {/* center display of video? */}
      <SummaryInput />
      <SummaryList handleEdit={handleEdit} />
    </>
  );
}

export default UserProfilePage;
