import axios from "axios";
import { apiUrl } from "./apiUrl";
import axiosClient from "./axiosClient";

const chatUrl = `${apiUrl}/chatroom`;

export const chatApi = {
  initiateChat: (data) => {
    const url = `${chatUrl}/initiate`;
    return axiosClient.post(url, data);
  },

  getConversationByRoomId: (roomChatId) => {
    const url = `${chatUrl}/${roomChatId}`;
    return axiosClient.get(url);
  },

  getChatRoomsOfUserId: (data) => {
    const url = `${chatUrl}/getChatRoomsOfUserId`;
    return axios.post(url, data);
  },
};
