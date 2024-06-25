import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const handleDialog = () => {
    props.setOpen(!props.open);
  };

  const handleConfirm = () => {
    props.setOpen(!props.open);
    props.onConfirm();
  }

  return (
    <Dialog
        open={props.open}
        onClose={handleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {props.title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.text}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDialog}>Cancelar</Button>
            <Button onClick={handleConfirm} autoFocus>
            Confirmar
            </Button>
        </DialogActions>
    </Dialog>
  );
}