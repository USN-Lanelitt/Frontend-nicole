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

const SearchTable = ({users}) => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));

    function sendRequest(friendId) {
        console.log("sendFriendRequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/'+userId+'/request/'+friendId)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fornavn</TableCell>
                        <TableCell >Mellomnavn</TableCell>
                        <TableCell >Etternavn</TableCell>
                        <TableCell >Valg</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        users.map((user) =>
                            (<TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.firstName}
                                </TableCell>
                                <TableCell>{user.middleName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>
                                    <Button onClick={() => sendRequest(user.id)}
                                            size="small"
                                            color="primary"
                                            variant="contained"
                                        >
                                        Bli venn
                                        </Button>
                                </TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SearchTable;
