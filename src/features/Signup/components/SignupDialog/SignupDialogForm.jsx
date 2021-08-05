import { Button, FormGroup, makeStyles } from '@material-ui/core';
import InputField from 'customField/InputField/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { initialValues, validationSchema } from './formikConfig';

const useStyle = makeStyles({
    error: {
        fontSize: 12,
        color: "#ff6161",
        marginTop: 0,
        fontWeight: 600,
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
})

function SignupDialogForm(props) {
    const classes = useStyle();

    // get props from LoginDialog.jsx
    const { handleSubmitSignupForm } = props;

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitSignupForm}
            validateOnMount={true}
        >
            {formikProps => {
                const { isValid, isSubmitting } = formikProps;

                return (
                    <Form>
                        <FastField
                            name="firstname"
                            component={InputField}

                            label="First name"
                            placeholder="Enter first name..."
                        />

                        <FastField
                            name="lastname"
                            component={InputField}

                            label="Last name"
                            placeholder="Enter last name..."
                        />

                        <FastField
                            name="username"
                            component={InputField}

                            label="Username"
                            placeholder="Enter username..."
                        />

                        <FastField
                            name="email"
                            component={InputField}

                            label="email"
                            placeholder="Enter email..."
                        />

                        <FastField
                            name="password"
                            type="password"
                            component={InputField}

                            label="Password"
                            placeholder="Enter password..."
                        />

                        <FastField
                            name="phone"
                            component={InputField}

                            label="Phone"
                            placeholder="Enter phone..."
                        />

                        <FormGroup>
                            <Button
                                variant="contained"
                                className={classes.requestBtn}
                                type="submit"
                                disabled={!isValid || isSubmitting}
                            >
                                Sign up
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default SignupDialogForm
