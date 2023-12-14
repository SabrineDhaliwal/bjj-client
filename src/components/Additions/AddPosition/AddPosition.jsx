import Button from "../../Buttons/Buttons";

function AddPosition (){
    return(
        <>
<form>
        <div className="add__input-wrapper">
        <div className="add__input-set">
          <label className="add__label">Position Name</label>
          <input type="text" id="" name="" className="add__input"/>
        </div>

        <div className="add__input-set">
          <label className="add__label">Type</label>
          <input type="text" id="" name="" className="add__input" placeholder="Joint? Strangle? Defense?"/>
        </div>
        <div className="add__input-set">
          <label className="add__label">Level</label>
          <input type="text" id="" name="" className="add__input" placeholder="Beginner? Intermediate? Advanced?"/>
        </div>
        <div className="add__input-set">
          <label className="add__label"> Description</label>
          <textarea type="text" id="" name="" className="add__input"></textarea>
        </div>

        </div>
        <div className="btn-container">
          <Button text="Add Position" />
        </div>
      </form>
    </>
    )
}

export default AddPosition