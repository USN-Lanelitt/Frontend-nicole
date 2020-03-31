import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import Box from "@material-ui/core/Box";

const ComboList = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        console.log("getcombosearch", userId, sessionStorage.getItem('userId'));
        axios.get('/users')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setUsers(response.data);
                }
            })
            .catch(e => console.log(e));
    }, [setUsers, userId]);

    return (
        <Box m={2} display="flex" alignItems="center" flexDirection="column">
            <Autocomplete
                id="combo-box-demo"
                options={users}
                getOptionLabel={option => option.firstName}
                style={{ width: 300 }}
                renderInput={params => <TextField {...params} label="Søk på bruker.." variant="outlined" />}
            />
        </Box>
    );
};

export default ComboList;
