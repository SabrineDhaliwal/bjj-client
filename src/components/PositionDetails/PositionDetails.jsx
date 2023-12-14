import "./PositionDetails.scss";
import BackButton from "../../assets/icons/left-arrow.png";
import { Link } from "react-router-dom";

function PositionDetails(){


    return(
        <div className="details">
        <h2>This page is under construction. Check back soon for updates</h2>
        <Link 
     to='/positions'>
     <img src={BackButton} alt='back-button'/>
     </Link>
        </div>
    )
}

export default PositionDetails;