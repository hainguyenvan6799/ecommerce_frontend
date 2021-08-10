import React from 'react'

const MiniChatBox = (props) => {
    const { classes, handleOpen } = props;
    return (
        <div
            className={classes.minisizeChatBox}
            onClick={handleOpen}
        >
            <p>Admin</p>
        </div>
    )
}

export default MiniChatBox
