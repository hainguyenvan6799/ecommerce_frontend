import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";

// api
import { fileApi } from "api/fileApi";

// services
import { socket } from "services/socket";

// configs
import { PATH_NAME, SOCKET_EVENTS } from "configs";

// utils
import { customId, customSubString } from "utils/subString";

// hooks
import { useHistory } from "react-router-dom";

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
  const [result, setResult] = useState([]);
  const [openChatBox, setOpenChatBox] = useState(false);
  const [minisizeChatBox, setMiniSizeChatBox] = useState(false);
  const [addMoreButtons, setAddMoreButton] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      socket.on(SOCKET_EVENTS.CHAT, function (args) {
        const { from, to, message, files } = args;
        if (to === user.username || from === user.username) {
          const sendFiles = JSON.parse(files);

          setResult((prevMessage) => [
            ...prevMessage,
            { from, to, message, files: sendFiles },
          ]);
        }
      });
    }

    return () => {
      //   socket.emit("disconnect");
      socket.off();
    };
  }, [user]);

  const handleOpen = () => {
    if (!user) {
      history.push(PATH_NAME.LOGIN);
    } else {
      setOpenChatBox(true);
      setMiniSizeChatBox(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "files") {
      const files = e.target.files;
      const filesArr = [];

      for (let i = 0; i < files.length; i++) {
        // if (files[i].name.length > 13) {
        //   filesArr.push({
        //     id: `${Date.now()}_${i}`,
        //     name: `${files[i].name.substring(0, 12)}...`,
        //     file: files[i],
        //   });
        // } else {
        //   filesArr.push({ name: files[i].name, file: files[i] });
        // }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("myfiles", files[i].file);
    }
    const result = await fileApi.uploadFiles(formData);
    const resultInString = JSON.stringify(result.arr);

    socket.emit(SOCKET_EVENTS.CHAT, {
      from: user.username,
      to: "admin",
      message,
      files: resultInString,
    });
    setMessage("");
  };

  const handleRemoveFile = (id) => {
    // const newFiles = files.filter((file) => file.id !== id);
    // setFiles(newFiles);
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  return {
    openChatBox,
    minisizeChatBox,
    setOpenChatBox,
    classesChat: classes,
    setMiniSizeChatBox,
    addMoreButtons,
    setAddMoreButton,
    result,
    handleChange,
    handleSubmit,
    handleRemoveFile,
    files,
    user,
    message,
    handleOpen,
  };
};

export default useChat;
