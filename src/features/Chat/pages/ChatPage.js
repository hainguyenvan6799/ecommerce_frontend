import React, { useRef } from "react";

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
      addMoreButtons,
      setAddMoreButton,
      handleChange,
      handleSubmit,
      handleRemoveFile,
      user,
      files,
      message,
      messages,
      handleCloseMiniChatBox,
    },
  } = props;

  const scrollRef = useRef();

  return openChatBox ? (
    !minisizeChatBox ? (
      <div className={classes.content}>
        <TopChat
          classes={classes}
          handleCloseMiniChatBox={handleCloseMiniChatBox}
        />

        <MiddleChat
          classes={classes}
          addMoreButtons={addMoreButtons}
          user={user}
          files={files}
          handleChange={handleChange}
          handleRemoveFile={handleRemoveFile}
          messages={messages}
          scrollRef={scrollRef}
        />

        <BottomChat
          classes={classes}
          handleSubmit={handleSubmit}
          addMoreButtons={addMoreButtons}
          setAddMoreButton={setAddMoreButton}
          message={message}
          handleChange={handleChange}
          scrollRef={scrollRef}
        />
      </div>
    ) : (
      <MiniChatBox classes={classes} handleOpen={handleOpen} />
    )
  ) : null;
};

export default ChatPage;
