import React from 'react'
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    component: {
        display: "flex",
        margin: "55px 130px 0 130px",
        justifyContent: "space-between",
        overflowX: "overlay",
        [theme.breakpoints.down("md")]: {
            margin: 0,
        }
    },
    container: {
        textAlign: "center",
        padding: "12px 8px",
    },
    image: {
        width: 64,
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
    }
}))
function NavBar(props) {
    const classes = useStyle();

    // navData from features/Home/pages/HomePage/HomePage
    const { navData } = props;

    return (
        <Box className={classes.component}>
            {
                navData.map((data, index) => {
                    const { url, text } = data;
                    return (
                        <Box className={classes.container} key={index}>
                            <img src={url} className={classes.image} alt="Navbar" />
                            <Typography className={classes.text}>{text}</Typography>
                        </Box>
                    )
                })
            }

        </Box>
    )
}

NavBar.propTypes = {

}

export default NavBar

