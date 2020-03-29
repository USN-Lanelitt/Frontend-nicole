import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Report from "./report-form";

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

const ReportModal = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [subject, setSubject] = useState();
    const [comment, setComment] = useState();



    const body = (
        <Fade in={open}>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Rapporter sak
                </Typography>
                <form className={classes.form} noValidate>
                    <input
                        id="sSubject"
                        name="subject"
                        type="text"
                        className={classes.textfield}
                    />
                    <textarea
                        id="sComment"
                        name="comment"
                        className={classes.textarea}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Send
                    </Button>
                </form>
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

export default ReportModal;