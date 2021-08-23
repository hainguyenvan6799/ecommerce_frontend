import React from 'react'

import ScrollToBottom from "react-scroll-to-bottom";

const DisplayMiddleContentChat = (props) => {

    const { user, addMoreButtons, classes, messages } = props;

    return (
        <ScrollToBottom
            className={addMoreButtons ? classes.ROOT_CSS : classes.ROOT_CSS_2}
        >
            {messages.length > 0 &&
                messages.map((item) => {
                    return item.postedByUser._id === user._id ? (
                        <div key={item._id}>
                            <div className={classes.messageLeftContent + " container"}>
                                {item.files && JSON.parse(item.files)?.map((file) => (
                                    <a
                                        key={file.Key}
                                        href={file.Location}
                                        title="Download now"
                                    >
                                        {file.key}
                                    </a>
                                ))}
                            </div>

                            {item.message.messageText && (
                                <div
                                    className={classes.messageLeftContent + " container"}
                                >
                                    <p>{item.message.messageText}</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            key={item._id}
                            className={classes.messageRightContent + " container"}
                        >
                            <p>{item.message.messageText}</p>
                        </div>
                    );
                })}
        </ScrollToBottom>
    )
}

export default DisplayMiddleContentChat
