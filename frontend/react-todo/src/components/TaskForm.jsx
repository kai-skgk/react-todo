import React, {useState} from 'react'
import AddButton from './AddButton'
import InputTodo,{ getInput } from './InputTodo'



const TaskForm = () => {
    const [task, setTask] = useState();
    const handleChange = (event) => {
        setTask(event.target.value)
    }
    return (<>
    <InputTodo task={task} handleChange={handleChange}/>
    <AddButton name={task} />
    </>)
}

export default TaskForm