import React from 'react'
import "./sidebar.css"

// material ui
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { PATH_NAME } from 'configs';

const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="sidebarWrapper">

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>

                    </ul>

                </div>

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>

                    </ul>

                </div>

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>

                    </ul>

                </div>

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Users</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>

                    </ul>

                </div>

                <div className="sidebarMenu">

                    <h3 className="sidebarTitle">Products</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            <Link to={PATH_NAME.ADMIN_PRODUCTLIST}>Manage Products</Link>
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            <Link to={PATH_NAME.ADMIN_USERLIST}>User</Link>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default SideBar
