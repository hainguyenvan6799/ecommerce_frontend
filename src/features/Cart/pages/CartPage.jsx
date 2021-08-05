import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import LeftCartComponent from '../components/LeftCartComponent';
import RightCartComponent from '../components/RightCartComponent';


const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        padding: "30px 135px",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            padding: "15px 0",
        }
    },
    leftComponent: {
        width: "67%",
        [theme.breakpoints.down("sm")]: {
            marginBottom: 15
        }
    },
    rightComponent: {
        width: "30%",
        background: "#fff",
        marginLeft: 15,
        [theme.breakpoints.down("sm")]: {
            marginRight: 15
        }
    },
    header: {
        padding: "15px 24px",

    }
}));

function CartPage() {
    const classes = useStyle();
    // hooks
    const cart = useSelector(state => state.cart.cartItems);

    return (
        <>
            {
                cart.length ? (
                    <Grid container className={classes.component}>
                        <Grid item lg={8} md={8} sm={12} xs={12} className={classes.leftComponent}>
                            <LeftCartComponent cart={cart} />
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12} className={classes.rightComponent}>
                            <RightCartComponent cart={cart} />
                        </Grid>

                    </Grid>
                ) : (
                    <EmptyCart />
                )
            }
        </>
    )
}

export default CartPage
