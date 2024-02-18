import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const chatUrl = `${apiUrl}/chatroom`;

export const chatApi = {
  initiateChat: (data) => {
    // const url = `${chatUrl}/initiate`;
    const url = `${chatUrl}`;

    return axiosClient.post(url, data);
  },

  getConversationByRoomId: (roomChatId) => {
    const url = `${chatUrl}/${roomChatId}`;
    return axiosClient.get(url);
  },

  getChatRoomsOfUserId: (userId) => {
    // const url = `${chatUrl}/getChatRoomsOfUserId`;
    // return axios.post(url, data);
    const url = `${chatUrl}/user/${userId}`;
    return axiosClient.get(url);
  },
};
