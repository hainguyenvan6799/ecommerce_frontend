import React from 'react'
import { Box, makeStyles } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import MidSection from '../MidSection/MidSection';

const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        background: "#F2F2F2",
    },
    leftWrapper: {
        width: "83%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        }
    },
    rightWrapper: {
        background: "#FFFFFF",
        padding: 5,
        margin: "12px 0 0 10px",
        width: "17%",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }
}))

function Home(props) {
    const classes = useStyle();

    // data pass from parent HomePage.js
    const { navData, bannerData, productsData, adURL, midSectionData, coronaURL } = props;

    return (
        <>
            <NavBar
                navData={navData}
            />
            <Box className={classes.component}>
                <Banner
                    bannerData={bannerData}
                />

                <Box style={{ display: "flex" }}>
                    <Box className={classes.leftWrapper}>
                        <Slider
                            timer={true}
                            title="Deal of the day"
                            productsData={productsData}
                        />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{ width: 235 }} alt="Advertisement" />
                    </Box>
                </Box>

                <MidSection midSectionData={midSectionData} coronaURL={coronaURL} />
                <Slider
                    timer={false}
                    title="Discount for you"
                    productsData={productsData}
                />

                <Slider
                    timer={false}
                    title="Suggested Items"
                    productsData={productsData}
                />

                <Slider
                    timer={false}
                    title="Top Selection"
                    productsData={productsData}
                />

                <Slider
                    timer={false}
                    title="Recommended Items"
                    productsData={productsData}
                />

                <Slider
                    timer={false}
                    title="Bestseller"
                    productsData={productsData}
                />

            </Box>


        </>
    )
}

export default Home
