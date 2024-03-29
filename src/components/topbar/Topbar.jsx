import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <Link to="/" className='link' >
                <div className="topLeft">
                    <span className="logo">NextaAdmin</span>
                </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <img src="./assets/image1.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

