import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const authUrl = `${apiUrl}/auth`;

export const authApi = {
  login: (username, password) => {
    const url = `${authUrl}/login`;
    const data = { username, password };
    return axiosClient.post(url, data);
  },
  logout: () => {},
  currentUser: () => {
    const url = `${authUrl}/current-user`;
    return axiosClient.get(url);
  },
  signup: (data) => {
    const url = `${authUrl}/signup`;
    return axiosClient.post(url, data);
  },
};
