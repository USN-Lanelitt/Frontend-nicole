import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CommentModal from "./comment-modal";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

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

const ReportTable = ({reports}) => {
    const classes = useStyles();
    const [text, setText] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Fra</TableCell>
                        <TableCell>Om</TableCell>
                        <TableCell>Emne</TableCell>
                        <TableCell>Tidspunkt</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        reports.map((report) =>
                            (<TableRow key={report.id}>
                                <TableCell component="th" scope="row">
                                    {report.id}
                                </TableCell>
                                <TableCell>{report.reporter.id}</TableCell>
                                <TableCell>{report.reported.id}</TableCell>
                                <TableCell>{report.subject}</TableCell>
                                <TableCell>{report.timestamp}</TableCell>

                                <TableCell>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                        onClick={handleOpen}
                                        >
                                        Se
                                    </Button>
                                    <Modal

                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                    >

                                        <div className={classes.paper}>

                                        </div>

                                    </Modal>

                                </TableCell>

                            </TableRow>)
                        )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReportTable;
