import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import FriendTable from "./friend-table";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";

const UserList = () => {
    const axios = require('axios').default;
    const userid = 18;
    const friendid = 40;

    sessionStorage.setItem('userId', userid);
    const [id, setId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    function getUsers() {
        console.log("", id, sessionStorage.getItem('userId'));
        setLoading(true);
        axios.get('/user/'+id+'/friends')
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
        console.log("getusers");
    }

    return (
        <div>
            <h2>User list</h2>
            <Box m={2}>
                <Button onClick={() => getUsers()} color="primary" variant="contained">Get users</Button>
                <Button onClick={() => setUsers([])} color="primary" variant="contained">Clear</Button>
            </Box>

            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                {loading ? <CircularProgress size={70}/> : <FriendTable users={users}/>}
            </Box>
        </div>
    );
};

export default UserList;
