import "./CreateAccountPage.scss";

function CreateAccountPage(){

    return (
        <>
        <h1>We're happy you've decided to commit</h1>
        <p>We have a few questions, please fill out the form</p>
        <form>
            <label>First Name</label>
            <input type="text"
            name="name_first"
            />
            <label>Last Name</label>
            <input type ="text"
            name="name_last"
            />
            <label>Pick a Username</label>
            <input type="text" 
            name="username"/>

            <label>What Belt Rank are you?</label>
            <select> 
            {/* create table of belts in database */}
            </select>

            <label>Tell Us About Yourself</label>
            <textarea type="text"></textarea>

            <label>Upload a photo (if you'd like)</label>
            


        </form>

        </>
    );
}

export default CreateAccountPage