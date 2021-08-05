import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { emptycarturl } from 'constant/global';
import { useCart } from 'hooks';
import React from 'react'

const useStyle = makeStyles({
    component: {
        margin: "80px 140px",
        width: "80%",
        background: "#fff",
        height: "65vh"
    },
    container: {
        textAlign: "center",
        paddingTop: 70,
        "& > *": {
            marginTop: 10,
        }
    },
    image: {
        width: "15%",
    },
    button: {
        marginTop: 20,
        padding: "12px 70px",
        borderRadius: 2,
        fontSize: 14,
        background: "#2874f0",
        color: "#fff",
    }
})

function EmptyCart() {
    const classes = useStyle();
    const { shopNow } = useCart();

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={emptycarturl} alt="" className={classes.image} />
                <Typography>Your cart is empty</Typography>
                <Typography>Add items to it now</Typography>
                <Button className={classes.button} variant="contained" onClick={shopNow}>Shop Now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart
