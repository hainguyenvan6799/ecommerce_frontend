import React from 'react'
import DisplayFilesMiddleContentChat from './DisplayFilesMiddleContentChat';

// icons
import DisplayMiddleContentChat from './DisplayMiddleContentChat';

const MiddleChat = (props) => {
    const { classes, addMoreButtons, user, files, handleChange, handleRemoveFile, messages, scrollRef } = props;
    return (
        <div className={classes.middleContent}>

            <DisplayMiddleContentChat
                user={user}
                addMoreButtons={addMoreButtons}
                classes={classes}
                messages={messages}
                scrollRef={scrollRef}
            />

            <DisplayFilesMiddleContentChat
                classes={classes}
                files={files}
                handleChange={handleChange}
                handleRemoveFile={handleRemoveFile}
                addMoreButtons={addMoreButtons}
            />
        </div>
    )
}

export default MiddleChat
