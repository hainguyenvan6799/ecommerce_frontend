// import "./payment.css";
import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import {
    CardElement
} from "@stripe/react-stripe-js";
import clsx from "clsx";

import { useCart, usePayment } from "hooks";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
    form: {
        width: "30vw",
        alignSelf: "center",
        boxShadow: "0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)",
        borderRadius: "7px",
        padding: "40px",
        marginTop: 50,
        marginLeft: 500,
    },
    resultMessage: {
        lineHeight: "22px",
        fontSize: "16px",
        "& > *": {
            color: "rgb(89, 111, 214)",
            fontWeight: 600,
            textDecoration: "none",
        }
    },
    hidden: {
        display: "none",
    },
    cardError: {
        color: "rgb(105, 115, 134)",
        fontSize: "16px",
        lineHeight: "20px",
        marginTop: "12px",
        textAlign: "center",
    },
    cardElement: {
        borderRadius: "4px 4px 0 0",
        padding: "12px",
        border: "1px solid rgba(50, 50, 93, 0.1)",
        maxHeight: "44px",
        width: "100%",
        background: "white",
        boxSizing: "border-box",
    },
    submitBtn: {
        background: "#5469d4",
        fontFamily: "Arial, sans-serif",
        color: "#ffffff",
        borderRadius: "0 0 4px 4px",
        border: 0,
        padding: "12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        cursor: "pointer",
        display: "block",
        transition: "all 0.2s ease",
        boxShadow: "0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)",
        width: "100%",
        "&:hover": {
            filter: "contrast(115%)",
        },
        "&:disabled": {
            opacity: 0.5,
            cursor: "default",
        }
    },
    spinner: {
        color: "#ffffff",
        fontSize: "22px",
        textIndent: "-99999px",
        margin: "0px auto",
        position: "relative",
        width: "20px",
        height: "20px",
        boxShadow: "inset 0 0 0 2px",
        "-webkit-transform": "translateZ(0)",
        "-ms-transform": "translateZ(0)",
        transform: "translateZ(0)",
    },
    // style for boxes:
    header: {
        padding: "15px 25px",
        borderBottom: "1px solid #f0f0f0",
    },
    container: {
        padding: "15px 25px",
        "& > *": {
            marginTop: 20,
            fontSize: 14,
        }
    },
    greyTextColor: {
        color: "#878787",
    },
    price: {
        float: "right"
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: "1px dashed #e0e0e0",
        borderBottom: "1px dashed #e0e0e0",
        padding: "20px 0",
    }
})

export default function CheckoutForm() {
    const classes = useStyle();
    const { succeeded, error, processing, disabled, handleChange, handleSubmit } = usePayment();
    const { cartItems: cart } = useSelector(state => state.cart);
    const { price, discount } = useCart();

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>

            <Box className={classes.container}>
                <Typography>Price({cart.length}) <span className={classes.price}>${price}</span></Typography>
                <Typography>Discount <span className={classes.price}>-${discount}</span></Typography>
                <Typography>Delivery charge <span className={classes.price}>40</span></Typography>
                <Typography className={classes.totalAmount}>Total amount <span className={classes.price}>${price - discount}</span></Typography>
                <Typography style={{ color: "green" }}>You will save ${discount - 40} on this order</Typography>
            </Box>

            <form id="payment-form" onSubmit={handleSubmit} className={classes.form}>
                <CardElement className={classes.cardElement} options={cardStyle} onChange={handleChange} />
                <button
                    disabled={processing || disabled || succeeded}
                    id="submit"
                    className={classes.submitBtn}
                >
                    <span id="button-text">
                        {processing ? (
                            <div className={classes.spinner} id="spinner"></div>
                        ) : (
                            "Pay now"
                        )}
                    </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className={classes.cardError} role="alert">
                        {error}
                    </div>
                )}
                {/* Show a success message upon completion */}
                <p className={succeeded ? classes.resultMessage : clsx(classes.resultMessage, classes.hidden)}>
                    Payment succeeded, see the result in your
                    <a
                        href={`https://dashboard.stripe.com/test/payments`}
                    >
                        {" "}
                        Stripe dashboard.
                    </a> Refresh the page to pay again.
                </p>
            </form>
        </Box>

    );
}
