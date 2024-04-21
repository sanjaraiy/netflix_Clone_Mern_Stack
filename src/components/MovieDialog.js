import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';




export default function MovieDialog() {
   
  const open  = useSelector((store)=>store.movie.open);
  const dispatch = useDispatch();


  const handleClose = () =>{
       dispatch(setOpen(false));
  }
 
  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
         
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}