import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Avatar,Typography,TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import 'fontsource-roboto';
const useStyles = makeStyles((theme) => ({
    large: {
      width: '80px',
      height: '80px',
      textAlign: 'center'
    },
    header:{
        paddingTop: "3rem",
        paddingBottom: "1rem"
    },
    form:{
        paddingTop: "2rem",
    },
    textField:{
        paddingBottom: "1rem",
        width:"100%"
    },
    btn:{
        width:"100%"
    },
    text:{
        paddingTop: "1rem",
        fontSize: "16px"
    }
}));

export const Login = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={7}>
                <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
                    <Typography variant="h4" color="primary" className={classes.header}>
                            Task planner
                    </Typography>
                    <Avatar alt="Example" 
                            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                            className={classes.large} />
                                       
                    <Grid item xs={5} className={classes.form}>
                        <form>
                            <TextField
                                className={classes.textField}
                                label="Username"
                                color="primary"
                                variant="outlined"
                            />
                            <TextField
                                className={classes.textField}
                                label="Password"
                                type="password"
                                color="primary"
                                variant="outlined"
                            />
                            <Button
                                fulldWidth
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                Login
                            </Button>
                            <Typography variant="body1" color="primary" align="center" className={classes.text}>
                                Create Account
                            </Typography>
                        </form>
                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
