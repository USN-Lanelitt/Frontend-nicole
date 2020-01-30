import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';


const LoginForm = () => {
    let [username, setUsernameVar] = useState('');
    let [password, setPasswordVar] = useState('');

    function login() {
        if (setUsernameVar.length > 1 && setPasswordVar.length > 1) {
            console.log("Brukernavn");
            console.log(setUsernameVar);
            console.log("Passord");
            console.log(setPasswordVar);

            fetch('/api/login', {
                method: 'post',
                headers : {
                    // 'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    username: setUsernameVar,
                    password: setPasswordVar,
                })
            }).then(Response => Response.json())
                .then((Result, json) => {
                    alert(Result);
                })

        }
        else {
            alert("Alle feltene må fylles ut");
        }
    }

    function setUsernameReg(e) {
        setUsernameVar = e.target.value;
    }

    function setPasswordReg(e) {
        setPasswordVar = e.target.value;
    }

    return (

        <div style={{margin:'50px'}}>
            <h1>Login</h1>
            <Grid container spacing={4} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField id="username_reg"
                               label="Username"
                               type="text"
                               required={true}
                               onChange={setUsernameReg} autoFocus required/>
                </Grid>
            </Grid>
            <Grid container spacing={4} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        required={true}
                        onChange={setPasswordReg}/>
                </Grid>
            </Grid>

            <Grid container spacing={10} justify="center" style={{marginTop: '10px'}}>

                <Button  onClick={() => login()}
                         type="submit"
                         value="Submit"
                         variant="outlined"
                         color="primary"
                         style={{textTransform: "none"}}>Login</Button>

            </Grid>
        </div>
    );
};

export default LoginForm;