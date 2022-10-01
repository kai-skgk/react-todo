import React, {useState} from 'react';
import { TextField } from '@mui/material';



const InputTodo = (props) => {
    const {task, handleChange} = props

    return (<>
    <TextField
    label="タスク" 
    value={task}
    variant="outlined"
    onChange={(event) => {
        handleChange(event)
    }} />
    </>)
}

export default InputTodo