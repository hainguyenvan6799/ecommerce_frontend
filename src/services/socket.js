import io from "socket.io-client";

const { serverHost } = require("api/apiUrl");

const ENDPOINT = serverHost;

export const socket = io(ENDPOINT);
