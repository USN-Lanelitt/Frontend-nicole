import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const UserTable = ({users}) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fornavn</TableCell>
                        <TableCell >Etternavn</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) =>
                            (<TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.fornavn}
                                </TableCell>
                                <TableCell>{user.etternavn}</TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
