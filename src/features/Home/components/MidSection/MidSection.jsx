import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: "flex",
        marginTop: 20,
        justifyContent: "space-between",
    },
    image: {
        width: "100%",
    },
    inform: {
        width: "100%",
        marginTop: 20,
        [theme.breakpoints.down("md")]: {
            objectFit: "cover",
            height: 120
        }
    },
}));

function MidSection(props) {
    const { midSectionData, coronaURL } = props;

    const classes = useStyle();
    return (
        <>
            <Grid container className={classes.wrapper}>
                {
                    midSectionData.map((url, index) => (
                        <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
                            <img src={url} className={classes.image} alt="Mid section" />
                        </Grid>
                    ))
                }
            </Grid>
            <img className={classes.inform} src={coronaURL} alt="Corona info" />
        </>
    )
}

export default MidSection
