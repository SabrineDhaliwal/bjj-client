import react from 'react'
import Button from '../Buttons/Buttons'

function Navbar() {
    return (
        <>
        <div className="nav__wrapper">
            <div className="nav__btn-container">
                <Button text ="Home"/>
                <Button text ="Calendar" />
                <Button text = "Add Summary" />
                <p>Calendar</p>
                <p>Add your Class Recap</p>
            </div>
        </div>
        </>
    )
}

export default Navbar