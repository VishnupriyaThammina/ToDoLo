import React from "react";
import { Grid, TextField, Button } from '@mui/material';

export default function AuthTemplate(props){
    return (
        <>
           <form onSubmit={props.handleSubmit}>
                    <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                        <Grid item textAlign="center">
                            <h1 sx={{ color: "#434d43" }}>{props.fname}</h1>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Email"
                                variant="filled"
                                type="email"
                                required
                                value={props.details.email}
                                onChange={(e) => props.setDetails({ ...props.details, email: e.target.value })}
                                style={{ marginTop: 11 }}
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Password"
                                variant="filled"
                                type="password"
                                required
                                autoComplete="on"
                                value={props.details.password}
                                onChange={(e) => props.setDetails({ ...props.details, password: e.target.value })}
                                style={{ marginTop: 11 }}
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                variant="contained"
                                elevation={1}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    width: "220px",
                                    borderRadius: "10",
                                    '&:hover': {
                                        backgroundColor: '#E0E3E7',
                                        color: 'black',
                                    },
                                }}
                            >
                                {props.fname}
                            </Button>

                        </Grid>
                    </Grid>
                </form>
        </>
    )
}