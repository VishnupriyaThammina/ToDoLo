import React, { useState } from "react";
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthTemplate from "../components/AuthTemplate";
export default function Signup() {

    const [ details,setDetails]= useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details)
        localStorage.setItem('Sign-up-deets',JSON.stringify(details))
        // Add form submission logic and validation here
        navigate('/login');

    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '70vh',
    }}>
              <AuthTemplate handleSubmit={handleSubmit} fname="Sign UP" details={details} setDetails={setDetails}/>
          
        </Grid>
    );
}
