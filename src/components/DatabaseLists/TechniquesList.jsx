import "./ListsStyling.scss";
import { Link } from "react-router-dom";



function TechniquesList({ allTechs }) {

  return (

    // classNames are written to be reusable styling sheet for future lists
    <div className="list__wrapper">
      <h3 className="list__title"> Techniques </h3>
      <p>Select a technique below to learn more</p>
      <ul className="list__list">
        {/* rending list of all techniques in database */}
        {allTechs
        .slice()
        .sort((a,b)=>a.tech_name.localeCompare(b.tech_name))
        .map((singletech) => (
          <Link 
            to={`/techs/${singletech.tech_id}`}
            key={`${singletech.tech_id}`}
          >
            <div className="list__item">{`${singletech.tech_name}`}</div>
          </Link>
        ))}
      </ul>
    
     
    </div>
  );
}
export default TechniquesList;
