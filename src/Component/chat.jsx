import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";


const useStyles = makeStyles(theme => ({
    chat: {
        margin: '50px',
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
    },
    chatWindow: {
        height: '200px',
        width: '100%',
        padding: '20px',
    },
    chatBox: {
        width: '85%',
    },
    button: {
        width: '15%',
    },
}));

export default function Chat() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.chat}>
                <Typography variant="h5" component="h5">
                    Chat
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.chatWindow}>
                        {
                            [{from: 'users', msg: 'hello'}].map((chat, i) => (
                                <div className={classes.chatBox} key={i}>
                                    <Typography variant="caption" >
                                        {chat.from}
                                    </Typography>

                                    <Typography variant='p'>
                                        <Chip label= {chat.msg} variant="outlined" className={classes.chip} />
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className={classes.flex}>

                </div>
            </Paper>

        </div>

    )

}