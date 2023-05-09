import css from './AddTaskForm.module.css'
import data from '../../mock.json'
import { useState } from 'react'
function AddNewTaskForm () {
    const [title, setTitle] = useState ('')
    const [tasks, setTasks] = useState(data)
    const AddNewTask = (e) => {
        e.preventDefault ()
        
        const newTask = {
            id: Date.now(),
            title,
            description : '',
            status: 'Backlog'
        }
        setTasks ([...tasks, newTask])
        setTitle ('')
        console.log (tasks)

    }
    return (
        
        <div>
            <input type="text" placeholder="Type New Task Title" className={css.input}
            value = {title}
            onChange={e => setTitle (e.target.value)} />
            <br />
            <button className={css.btn} onClick={AddNewTask}> Submit</button>
        </div>
    )
}
export default AddNewTaskForm;