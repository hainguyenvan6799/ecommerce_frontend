import React from 'react'
import DisplayFilesMiddleContentChat from './DisplayFilesMiddleContentChat';

// icons
import DisplayMiddleContentChat from './DisplayMiddleContentChat';

const MiddleChat = (props) => {
    const { classes, addMoreButtons, result, user, files, handleChange, handleRemoveFile } = props;
    return (
        <div className={classes.middleContent}>

            <DisplayMiddleContentChat
                result={result}
                user={user}
                addMoreButtons={addMoreButtons}
                classes={classes}
            />

            <DisplayFilesMiddleContentChat
                classes={classes}
                files={files}
                handleChange={handleChange}
                handleRemoveFile={handleRemoveFile}
            />
        </div>
    )
}

export default MiddleChat
