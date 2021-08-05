import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import React from 'react'
import CartItem from './CartItem';

const useStyle = makeStyles({
    header: {
        padding: "15px 24px",
        background: "#fff",
    },
    placeOrder: {
        background: "#fb641b",
        color: "#fff",
        borderRadius: 2,
        width: 250,
        height: 50,
        display: "flex",
        marginLeft: "auto",
    },
    bottom: {
        padding: "16px 22px",
        background: "#fff",
        borderTop: "1px solid #f0f0f0",
        boxShadow: "0 -2px 10px 0 rgb(0 0 0 /10%)",
    },
})

function LeftCartComponent(props) {
    const classes = useStyle();

    const { cart } = props;

    return (
        <>
            <Box className={classes.header}>
                <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart({cart.length})</Typography>
            </Box>
            {
                cart.map(item => {
                    return <CartItem key={item.id} item={item} />
                })
            }
            <Box className={classes.bottom}>
                <Button className={classes.placeOrder} variant="contained">Place order</Button>
            </Box>
        </>
    )
}

export default LeftCartComponent
