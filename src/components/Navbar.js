import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

export default function Navbar(props) {
    const [open, setOpen] = useState(false);
    const temp = JSON.parse(localStorage.getItem('Sign-up-deets'));

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navigate = useNavigate();

    const logoutHandler = () => {
     
        localStorage.removeItem('Sign-up-deets');
   localStorage.setItem('logDeet',false)
        navigate('/signup');
    };
 const isLogged = JSON.parse(localStorage.getItem('logDeet'))
 console.log(isLogged)
 useEffect(()=>{

 },[isLogged])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleMobileMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        To Do Lo
                    </Typography>

                 
                  
                  
                    
                        {isLogged ? (
                            <>
                                <Button color="inherit" onClick={logoutHandler}>Log Out</Button>
                                <Button color="inherit" onClick={handleClick}>User Details</Button>
                                <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}  TransitionComponent={Slide}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {temp.email}
                </Alert>
            </Snackbar>
                            </>
                        ) : (
                           <>

                                 <Button color="inherit" href="/signup">Sign Up</Button>
                          
                           </>
                            
                        )}
                   
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={mobileMenuOpen} onClose={closeMobileMenu}>
                <List sx={{ width: "50vw" }}>
                    {isLogged ? (
                        <>
                          
                            <ListItem component="a" onClick={() => { closeMobileMenu(); logoutHandler(); }}>
                                <ListItemText primary="Log Out" sx={{ color: "primary.main" }} />
                            </ListItem>

                        </>
                    ) : (
                        <ListItem component="a" href="/signup" onClick={closeMobileMenu}>
                            <ListItemText primary="Sign Up" sx={{ color: "primary.main" }} />
                        </ListItem>
                    )}
                </List>

            </Drawer>
          
        </Box>
    );
}
