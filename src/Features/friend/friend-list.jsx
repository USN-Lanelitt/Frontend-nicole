import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import FriendTable from "./friend-table";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FriendList = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);

    function getFriends() {
        console.log("getfriends", userId, sessionStorage.getItem('userId'));
        setLoading(true);
        axios.get('/user/'+userId+'/friends')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setFriends(response.data);
                setLoading(false);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setFriends, userId]);
    }

    return (
        <div>
            <h2>Friend list</h2>
            <Box m={2}>
                <ButtonGroup color="primary" variant="contained">
                    <Button onClick={() => getFriends()}>Get friends</Button>
                    <Button onClick={() => setFriends([])}>Clear</Button>
                </ButtonGroup>
            </Box>

            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                {loading ? <CircularProgress size={60}/> : <FriendTable users={friends}/>}
            </Box>
        </div>
    );
};

export default FriendList;
