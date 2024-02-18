import { makeStyles } from "@material-ui/core";
import { chatApi } from "api/chatApi";
import { chatMessageApi } from "api/chatMessage";
// configs
import { PATH_NAME, SOCKET_EVENTS } from "configs";
import { ADMiN_INFO } from "configs/adminInfo";
import { useEffect, useState } from "react";
// redux
import { useSelector } from "react-redux";
// hooks
import { useHistory } from "react-router-dom";
// services
import { socket } from "services/socket";
// utils
import { customId, customSubString } from "utils/subString";

const useStyle = makeStyles({
  content: {
    position: "fixed",
    bottom: 15,
    right: 15,
    width: "400px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "5px",
    // zIndex: "100",
    // backgroundColor: "white",
  },
  topContent: {
    width: "100%",
    height: "15%",
    borderBottom: "1px solid black",
    display: "flex",
    background: "white",
    color: "black",
  },
  middleContent: {
    width: "100%",
    height: "75%",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
    background: "white",
    color: "black",
  },
  bottomContent: {
    width: "100%",
    height: "10%",
    // border: "1px solid black",
    background: "white",
    color: "black",
  },
  form: {
    width: "100%",
    margin: "5px 0 5px 10px",
  },
  inputMes: {
    width: "60%",
    marginRight: "5px",
  },
  leftTopContent: {
    width: "50%",
    margin: "5px 100px 5px 2px",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "600",

    "&:hover": {
      background: "grey",
      cursor: "pointer",
      borderRadius: "5px",
    },
  },
  personalImage: {
    width: "40px",
    height: "40px",
    border: "1px solid black",
    borderRadius: "50%",
    marginRight: "10px",
  },
  rightTopContent: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: "15px",
    cursor: "pointer",
  },
  messageLeftContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "10px",
    fontSize: "17px",
    marginBottom: "10px",

    "& > *": {
      background: "#6666ff",
      padding: "10px",
      borderRadius: "20px",
      color: "#ffffff",
      textDecoration: "none",
    },
  },
  messageRightContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: "10px",
    fontSize: "17px",
    "& > *": {
      background: "#cccccc",
      padding: "10px",
      borderRadius: "20px",
      color: "#000000",
    },
  },
  ROOT_CSS: {
    height: "70%",
  },
  ROOT_CSS_2: {
    height: "100%",
  },
  minisizeChatBox: {
    position: "fixed",
    width: "70px",
    height: "70px",
    bottom: 20,
    right: 20,
    border: "1px solid black",
    borderRadius: "50%",
    background: "#b3ffcc",
    textAlign: "center",
    cursor: "pointer",
    paddingTop: "20px",

    "& > *": {
      color: "black",
    },
  },
  moreButtons: {
    width: "100%",
    height: "40%",
    overflow: "auto",
    borderTop: "1px solid black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  moreButtonsHidden: {
    display: "none",
    height: "0%",
  },
  addButton: {
    marginRight: "5px",
  },
  closeButton: {
    marginRight: "5px",
  },
  displayFile: {
    minWidth: "170px",
    height: "70px",
    border: "1px solid black",
    fontWeight: 600,
    fontSize: "13px",
    marginRight: "25px",
    display: "flex",
    padding: "5px",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "5px",
  },
});

