import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";
import FriendRequestTable from "./friend-request-table";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FriendRequestList = () => {
    const [id, setId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    function getUsers() {
        console.log("getuserrequest", id, sessionStorage.getItem('userId'));
        setLoading(true);
        axios.get('/user/'+id+'/friendRequests')
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                setUsers(response.data);
                setLoading(false);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setUsers, id]);
    }

    return (
        <div>
            <h2>Friend Request list</h2>
            <Box m={2}>
                <ButtonGroup color="primary" variant="contained">
                    <Button onClick={() => getUsers()}>Get friend requests</Button>
                    <Button onClick={() => setUsers([])}>Clear</Button>
                </ButtonGroup>
            </Box>

            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                {loading ? <CircularProgress size={60}/> : <FriendRequestTable users={users}/>}
            </Box>
        </div>
    );
};

export default FriendRequestList;
