import React from 'react'
import { Box, Button, makeStyles } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from "clsx";
import { useCart } from 'hooks';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    leftContainer: {
        padding: "40px 0 0 80px",
        [theme.breakpoints.down("md")]: {
            padding: "20px 40px",
        },
    },
    image: {
        padding: "15px 20px",
        border: "1px solid #f0f0f0",
        width: "95%",
    },
    button: {
        height: 50,
        width: "46%",
        borderRadius: 2,
    },
    addToCart: {
        background: "#ff9f00",
        color: "#fff",
        marginRight: 10,
    },
    buyNow: {
        background: "#fb641b",
        color: "#fff",
    }
}));

function LeftProductDetail(props) {
    const classes = useStyle();
    const history = useHistory();

    const { product } = props;

    // hooks
    const { addProductToCart } = useCart();

    const handleAddToCart = () => {
        addProductToCart(product.id);
        history.push("/cart");
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} alt="" className={classes.image} /><br />
            <Button onClick={handleAddToCart} className={clsx(classes.button, classes.addToCart)} variant="contained"><Cart /> Add to Cart</Button>
            <Button className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button>
        </Box>
    )
}

export default LeftProductDetail
