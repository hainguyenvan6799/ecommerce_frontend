import React from 'react'

// icons
import DescriptionIcon from "@material-ui/icons/Description";
import CancelIcon from "@material-ui/icons/Cancel";
import AttachmentIcon from "@material-ui/icons/Attachment";

const DisplayFilesMiddleContentChat = (props) => {
    const { classes, addMoreButtons, files, handleChange, handleRemoveFile } = props;

    return (
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
    )
}

export default DisplayFilesMiddleContentChat
