import "./SummaryList.scss";

function SummaryList() {
  return (
    <div className="summary-list">
      <div className="summary-list__left">img preview</div>
      <div className="summary-list__center">
        <div className="summary-list__center-top">
          <p>title</p>
          <p>date</p>
        </div>
        <div className="summary-list__center-bottom">
          <p>Summary</p>
          <p> tech, target, position</p>
        </div>
      </div>
      <div className="summary-list__right">
        <div>edit button/icon</div>
        <div>delete button/icon</div>
      </div>
    </div>
  );
}

export default SummaryList;
