import React from 'react'

// icons
import CloseIcon from "@material-ui/icons/Close";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

import personalImage from "img/thuthu.png";

const TopChat = (props) => {
    const { classes, setMiniSizeChatBox } = props;
    return (
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
    )
}

export default TopChat
