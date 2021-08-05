import React from 'react'
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useCart } from 'hooks';

const useStyle = makeStyles({
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

function TotalViewForPayment(props) {
    const classes = useStyle();
    const { price, discount } = useCart();

    const { cart } = props;

    return (
        <>
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
        </>

    )
}

export default TotalViewForPayment
