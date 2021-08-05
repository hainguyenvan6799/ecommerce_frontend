import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    image: {
        width: "100%",
        height: "280px",
        [theme.breakpoints.down("sm")]: {
            objectFit: "cover",
            height: 180,
        }
    },
    carousel: {
        marginTop: 20,
    }
}))

function Banner(props) {
    const classes = useStyle();

    // banner data pass from parent HomePage.js
    const { bannerData } = props;
    return (
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: "#FFFFFF",
                    color: "#494949",
                    borderRadius: 0,
                    margin: 0,
                }
            }}
            className={classes.carousel}
        >
            {
                bannerData.map((data, index) => {
                    return <img className={classes.image} src={data} key={index} alt="Banner" />
                })
            }
        </Carousel>
    )
}

export default Banner
