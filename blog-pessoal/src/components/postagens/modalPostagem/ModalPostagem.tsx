import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button,Box } from "@mui/material"
import CloseIcon from '@material-ui/icons/Close';
import './ModalPostagem.css';
import CadastroPost from '../cadastroPost/CadastroPost';
import { blue } from '@material-ui/core/colors';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: "#90caf9",
      // theme.palette.background.paper,
      border: '8px solid #3b0953',
      boxShadow: theme.shadows[5],
      borderRadius: '3rem',
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function ModalPostagem () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    
    <div style={modalStyle} className={classes.paper}>

      <Box display="flex" justifyContent="flex-end" color='inherit' className="cursor">
        <CloseIcon onClick={handleClose}/>
      </Box>
      
      <CadastroPost/>
      
    </div>
  );

  return (

    <div>

      <Button
        variant="outlined"
        className="btnModal"
        onClick={handleOpen}>Nova Postagem
        </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

    </div>
  );
}
export default ModalPostagem