import './ListsStyling.scss';
import Button from '../Buttons/Buttons';
import TransparentIcon from "../../assets/icons/icononly_transparent_nobuffer.png";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function PositionsList(){
  const API_URL = import.meta.env.VITE_BASE_URL;
  const [allPositions, setAllPositions] = useState([]);
  
  useEffect(()=> {
    axios
    .get(`${API_URL}/positions`)
    .then((positions)=>{
      setAllPositions(positions.data)
    })
    .catch((err)=> {
      console.log(err, "error at axios all positions list")
    })
  },[API_URL]);

    return(
           // classNames are written to be reusable styling sheet for future lists
    <div className="list__wrapper">
    <h3 className="list__title">
    Select a position below to learn more  </h3>
    <ul className="list__list">
      
      {/* <div className="logo">
        <img src={TransparentIcon} alt="logo" className="logo__img logo__img--animation"/>
        <p>Keep on Rolling & Reflecting</p>

      </div> */}
      {allPositions
      .slice()
      .sort((a,b)=>a.position_name.localeCompare(b.position_name))
      .map((singlePosition) => 
      (
        <Link
          to={`/positions/${singlePosition.position_id}`}
          key={`${singlePosition.position_id}`}
        >
          <div className="list__item">{`${singlePosition.position_name}`}</div>
        </Link>
      ))
      }
    </ul>
    <Button
      text="Add Position"
      type="button"
      // clickHandler={handleAddTechnique}
    />
  </div>
    )
}

export default PositionsList