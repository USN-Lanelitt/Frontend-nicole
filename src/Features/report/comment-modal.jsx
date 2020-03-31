import React, {useState} from 'react';
import useInput from "./use-input";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 400,
        height: 500,
    },
    textfield: {
        width: 330,
        height: 30,
        marginBottom: 20,
        marginTop: 23,
    },
    textarea: {
        width: 330,
        height: 250,
        marginBottom: 30,
    },
}));

const CommentModal = props => {
    const classes = useStyles();
    let id = 4;
    sessionStorage.setItem('userId2', id);

    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setId2] = useState(sessionStorage.getItem('userId2'));
    const { value:subject, bind:bindSubject, reset:resetSubject } = useInput('');
    const { value:comment, bind:bindComment, reset:resetComment } = useInput('');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Emne: ${subject}, Melding: ${comment}`);
        resetSubject();
        resetComment();
    };

    const body = (
        <Fade in={open}>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Rapporter sak
                </Typography>



            </div>
        </Fade>
    );

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                Rapporter
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                {body}
            </Modal>
        </div>
    );
};

export default CommentModal;