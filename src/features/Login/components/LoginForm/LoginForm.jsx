import { Box, Button, FormGroup, makeStyles, Typography } from '@material-ui/core';
import InputField from 'customField/InputField/InputField';
import { FastField, Form, Formik } from 'formik';
import { useAuth, useLoginDialog } from 'hooks';
import React from 'react';
import { initialValues, validationSchema } from './formikConfig';

const useStyle = makeStyles({
    login: {
        margin: "150px auto",
        width: 600,
        border: "1px solid black",
        padding: "15px 25px"
    },
    error: {
        fontSize: 12,
        color: "#ff6161",
        marginTop: 0,
        fontWeight: 600,
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
});

function LoginForm(props) {
    const classes = useStyle();

    // get props from LoginDialog.jsx
    const { handleSubmitLoginForm } = useLoginDialog();
    const { authError } = useAuth();
    return (
        <Box className={classes.login}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmitLoginForm}
                validateOnMount={true}
            >
                {formikProps => {
                    const { isValid, isSubmitting } = formikProps;

                    return (
                        <Form>
                            <FastField
                                name="username"
                                component={InputField}

                                label="Username"
                                placeholder="Enter username..."
                            />

                            <FastField
                                name="password"
                                type="password"
                                component={InputField}

                                label="Password"
                                placeholder="Enter password..."
                            />
                            {authError && <Typography className={classes.error}>{authError}</Typography>}
                            <Typography
                                className={classes.text}
                            >
                                By continuing, you agree Terms of Use and Privacy Policies
                            </Typography>
                            <FormGroup>
                                <Button
                                    variant="contained"
                                    className={classes.loginBtn}
                                    type="submit"
                                    disabled={!isValid || isSubmitting}
                                >
                                    Login
                                </Button>
                            </FormGroup>
                            <Typography className={classes.text} style={{ textAlign: "center" }}>
                                Or
                            </Typography>
                            <FormGroup>
                                <Button variant="contained" className={classes.requestBtn}>
                                    Request OTP
                                </Button>
                            </FormGroup>
                        </Form>
                    )
                }}
            </Formik>
        </Box>
    )
}

export default LoginForm
