import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const fileUrl = `${apiUrl}/files`;

export const fileApi = {
  uploadFiles: (formData) => {
    // const url = `${fileUrl}/uploadFiles`;
    const url = `${fileUrl}`;

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
