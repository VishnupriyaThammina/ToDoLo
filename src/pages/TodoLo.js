import React from "react";
import { TextField, Grid, Button } from '@mui/material';
import { useState } from "react";
import Task from "../components/Task";
import { useEffect } from "react";

export default function ToDoLo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [editt, setEdit] = useState("");
    const [checked, setChecked] = useState(false)
    function add(e) {
        e.preventDefault();
        if (task.trim() !== "") {
            setTodos([...todos, task]);
            setTask("");
        }


    }

    function del(index) {
        console.log(index)
        const a = [...todos]
        a.splice(index,1)
        setTodos(a)
    }


    function edittask(index) {
        console.log("editable: ", editt)
        const a = [...todos]
        a[index] = editt
        setTodos(a)


    }

    useEffect(() => {
        localStorage.setItem('todolo', JSON.stringify(todos))

    }, [todos])
    console.log(todos)
    return (
        <>

            <Grid container justifyContent="center" alignItems='center' height="20vh">
                <Grid item sx={{
                    width: "45%",
                    '@media (max-width: 600px)': {
                        width: '60%',
                    },
                }}>
                    <TextField
                        label="Enter Task"
                        variant="filled"
                        id="text"
                        type="text"
                        name="text"
                        onChange={(e) => { e.preventDefault(); setTask(e.target.value) }}
                        sx={{ backgroundColor: "#FFEADD" }}
                        InputProps={{ disableUnderline: true }}
                        fullWidth
                    />
                </Grid>
                <Grid item display="flex" justifyContent="center" alignItems="center" >
                    <Button
                        type="submit"
                        variant="contained"
                        elevation={1}
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            height: "7.25vh",
                            borderRadius: "10",
                            '&:hover': {
                                backgroundColor: 'primary.main',

                            },
                        }}

                        href="/"
                        onClick={add}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            <ul >


                {todos.map(function (todo, index) {
                    return <li key={index} style={{ listStyleType: "none" }}>  <Task taskie={todo} todosAr={todos} del={()=>del(index)} editt={editt} checked={checked} setEdit={setEdit} edittask={() => edittask(index)} setChecked={setChecked} /></li>;
                })}</ul>

        </>
    )
}