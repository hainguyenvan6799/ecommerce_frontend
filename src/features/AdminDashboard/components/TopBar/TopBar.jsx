import React from 'react'
import "./topbar.css";

// material ui
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { PATH_NAME } from 'configs';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo"><a href={PATH_NAME.ADMINDASHBOARD}>Admin</a></span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>

                    {/* <img src="" alt="" className="topAvatar" /> */}
                </div>
            </div>
        </div>
    )
}

export default TopBar
