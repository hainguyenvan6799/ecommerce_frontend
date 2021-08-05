import React from 'react'
import { Box, Typography, Table, TableBody, TableRow, TableCell, makeStyles } from "@material-ui/core";
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from "clsx";

const useStyle = makeStyles({
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
})

function RightProductDetail(props) {
    const classes = useStyle();
    const { product, date, sellerURL, fassured } = props;
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                8 ratings & 1 review
                <span><img src={fassured} alt="" style={{ width: 77, marginLeft: 10 }} /></span>
            </Typography>
            <Typography>
                <span className={classes.price}>${product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                <span className={classes.greyTextColor}><strike>${product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available offers</Typography>
            <Box className={classes.smallText}>
                <Typography><Badge className={classes.badge} /> Available offers</Typography>
                <Typography><Badge className={classes.badge} /> Available offers</Typography>
                <Typography><Badge className={classes.badge} /> Available offers</Typography>
                <Typography><Badge className={classes.badge} /> Available offers</Typography>
                <Typography><Badge className={classes.badge} /> Available offers</Typography>
            </Box>

            <Table>
                <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>{date.toDateString()} | $40</TableCell>
                    </TableRow>

                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Waranty</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>No waranty</TableCell>
                    </TableRow>

                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Seller</TableCell>
                        <TableCell className={classes.smallText}>
                            <span style={{ color: "#2874f0" }}>SuperComnet</span>
                            <Typography>GST invoice availabel</Typography>
                            <Typography>14 Days Return Policy</Typography>
                            <Typography>View more sellers starting from $300</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow className={classes.smallText}>
                        <TableCell colSpan={2}>
                            <img src={sellerURL} alt="" style={{ width: 300 }} />
                        </TableCell>
                    </TableRow>

                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>{product.description}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </>
    )
}

export default RightProductDetail
