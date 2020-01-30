import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const RegisterForm = () => {
    let [username_reg, setUsernameRegVar] = useState('');
    let [firstname_reg, setFullnameRegVar] = useState('');
    let [password_reg, setPasswordRegVar] = useState('');

    function register() {
        if (setFullnameRegVar.length > 1 && setUsernameRegVar.length > 1 && setPasswordRegVar.length > 1) {
            console.log(setUsernameRegVar);
            console.log(setFullnameRegVar);
            console.log(setPasswordRegVar);

            fetch("/api/register", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',

                },
                body: JSON.stringify({
                    username: setUsernameRegVar,
                    fullname: setFullnameRegVar,
                    password: setPasswordRegVar,
                })
            })
                .then((Response) => Response.json())
                .then((Result) => {
                    alert(Result);

                })
        }
        else {
            alert("Alle feltene må fylles ut");
        }
    }

    function setFullnameReg(e) {
        setFullnameRegVar = e.target.value;
    }

    function setUsernameReg(e) {
        setUsernameRegVar = e.target.value;
    }

    function setPasswordReg(e) {
        setPasswordRegVar = e.target.value;
    }

    return (
        <div style={{margin:'50px'}}>
            <h1>Registrer</h1>
            <Grid container spacing={4} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="username_reg"
                               required={true}
                               label="Username"
                               type="text"
                               onChange={setUsernameReg} autoFocus required/>
                </Grid>
            </Grid>

            <Grid container spacing={4} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="fullname_reg"
                               required={true}
                               label="Fullname"
                               type="text"
                               onChange={setFullnameReg}/>
                </Grid>
            </Grid>

            <Grid container spacing={4} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField
                        id="password_reg"
                        required={true}
                        onChange={setPasswordReg}
                        label="Password"
                        type="password"/>
                </Grid>
            </Grid>

            <Grid container spacing={10} justify="center" style={{marginTop: '10px'}}>
                <Button onClick={() => register()}
                        type="submit"
                        value="Submit"
                        variant="outlined"
                        color="primary"
                        style={{textTransform: "none"}}>Registrer</Button>
            </Grid>
        </div>
    );
};

export default RegisterForm;