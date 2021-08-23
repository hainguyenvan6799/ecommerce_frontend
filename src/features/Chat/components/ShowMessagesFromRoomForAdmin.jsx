import { Box, Button, Typography } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { removeDupplicateArray } from 'utils/dupplicateArray';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    dropdown: {
        position: 'absolute',
        minWidth: "370px",
        top: 45,
        right: 0,
        left: -100,
        zIndex: 1,
        // padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        color: "black",
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px",
        borderRadius: "10px",
    },
    button: {
        color: "white"
    },
    box: {
        width: "100%",
        minHeight: "70px",
        marginBottom: "10px",
        borderRadius: "10px",
        padding: "5px",

        "&:hover": {
            background: "#F0F2F5",
        }
    }
}));

export default function ShowMessagesFromRoomForAdmin({ messagesAdmin, handleOpenInAdmin }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const messagesAfterRemoveDupplicate = removeDupplicateArray(messagesAdmin);

    console.log(messagesAfterRemoveDupplicate)

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener
            onClickAway={handleClickAway}
        >
            <div className={classes.root}>
                <Button onClick={handleClick} className={classes.button}>
                    MESSAGES
                </Button>
                {open ? (
                    <div className={classes.dropdown}>
                        {messagesAfterRemoveDupplicate && messagesAfterRemoveDupplicate.map(message => {
                            return (<Box className={classes.box} key={message._id} onClick={() => handleOpenInAdmin(message._id)}>
                                <Typography>{message.chatInitiatorName}</Typography>
                                <Typography>{message.latestMessage.message.messageText}</Typography>
                            </Box>);
                        })}
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    );
}