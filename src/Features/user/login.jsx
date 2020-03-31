import React, { useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '50%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {

    const classes = useStyles();
    const [id, setId] = useState();

    function handleLogin() {
        sessionStorage.clear();
        sessionStorage.setItem('userId', id);
        console.log('login');
        console.log(sessionStorage.getItem('userId'));
    }

    const handleChange = () => event => {
        setId(event.target.value);
        console.log('loginchange');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Logg inn
                </Typography>
                <form onSubmit={handleLogin} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="sId"
                        label="UserId"
                        name="id"
                        type="text"
                        onChange={handleChange()}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Logg inn
                    </Button>

                    <Grid container>

                    </Grid>

                </form>
            </div>

        </Container>
    );
};

export default Login;
