import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const fileUrl = `${apiUrl}/file`;

export const fileApi = {
  uploadFiles: (formData) => {
    const url = `${fileUrl}/uploadFiles`;
    const config = {
      method: "post",
      url,
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    };

    return axiosClient(config);
  },
};
