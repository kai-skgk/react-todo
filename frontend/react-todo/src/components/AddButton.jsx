import React from 'react'
import { Button } from '@mui/material';
import axios from 'axios'
import { insertTasks } from './DbConnection';

const insert = async (name) => {
    await insertTasks(name)

}

const AddButton = (props) => {
    return(<>
        <Button onClick={() => {
            insert(props.name)
        }}>タスク追加</Button>
    </>)

}

export default AddButton