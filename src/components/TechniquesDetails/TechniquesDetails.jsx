import "./TechniqueDetails.scss";


function TechniquesDetails({techById}) {
  
  return (
    <>
    <div className="details">
    <h3 className="details__header">The Details</h3>
      <div>
        <p className="details__subheader">Technique<span className="details__text"><br />{`${techById.tech_name}`}</span></p>
        <p className="details__subheader">Target<span className="details__text"><br />{`${techById.type}`}</span></p>
        <p className="details__subheader">Level<span className="details__text"><br />{`${techById.level}`}</span></p>
        <p className="details__subheader">What is it?<span className="details__text"><br />{`${techById.description}`}</span></p>
      </div>
      </div>
    </>
  );
}
export default TechniquesDetails;
