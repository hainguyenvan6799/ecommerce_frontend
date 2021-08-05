import { setError } from "app/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "./useAuth";

export const useLoginDialog = () => {
  const dispatch = useDispatch();

  // declare hooks:
  const { login, signup } = useAuth();
  const [open, setOpen] = useState(false);

  // initial values
  const initialValues = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, WishList and Recommendations.",
      transformText: "You are new ? Create an account.",
    },
    signup: {
      view: "signup",
      heading: "Look like you are new here",
      subHeading: "Sign up with your mobile number to get started.",
      transformText: "You have an account ? Login now.",
    },
  };

  // @desc login mode or signup mode when you click login in homepage
  const [account, setAccount] = useState(initialValues.login);

  // @desc open login dialog when you click Login in homepage
  const handleClickLoginDialog = () => {
    setOpen(true);
  };

  // @desc close login dialog when you click outside
  const handleCloseLoginDialog = () => {
    setAccount(initialValues.login);
    setOpen(false);
    dispatch(setError({ error: "" }));
  };

  // @desc change signup mode
  const toggleAccount = (account) => {
    const values = { ...initialValues };
    setAccount(values[account]);
  };

  // @desc handle submit signin form
  const handleSubmitLoginForm = async (values) => {
    const { username, password } = values;
    const result = await login(username, password);
    if (result) {
      handleCloseLoginDialog();
    }
  };

  // @desc handle submit signup form
  const handleSubmitSignupForm = (values) => {
    signup(values);
    handleCloseLoginDialog();
  };

  return {
    open,
    account,
    handleClickLoginDialog,
    handleCloseLoginDialog,
    handleSubmitLoginForm,
    handleSubmitSignupForm,
    toggleAccount,
  }; // sử dụng chủ yếu ở HeaderButton.js
};

export default useLoginDialog;
