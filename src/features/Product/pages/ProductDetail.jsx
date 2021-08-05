import { Box, makeStyles, Grid } from "@material-ui/core";
import { fassured, sellerURL } from "constant/global";
import { useProduct } from 'hooks';
import React from 'react';
// components:
import LeftProductDetail from "../components/LeftProductDetail";
import RightProductDetail from "../components/RightProductDetail";


const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: "#F2F2F2",
    },
    container: {
        // margin: "0 80px",
        background: "#fff",
        display: "flex",
        [theme.breakpoints.down("md")]: {
            margin: 0,
        }
    },
    rightContainer: {
        marginTop: 50,
        "& > *": {
            marginTop: 10,
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: "baseline",
        "& > *": {
            fontSize: 14,
            marginTop: 10,
        }
    },
    greyTextColor: {
        color: "#878787",
    },
    price: {
        fontSize: 28,
    },
    badge: {
        fontSize: 14,
        color: "#00CC00",
    },
}));

function ProductDetailPage() {
    const classes = useStyle();

    // hooks
    const { detailProduct } = useProduct();

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <Box className={classes.component} style={{ marginTop: 50 }}>
            {detailProduct && (
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <LeftProductDetail product={detailProduct} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <RightProductDetail
                            product={detailProduct}
                            date={date}
                            sellerURL={sellerURL}
                            fassured={fassured}
                        />
                    </Grid>

                </Grid>
            )}

        </Box>
    )
}

export default ProductDetailPage
