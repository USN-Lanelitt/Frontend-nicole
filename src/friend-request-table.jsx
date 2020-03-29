import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import axios from "axios";

const FriendRequestTable = ({users}) => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));

    function reply(friendId, status) {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/'+userId+'/friendRequest/'+friendId+'/'+status)
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
                            (<TableRow key={user.user1.id}>
                                <TableCell component="th" scope="row">
                                    {user.user1.firstName}
                                </TableCell>
                                <TableCell>{user.user1.middleName}</TableCell>
                                <TableCell>{user.user1.lastName}</TableCell>
                                <TableCell>
                                    <ButtonGroup size="small" color="primary" variant="contained">
                                        <Button onClick={() => reply(user.user1.id, 1)}>Godkjenn</Button>
                                        <Button onClick={() => reply(user.user1.id, 2)}>Avslå</Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FriendRequestTable;
