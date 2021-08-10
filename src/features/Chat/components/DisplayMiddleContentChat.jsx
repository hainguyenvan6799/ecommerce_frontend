import React from 'react'

import ScrollToBottom from "react-scroll-to-bottom";

const DisplayMiddleContentChat = (props) => {

    const { result, user, addMoreButtons, classes } = props;

    return (
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
    )
}

export default DisplayMiddleContentChat
