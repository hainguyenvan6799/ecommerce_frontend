import { unwrapResult } from "@reduxjs/toolkit";
import {
  getMe,
  loginFail,
  loginSuccess,
  logOut,
  setError,
  signupFail,
} from "app/authSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authApi } from "api/authenticationApi";

export const useAuth = () => {
  const token = localStorage.getItem("accessToken");

  const user = useSelector((state) => state.auth.user); // thông tin user được lấy từ redux
  const authError = useSelector((state) => state.auth.error);

  const [authUser, setAuthUser] = useState(); //local state
  const dispatch = useDispatch();

  const login = async (username, password) => {
    try {
      const response = await authApi.login(username, password);
      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);

        dispatch(loginSuccess());
        dispatch(getMe());

        return true;
      } else {
        dispatch(loginFail({ error: response.message }));
        return false;
      }
    } catch (error) {
      dispatch(loginFail({ error: error.message }));
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logOut());
  };

  const signup = async (data) => {
    try {
      const response = await authApi.signup(data);
      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);

        dispatch(loginSuccess());
        dispatch(getMe());
      } else {
        dispatch(signupFail({ error: response.message }));
      }
    } catch (error) {
      dispatch(signupFail({ error: error.message }));
    }
  };

  const getAccessToken = () => localStorage.getItem("accessToken");

  const isAuthenticated = () => !!getAccessToken();

  useEffect(() => {
    // gọi api lấy về user hiện tại
    const fetchAuth = async () => {
      try {
        // if (token) {
        if (getAccessToken()) {
          const action = getMe();
          const result = await dispatch(action);

          const user = unwrapResult(result);

          if (user) {
            setAuthUser(user);
          } else {
            setAuthUser(null);
          }
        } else {
          setAuthUser(null);
        }
      } catch (error) {
        setAuthUser(null);
        dispatch(setError({ error: error.message }));
      }
    };
    fetchAuth();

    return () => {
      setAuthUser(null);
    };
  }, [dispatch, token]);

  return { authUser, login, signup, logout, authError, user, isAuthenticated };
};
