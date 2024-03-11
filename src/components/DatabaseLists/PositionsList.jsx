import './ListsStyling.scss';

import { Link } from 'react-router-dom';


function PositionsList({allPositions}){


    return(
           // classNames are written to be reusable styling sheet for future lists
    <div className="list__wrapper">
    <h3 className="list__title">
    Select a position below to learn more  </h3>
    <ul className="list__list">
      
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
   
  </div>
    )
}

export default PositionsList