import './ListsStyling.scss';
import TransparentIcon from "../../assets/icons/icononly_transparent_nobuffer.png";

function PositionsList(){
    return(
           // classNames are written to be reusable styling sheet for future lists
    <div className="list__wrapper">
    <h3 className="list__title">
    We still working on this page, we appreaciate your patiences. Opportunity to add to our database coming soon  </h3>
    <ul className="list__list">
      
      <div className="logo">
        <img src={TransparentIcon} alt="logo" className="logo__img logo__img--animation"/>
        <p>Keep on Rolling & Reflecting</p>

      </div>
      {/* {allTechs
      .slice()
      .sort((a,b)=>a.tech_name.localeCompare(b.tech_name))
      .map((singletech) => (
        <Link
          to={`/techs/${singletech.tech_id}`}
          key={`${singletech.tech_id}`}
        >
          <div className="list__item">{`${singletech.tech_name}`}</div>
        </Link>
      ))} */}
    </ul>
    {/* <Button
      text="Add Technique"
      type="button"
      clickHandler={handleAddTechnique}
    /> */}
  </div>
    )
}

export default PositionsList