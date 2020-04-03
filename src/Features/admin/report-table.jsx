import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import ConfirmDialog from "../user/confirm-dialog";


const ReportTable = ({reports}) => {
    const [title, setTitle] = React.useState(false);
    const [text, setText] = React.useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    console.log('reportModal');

    const onShow = (subject, comment) => {
        setShowConfirmDialog(true);
        setTitle(subject);
        setText(comment);
        console.log('reportshow');
    };

    function onClose() {
        setShowConfirmDialog(false);
        console.log('reportclose');
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Fra bruker</TableCell>
                        <TableCell>Om bruker</TableCell>
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
                                        onClick={() => onShow(report.subject, report.comment)}
                                        >
                                        Se
                                    </Button>

                                    <ConfirmDialog
                                        title={title}
                                        message={text}
                                        onConfirm={onClose}
                                        confirmButtonText="Lukk"
                                        open={showConfirmDialog}
                                    />

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
