import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import UserTable from "./user-table";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    function getUsers() {
        setLoading(true);
        fetch("/api/users", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }).then(response => Promise.all([response, response.json()])
        ).then(([result, json]) => {
            if (result.status === 200) {
                setUsers(json);
                setLoading(false);
            }
        }).catch((error) => {
            console.log(error);
        });

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
                {loading ? <CircularProgress size={70}/> : <UserTable users={users}/>}
            </Box>

        </div>
    );
};

export default UserList;