const useChat = () => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [openChatBox, setOpenChatBox] = useState(false);
  const [minisizeChatBox, setMiniSizeChatBox] = useState(false);
  const [addMoreButtons, setAddMoreButton] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const classes = useStyle();
  const history = useHistory();
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [messagesAdmin, setMessagesAdmin] = useState([]);

  useEffect(() => {
    if (user) {
      socket.emit(SOCKET_EVENTS.IDENTIFY, user._id);
    }

    return () => {
      socket.off();
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.on(SOCKET_EVENTS.CHAT, function (args) {
        // const { from, to, message, files } = args;
        // if (to === user.username || from === user.username) {
        //   const sendFiles = JSON.parse(files);

        //   setResult((prevMessage) => [
        //     ...prevMessage,
        //     { from, to, message, files: sendFiles },
        //   ]);
        // }
        const {
          message: {
            chatRoomInfo,
            message,
            postedByUser,
            chatRoomId,
            createdAt,
            readByRecipients,
            type,
            updatedAt,
            _id,
          },
          files,
        } = args;
        chatRoomInfo.map((item) => {
          if (item._id === user._id) {
            setMessages((prev) => [
              ...prev,
              {
                _id,
                updatedAt,
                type,
                readByRecipients,
                postedByUser,
                message,
                chatRoomId,
                createdAt,
                files,
              },
            ]);
            return true;
          }
          return false;
        });
      });
    }
  }, [user]);

  const getChatRoomsOfUserId = async (user) => {
    // const data = {
    //   userId: user._id,
    // };

    const userId = user._id;

    // const response = await chatApi.getChatRoomsOfUserId(data);
    const response = await chatApi.getChatRoomsOfUserId(userId);

    if (response.success) {
      if (user.username === ADMiN_INFO.USERNAME) {
        setMessagesAdmin((prev) => [...prev, ...response.chatRooms]);
      }

      return response.chatRooms;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const subscribeChatRoom = async () => {
      const chatRooms = await getChatRoomsOfUserId(user);
      if (chatRooms) {
        chatRooms.map((chatRoom) => {
          socket.emit(SOCKET_EVENTS.SUBSCRIBE, chatRoom._id);
          if (user.username !== ADMiN_INFO.USERNAME) {
            setChatRoom(chatRoom._id);
          }

          return chatRoom;
        });
      }
    };

    if (user) {
      subscribeChatRoom();
    }
  }, [user]);

  const handleOpenInAdmin = async (chatRoomId) => {
    if (!user) {
      history.push(PATH_NAME.LOGIN);
    } else {
      const result = await chatApi.getConversationByRoomId(chatRoomId);
      if (result.success) {
        const oldMessages = result.conversation;
        setMessages((prevMessages) => [...prevMessages, ...oldMessages]);
        setChatRoom(chatRoomId);

        setOpenChatBox(true);
        setMiniSizeChatBox(false);
      }
    }
  };

  const handleOpen = async () => {
    if (!user) {
      history.push(PATH_NAME.LOGIN);
    } else {
      if (chatRoom) {
        const result = await chatApi.getConversationByRoomId(chatRoom);
        if (result.success) {
          const oldMessages = result.conversation;
          setMessages((prevMessages) => [...prevMessages, ...oldMessages]);

          setOpenChatBox(true);
          setMiniSizeChatBox(false);
        }
      } else {
        alert("wait to load room id");
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "files") {
      const files = e.target.files;
      const filesArr = [];

      for (let i = 0; i < files.length; i++) {
        filesArr.push({
          id: customId(i),
          name: customSubString(files[i].name, 13),
          file: files[i],
        });
      }

      setFiles((prevFiles) => [...prevFiles, ...filesArr]);
    } else {
      setMessage(e.target.value);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formData.append("myfiles", files[i].file);
  //   }
  //   const result = await fileApi.uploadFiles(formData);
  //   const resultInString = JSON.stringify(result.arr);

  //   socket.emit(SOCKET_EVENTS.CHAT, {
  //     from: user.username,
  //     to: "admin",
  //     message,
  //     files: resultInString,
  //   });
  //   setMessage("");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("myfiles", files[i].file);
      }
    }

    formData.append("messageText", message);
    // await chatMessageApi.sendMessageToRoom(chatRoom, {
    //   messageText: message,
    // });
    await chatMessageApi.sendMessageToRoom(chatRoom, formData);
    setMessage("");
  };

  const handleRemoveFile = (id) => {
    // const newFiles = files.filter((file) => file.id !== id);
    // setFiles(newFiles);
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const handleCloseMiniChatBox = () => {
    setMiniSizeChatBox(true);
    setMessages([]);
  };

  return {
    openChatBox,
    minisizeChatBox,
    setOpenChatBox,
    classesChat: classes,
    setMiniSizeChatBox,
    addMoreButtons,
    setAddMoreButton,
    handleChange,
    handleSubmit,
    handleRemoveFile,
    files,
    user,
    message,
    handleOpen,
    messages,
    messagesAdmin,
    handleCloseMiniChatBox,
    handleOpenInAdmin,
  };
};

export default useChat;
