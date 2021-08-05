import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

// import components
import LoginDialog from "features/Login/components/LoginDialog/LoginDialog";
import Profile from "features/Login/components/Profile/Profile";

// import hooks
import useLoginDialog from "hooks/useLoginDialog";
import { checkEmptyObject } from "utils/checkEmptyObject";
import { useAuth } from "hooks";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center", // cân bằng theo chiều dọc,
      textDecoration: "none",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        mraginTop: 10,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  login: {
    background: "#FFFFFF",
    color: "#2874f0",
    textTransform: "none",
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      background: "#2874f0",
      color: "#FFFFFF",
    },
  },
}));

const HeaderButtons = () => {
  const {
    open,
    account,
    handleClickLoginDialog,
    handleCloseLoginDialog,
    handleSubmitLoginForm,
    handleSubmitSignupForm,
    toggleAccount,
  } = useLoginDialog();

  const { user } = useAuth();

  const { cartItems } = useSelector((state) => state.cart);

  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      {/* <Link> */}
      {!checkEmptyObject(user) ? (
        <Profile account={user} />
      ) : (
        <Button
          variant="contained"
          className={classes.login}
          onClick={handleClickLoginDialog}
        >
          Login
        </Button>
      )}

      {/* </Link> */}
      <Link to="/payment">
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge
          badgeContent={cartItems.length && cartItems.length}
          color="secondary"
        >
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog
        open={open}
        close={handleCloseLoginDialog}
        account={account}
        toggleAccount={toggleAccount}
        handleSubmitLoginForm={handleSubmitLoginForm}
        handleSubmitSignupForm={handleSubmitSignupForm}
      />
    </Box>
  );
};

export default HeaderButtons;
