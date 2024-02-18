import React from 'react'

import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const BottomChat = (props) => {
    const { classes, handleSubmit, addMoreButtons, setAddMoreButton, message, handleChange, scrollRef } = props;

    const handleSendMessage = (event) => {
        handleSubmit(event);
        console.log({scrollRef})
        if (!scrollRef.current) return;
        console.log(scrollRef.current, 123)
        scrollRef.current.scrollToBottom();
    }

    return (
        <div className={classes.bottomContent}>
            <form onSubmit={handleSendMessage} className={classes.form}>
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
    )
}

export default BottomChat
