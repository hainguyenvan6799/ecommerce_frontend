import { Box, Dialog, DialogContent, makeStyles, Typography } from '@material-ui/core';
import SignupDialogForm from 'features/Signup/components/SignupDialog/SignupDialogForm';
import React from 'react';
import LoginDialogForm from './LoginDialogForm';

const backgroundImage = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";

const useStyle = makeStyles({
    component: {
        height: "70vh",
        width: "unset",
    },
    image: {
        backgroundImage: `url(${backgroundImage})`,
        height: "70vh",
        backgroundRepeat: "no-repeat",
        background: "#2874f0",
        width: "40%",
        backgroundPosition: "center 85%",
        padding: "45px",
        '& > *': {
            color: "#FFFFFF",
            fontWeight: 600,

        }
    },
    login: {
        padding: "25px 35px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        '& > *': {
            marginTop: 20,
        }
    },
    text: {
        color: "#878787",
        fontSize: 12,
        marginTop: 20,
    },
    loginBtn: {
        textTransform: "none",
        background: "#FB641B",
        color: "#FFFFFF",
        height: 48,
        borderRadius: 2,
        // alignSelf: "center",
        marginTop: 20,
    },
    requestBtn: {
        textTransform: "none",
        background: "#FFFFFF",
        color: "#2874f0",
        height: 48,
        borderRadius: 2,
        boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
        // alignSelf: "center",
        marginTop: 20,
    },
    createText: {
        textAlign: "center",
        marginTop: "auto",
        fontSize: 14,
        color: "#2874f0",
        fontWeight: 600,
        cursor: "pointer"
    },
    error: {
        fontSize: 12,
        color: "#ff6161",
        marginTop: 0,
        fontWeight: 600,
    }
})

function LoginDialog(props) {

    // props from HeaderButton.js
    const { open, close, account, toggleAccount, handleSubmitLoginForm, handleSubmitSignupForm } = props;

    // declare variable for style
    const classes = useStyle();

    return (
        <Dialog open={open} onClose={close}>
            <DialogContent className={classes.component}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image}>
                        <Typography>
                            {account.heading}
                        </Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {account.subHeading}
                        </Typography>
                    </Box>
                    {
                        account.view === "login" ? (
                            <Box className={classes.login}>
                                <LoginDialogForm handleSubmitLoginForm={handleSubmitLoginForm} />

                                <Typography
                                    className={classes.createText}
                                    onClick={() => toggleAccount("signup")}
                                >
                                    {account.transformText}
                                </Typography>
                            </Box>
                        ) : (
                            <Box className={classes.login}>
                                <SignupDialogForm handleSubmitSignupForm={handleSubmitSignupForm} />

                                <Typography
                                    className={classes.createText}
                                    onClick={() => toggleAccount("login")}
                                >
                                    {account.transformText}
                                </Typography>
                            </Box>
                        )
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog
