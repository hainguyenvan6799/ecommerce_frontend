import React from "react";

// icons
import MiniChatBox from "../components/MiniChatBox";
import BottomChat from "../components/BottomChat";
import MiddleChat from "../components/MiddleChat";
import TopChat from "../components/TopChat";

const ChatPage = (props) => {
  const {
    props: {
      openChatBox,
      handleOpen,
      minisizeChatBox,
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
        <TopChat classes={classes} setMiniSizeChatBox={setMiniSizeChatBox} />

        <MiddleChat
          classes={classes}
          addMoreButtons={addMoreButtons}
          result={result}
          user={user}
          files={files}
          handleChange={handleChange}
          handleRemoveFile={handleRemoveFile}
        />

        <BottomChat
          classes={classes}
          handleSubmit={handleSubmit}
          addMoreButtons={addMoreButtons}
          setAddMoreButton={setAddMoreButton}
          message={message}
          handleChange={handleChange}
        />
      </div>
    ) : (
      <MiniChatBox classes={classes} handleOpen={handleOpen} />
    )
  ) : null;
};

export default ChatPage;
