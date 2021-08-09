import React from "react";

import personalImage from "img/thuthu.png";

// icons
import DescriptionIcon from "@material-ui/icons/Description";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import AttachmentIcon from "@material-ui/icons/Attachment";
import CloseIcon from "@material-ui/icons/Close";
import ScrollToBottom from "react-scroll-to-bottom";

import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const ChatPage = (props) => {
  console.log(props.props.user);
  const {
    props: {
      openChatBox,
      minisizeChatBox,
      setOpenChatBox,
      classes,
      setMiniSizeChatBox,
      addMoreButtons,
      setAddMoreButton,
      result,
      handleChange,
      handleSubmit,
      handleRemoveFile,
      user,
      files,
      message,
    },
  } = props;
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
};

export default ChatPage;
