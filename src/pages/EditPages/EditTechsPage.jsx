import Button from "../../components/Buttons/Buttons"
import EditTechForm from "../../components/Edits/EditTechForm"
import { useNavigate } from "react-router-dom"

export function EditTechsPage(){
    const navigate = useNavigate()
    const handleSubmit =()=> {
        console.log('submit clicked')
    }

   const handleBack =()=> {
    navigate(-1)
   }

    return (
        <>
        <h1>Welcome to Edit Tech page</h1>
        <p> This feature is coming soon</p>
        {/* <EditTechForm /> */}

       <Button text={'Back'} clickHandler={handleBack}/> 

        
        </>
    )
};

