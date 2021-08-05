import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const testApi = {
  get: () => {
    const url = `${apiUrl}/test`;
    return axiosClient.get(url);
  },
  getLimit: () => {
    const url = `${apiUrl}/test`;
    const params = {
      page: 1,
      limit: 10,
    };

    return axiosClient.get(url, {
      baseURL: "", // you can choose another url
      params,
      headers: {
        author: "Nguyễn Văn Hải", // you can add custom property header you want
      },
    });
  },
};

export default testApi;
