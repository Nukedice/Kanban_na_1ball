import { useState } from 'react';
import './AddCardButton.css'
import AddNewTaskForm from '../AddTaskForm/AddTaskFrom';
function AddCardButton(props) {
    const [bntState, setBtnState] = useState(true);
    function handleClick() {
        setBtnState(!bntState)
    }
    function openAddForm() {
        if (bntState) {
            return <button className="add-card" onClick={handleClick}>+ Add card </button>
        }
        else return (<AddNewTaskForm  />)
    }
    return (
        openAddForm()
    )

}
export default AddCardButton;