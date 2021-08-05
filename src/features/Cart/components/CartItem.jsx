import { Box, Card, Typography, makeStyles, Button } from '@material-ui/core';
import clsx from "clsx";
import { fassured } from 'constant/global';
import { useCart } from 'hooks';
import React from 'react'

// components
import QuantityButton from './QuantityButton';

const useStyle = makeStyles({
    component: {
        display: "flex",
        borderRadius: 0,
        borderTop: "1px solid #f0f0f0"
    },
    leftComponent: {
        margin: 20,
        display: "flex",
        flexDirection: "column",
    },
    rightComponent: {
        margin: 20,
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: "#878787",
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
    },
    image: {
        height: 110,
        width: 110,
    },
    removeBtn: {
        marginTop: 20,
        fontSize: 16,
    }
})

function CartItem(props) {
    const classes = useStyle();
    const { removeProductFromCart } = useCart();

    const { item } = props;

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} alt="" className={classes.image} />
                <QuantityButton item={item} />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{ marginTop: 10 }}>Seller: SuperCommet
                    <span><img src={fassured} alt="" style={{ width: 50, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{ margin: "20px 0" }}>
                    <span className={classes.price}>${item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>${item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#388E3C" }}>{item.price.discount}</span>
                </Typography>
                <Button className={classes.removeBtn} onClick={() => removeProductFromCart(item.id)}>Remove</Button>
            </Box>
        </Card >
    )
}

export default CartItem
