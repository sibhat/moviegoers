import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, Grid, TextField, Typography } from "@material-ui/core";
const styles = theme => ({
    root: {
        textAlign: "center",
        position: "absolute",
        height: "auto",
        left: "50%",
        top: "500%",
        transform: "translate(-50%, -50%)",
        backgroundColor: theme.palette.background.default,
        padding: 15,
        borderRadius:10
    },
    margin: {
        margin: theme.spacing.unit,

    },
    login:{
        fontFamily: "cursive"
    }
});


const _Auth = (props) => {
    if(!props.open) return <Button color="inherit" onClick={props.toggle}>Login</Button>;
    if(props.user_authorize && props.user_authorize.success) return <Button color="inherit" onClick={props.logoutHandler}>Logout</Button>;

    return (
        <form className={props.classes.root}>

            <div className={props.classes.login}>
                <Typography variant={"h4"}>Login</Typography>
            </div>
            {/*logoutHandler*/}
            <div className={props.classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Username" name={"username"} value={props.username} onChange={props.inputChange}/>
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Password" name={"password"} value={props.password} onChange={props.inputChange}/>
                    </Grid>
                </Grid>
            </div>
            <Button color="inherit" onClick={props.login}>Login</Button>
        </form>
    );
};

export default withStyles(styles)(_Auth);