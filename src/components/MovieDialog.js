import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './VideoBackground';




export default function MovieDialog() {
   
  const { open, id} = useSelector((store)=>store.movie);
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
    
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
             <VideoBackground movieId={id} bool={true}></VideoBackground>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
         
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}