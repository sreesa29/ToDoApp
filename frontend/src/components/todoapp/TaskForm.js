import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

function TaskForm(props) {

    const [todovalues, setTodovalues] = useState({todoName1:"", todoDesc1:""});

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            todoName: data.get("todoName"),
            todoDesc: data.get("todoDesc")
        });
        const todoName =  data.get("todoName");
        const todoDesc = data.get("todoDesc");
        setTodovalues({todoName1: todoName , todoDesc1: todoDesc })
        console.log(todovalues)
    };
         async function fetchToDo(){
             if(todovalues.todoName1 === ""){
                alert("Empty Task name is not allowed");
             }else{
             const todoName = todovalues.todoName1;
             const todoDesc = todovalues.todoDesc1;
             const response = await fetch("http://localhost:8989/addTodo",{
                 method:"post",
                 body: JSON.stringify({todoName,todoDesc}),
                 headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': "*"
                }
             })
             const body = await response.json();
             console.log(body);
             fetchToDo();
            }

         }
    return (
        <div style={{paddingBottom:"20px"}}>
             <Box
              component="form"
              noValidate
              onChange={handleSubmit}
              sx={{ mt: 1 }}>
            <TextField margin="normal" fullWidth name="todoName" required autoFocus label="Task Name" />
            <TextField margin="normal" fullWidth name="todoDesc" autoFocus label="Task Description"/>     
            <Button type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} onClick={fetchToDo}>Save</Button>   
            </Box>    
        </div>
    );
}

export default TaskForm;