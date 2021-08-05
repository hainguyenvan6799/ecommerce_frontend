import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core";
import personalImage from "img/thuthu.png";

// icons
import DescriptionIcon from "@material-ui/icons/Description";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import AttachmentIcon from "@material-ui/icons/Attachment";
import CloseIcon from "@material-ui/icons/Close";
import ScrollToBottom from "react-scroll-to-bottom";

import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useSelector } from "react-redux";

import { serverHost } from "api/apiUrl";
import { fileApi } from "api/fileApi";

let socket;

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
  },
  topContent: {
    width: "100%",
    height: "15%",
    borderBottom: "1px solid black",
    display: "flex",
  },
  middleContent: {
    width: "100%",
    height: "75%",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
  bottomContent: {
    width: "100%",
    height: "10%",
    // border: "1px solid black",
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
    "& > p": {
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

function Chat() {
  const ENDPOINT = serverHost;
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState([]);
  const [openChatBox, setOpenChatBox] = useState(true);
  const [minisizeChatBox, setMiniSizeChatBox] = useState(false);
  const [addMoreButtons, setAddMoreButton] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const classes = useStyle();

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.on("chat", function (args) {
      const { from, to, message, files } = args;
      if (to === user.username || from === user.username) {
        const sendFiles = JSON.parse(files);

        setResult((prevMessage) => [
          ...prevMessage,
          { from, to, message, files: sendFiles },
        ]);
      }
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, user.username]);

  const handleChange = (e) => {
    if (e.target.name === "files") {
      const files = e.target.files;
      // const names = [];
      const filesArr = [];
      // setFiles((prevFiles) => [...prevFiles, files]);
      for (let i = 0; i < files.length; i++) {
        if (files[i].name.length > 13) {
          filesArr.push({
            id: `${Date.now()}_${i}`,
            name: `${files[i].name.substring(0, 12)}...`,
            file: files[i],
          });
        } else {
          filesArr.push({ name: files[i].name, file: files[i] });
        }
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

    socket.emit("chat", {
      from: user.username,
      to: "admin",
      message,
      files: resultInString,
    });
    setMessage("");
  };

  const handleRemoveFile = (id) => {
    const newFiles = files.filter((file) => file.id !== id);
    setFiles(newFiles);
  };

  return openChatBox ? (
    !minisizeChatBox ? (
      <div className={classes.content}>
        <div className={classes.topContent + " container"}>
          <div className={classes.leftTopContent + " container"}>
            <img className={classes.personalImage} src={personalImage} alt="" />
            <span>Admin</span>
          </div>
          <div className={classes.rightTopContent}>
            <RemoveCircleOutlineIcon
              className={classes.button}
              fontSize="large"
              onClick={() => setMiniSizeChatBox(true)}
            />
            <CloseIcon className={classes.button} fontSize="large" />
          </div>
        </div>
        <div className={classes.middleContent}>
          <ScrollToBottom
            className={addMoreButtons ? classes.ROOT_CSS : classes.ROOT_CSS_2}
          >
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            <p>ABC</p>
            {result.length > 0 &&
              result.map((item, id) => {
                return item.from === user.username ? (
                  <div key={id}>
                    <div className={classes.messageLeftContent + " container"}>
                      {item.files?.map((file, index) => (
                        <a
                          key={index}
                          href={file.Location}
                          title="Download now"
                        >
                          {file.key}
                        </a>
                      ))}
                    </div>

                    {item.message && (
                      <div
                        className={classes.messageLeftContent + " container"}
                      >
                        <p>{item.message}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    key={id}
                    className={classes.messageRightContent + " container"}
                  >
                    <p>{item.message}</p>
                  </div>
                );
              })}
          </ScrollToBottom>
          <div
            className={
              addMoreButtons ? classes.moreButtons : classes.moreButtonsHidden
            }
          >
            {files.length === 0 ? (
              <>
                <label htmlFor="files">
                  <AttachmentIcon />
                </label>
                <input
                  type="file"
                  id="files"
                  name="files"
                  onChange={handleChange}
                  style={{ display: "none" }}
                  multiple
                />
              </>
            ) : (
              <>
                {files.map((file, index) => (
                  <div key={index} className={classes.displayFile}>
                    <DescriptionIcon />
                    <span>{file.name}</span>
                    <CancelIcon
                      style={{
                        borderLeft: "3px solid black",
                        marginRight: "2px",
                      }}
                      onClick={() => handleRemoveFile(file.id)}
                    />
                  </div>
                ))}
                <>
                  <label htmlFor="files">
                    <AttachmentIcon />
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    onChange={handleChange}
                    style={{ display: "none" }}
                    multiple
                  />
                </>
              </>
            )}
          </div>
        </div>
        <div className={classes.bottomContent}>
          <form onSubmit={handleSubmit} className={classes.form}>
            {addMoreButtons ? (
              <CancelIcon
                className={classes.closeButton}
                onClick={() => setAddMoreButton(false)}
              />
            ) : (
              <AddCircleIcon
                className={classes.addButton}
                onClick={() => setAddMoreButton(true)}
              />
            )}
            <input
              type="text"
              name="message"
              value={message}
              onChange={handleChange}
              className={classes.inputMes}
            />

            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    ) : (
      <div
        className={classes.minisizeChatBox}
        onClick={() => {
          setOpenChatBox(true);
          setMiniSizeChatBox(false);
        }}
      >
        <p>Admin</p>
      </div>
    )
  ) : null;
}

export default Chat;
