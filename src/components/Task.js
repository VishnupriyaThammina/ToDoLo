import React from "react";
import { TextField, Grid, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from "@mui/material/FormGroup"; 
import FormControlLabel from "@mui/material/FormControlLabel"; 
import Checkbox from "@mui/material/Checkbox"; 
  


export default function Task(props){
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
<>
<Grid container display='flex' alignItems="center" justifyContent="center" sx={{marginTop:"2vh"}}>
                <Grid item container display='flex' alignItems="center" justifyContent="center" 
                 elevation={2}
                sx={{
                      boxShadow: 5,
                      borderRadius: "0.3rem",
                      height: "5rem",
                      backgroundColor: "#FEF2F4",

                    width: "45%",
                    '@media (max-width: 600px)': {
                        width: '100%',
                      
                    },
                }} >
                    
                        <Grid container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                            <Grid display="flex" item justifyContent="center" alignItems="center" sx={{height:"5rem",padding:"1vh"}}>
                            <FormGroup> 
                    <FormControlLabel 
                        control={<Checkbox 
                        size="small" 
                      
                        style ={{
                            color: "primary.main",
                          }}
                     />} 
                        label={props.taskie}
                    /> </FormGroup> 
                            </Grid>

                            
                            <Grid container display="flex" justifyContent="center" alignItems="center" direction="column" sx={{width:"26%",height:"5rem",padding:"1vh"}} >
                            <Grid item >
                                <Button
                                 onClick={(e)=>{e.preventDefault();
                                    handleClickOpen()}}
                                    type="submit"
                                    variant="contained"
                                    elevation={1}
                                    sx={{
                                        backgroundColor: '#D14D72',
                                        color: 'white',
                                        height: "7.25vh",
                                        borderRadius: "10",
                                        '&:hover': {
                                            backgroundColor: 'primary.main',

                                        },
                                    }}

                                    href="/"
                                >
                                    Edit
                                </Button>
                            </Grid>
                            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
           It does not matter how slowly you go as long as you do not stop, Keep grinding
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Text"
            type="text"
            fullWidth
            variant="standard"
            multiline
            maxRows={4}
            onChange={(e)=>{e.preventDefault(); props.setEdit(e.target.value);}}
         
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e)=>{e.preventDefault();props.edittask();handleClose();}}>Edit</Button>
        </DialogActions>
      </Dialog>
                     <Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                elevation={1}
                                sx={{
                                    backgroundColor: '#D14D72',
                                    color: 'white',
                                    height: "7.25vh",
                                    borderRadius: "10",
                                    '&:hover': {
                                        backgroundColor: 'primary.main',

                                    },
                                }}
onClick={(e)=>{
    e.preventDefault();
    props.del(props.index)
}}
                                href="/"
                            >
                                Delete
                            </Button>
                            </Grid> 
                        </Grid>
                            </Grid>
                           
                        <Grid>

                        </Grid>

                

                </Grid>
            </Grid>
</>
    );
}