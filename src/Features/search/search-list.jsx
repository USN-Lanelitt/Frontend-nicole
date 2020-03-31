import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import SearchTable from "./search-table";
import React, { useState, useEffect } from 'react';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 30,
        width: 250,
        height: 40,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    inputField: {
        paddingLeft: theme.spacing(2),
        fontSize: 14,
    },
    iconButton: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(0.5),
    },
}));

const SearchList = () => {
    const classes = useStyles();

    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState();

    function getUsers() {
        console.log("getsearch", userId, sessionStorage.getItem('userId'), search);
        setLoading(true);
        axios.get('/user/'+userId+'/search/'+search)
            .then((response) => {
                if (response.status === 200) {
                    console.log(search);
                    console.log(response.data);
                    setUsers(response.data);
                    setLoading(false);
                }
            })
            .catch((e) => {
                console.log(e);
            }, [setUsers, userId]);
    }

    const onChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
        console.log(search);
        getUsers();
    };

    useEffect(() => {
        console.log('statussearch: ' + search);
    });

    return (
        <div>
        <h2>Search</h2>
            <Box m={2}display="flex" alignItems="center" flexDirection="column">
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Søk på bruker.."
                        inputProps={{ 'aria-label': 'id no.', className: classes.inputField }}
                        onChange={onChange}

                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Button onClick={() => setUsers([])} color="primary" variant="contained">Clear</Button>
            </Box>

            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                {loading ? <CircularProgress size={60}/> : <SearchTable users={users}/>}
            </Box>
        </div>

    );
};

export default SearchList;
