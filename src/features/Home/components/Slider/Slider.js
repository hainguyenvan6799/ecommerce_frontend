import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import Countdown from "react-countdown";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 12,
    background: "#FFFFFF",
  },
  deal: {
    display: "flex",
    padding: "15px 20px",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    height: 150,
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "35px 15px",
  },
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slider(props) {
  const classes = useStyle();

  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const { productsData, timer, title } = props;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <Box className={classes.timer}>
            <img src={timerURL} style={{ width: 24 }} alt="Timer" />
            <Countdown date={Date.now() + 10000} renderer={renderer} />
          </Box>
        )}
        <Button variant="contained" color="primary" className={classes.button}>
          View All
        </Button>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={false}
        draggable={true}
        swipeable={false}
        showDots={false}
        ssr={false} // means to render carousel on server-side.
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {productsData.map((product) => {
          const { id, url, title, discount, tagline } = product;

          const { shortTitle } = title;
          return (
            <Link to={`/product/${id}`} key={id}>
              <Box style={{ textAlign: "center" }} className={classes.wrapper}>
                <img src={url} className={classes.image} alt="Products" />
                <Typography
                  className={classes.text}
                  style={{ fontWeight: 600 }}
                >
                  {shortTitle}
                </Typography>
                <Typography className={classes.text} style={{ color: "green" }}>
                  {discount}
                </Typography>
                <Typography
                  className={classes.text}
                  style={{ color: "#212121", opacity: ".6" }}
                >
                  {tagline}
                </Typography>
                <Typography className={classes.text}></Typography>
                <Typography className={classes.text}></Typography>
              </Box>
            </Link>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default Slider;
