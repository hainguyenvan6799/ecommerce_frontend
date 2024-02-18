import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const chatMessageUrl = `${apiUrl}/chatmessage`;

export const chatMessageApi = {
  sendMessageToRoom: (roomChatId, data) => {
    // const url = `${chatMessageUrl}/postMessage/${roomChatId}`;
    const url = `${chatMessageUrl}/${roomChatId}`;
    // data ==> form-data
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getLatestMessage: (chatRoomId) => {
    const url = `${chatMessageUrl}/getLatestMessage/${chatRoomId}`;
    return axiosClient.get(url);
  },
};
