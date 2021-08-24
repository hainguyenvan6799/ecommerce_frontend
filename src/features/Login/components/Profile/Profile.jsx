// material ui
import { makeStyles, Menu, MenuItem, Typography } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { PATH_NAME } from "configs";

// declare hooks
import { useProfile } from 'hooks/useProfile';
import React from 'react';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    component: {
        marginTop: 40,
    },
    logout: {
        marginLeft: 20,
        fontSize: 14,
    },
    adminDashboardButton: {
        textDecoration: "none",
        color: "black",
    }
})

function Profile(props) {
    const classes = useStyle();

    // props from HeaderButton.js
    const { account } = props;

    // hooks
    const { open, handleOpen, handleClose, handleLogOut } = useProfile();

    return (
        <>
            <Typography onClick={handleOpen} style={{ marginTop: 5 }}>{account.username}</Typography>
            <Menu
                className={classes.component}
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                {account.role === "ADMIN" && (
                    <MenuItem><SupervisorAccountIcon fontSize="small" color="primary" />
                        <Link to={PATH_NAME.ADMINDASHBOARD} className={classes.adminDashboardButton}>Dashboard</Link>
                    </MenuItem>
                )}

                <MenuItem><PowerSettingsNewIcon fontSize="small" color="primary" />
                    <Typography onClick={handleLogOut} className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile
