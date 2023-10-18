import React, { useState } from "react";
import { Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import AuthTemplate from "../components/AuthTemplate";

export default function Login() {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    const [openSnackbar, setOpenSnackbar] = useState(false);
    
    const navigate = useNavigate();
    const handleSnackbarOpen = () => {
        setOpenSnackbar(true);
    };
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const temp = JSON.parse(localStorage.getItem('Sign-up-deets'))
        if (temp) {
            console.log("details:", details)
            console.log("temp", temp)
            if (temp.email === details.email && temp.password === details.password) {
                console.log("user is authenicated")
                localStorage.setItem('logDeet',true)

                navigate('/list');

            } else {
                console.log("false")
                handleSnackbarOpen();

            }
        }

        // Add form submission logic and validation here

    };
    return (

        <>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: '70vh' }}>
              <AuthTemplate handleSubmit={handleSubmit} fname="Login" details={details} setDetails={setDetails}/>
                <Snackbar open={openSnackbar} autoHideDuration={800} onClose={handleSnackbarClose}  TransitionComponent={Slide}>
    <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
        Authentication failed. Please check your email and password.
    </MuiAlert>
</Snackbar>
            </Grid>
        </>

    )
}