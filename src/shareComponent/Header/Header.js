import {
  Toolbar,
  AppBar,
  makeStyles,
  withStyles,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";

// components
import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButton";
import { Link } from "react-router-dom";
import { useHeader } from "hooks";

const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },

  logo: {
    width: 75,
  },

  subURL: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },

  container: {
    display: "flex",
  },

  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#fff",
  },

  subHeading: {
    fontSize: 10,
    fontStyle: "Italic",
  },
  menuBtn: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerBtn: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
  },
}));

// use this to alternate Toolbar as default
const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();
  const { open, handleOpen, handleClose } = useHeader();

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const list = () => (
    <Box className={classes.list} onClick={handleClose}>
      <List>
        <ListItem>
          <HeaderButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={classes.menuBtn}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>

        <Drawer open={open} onClick={handleClose}>
          {list()}
        </Drawer>

        <Link to="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} alt="Logo" />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} className={classes.subURL} alt="" />
          </Box>
        </Link>

        <SearchBar />
        <span className={classes.headerBtn}>
          <HeaderButtons />
        </span>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
