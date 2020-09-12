import React, { useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import {Avatar, IconButton} from '@material-ui/core';
import db from './firebase';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection('rooms')
        
    }, [])

    return (
        <div className = "sidebar">
            
            <div className = "sidebar__header">
                <Avatar 
                    src = ""
                    alt = ""
                />
                <div className = "sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon /> 
                    </IconButton>
                </div>
            </div>
            <div className = "sidebar__search">
                <div className = "sidebar__searchContainer">
                    <SearchOutlined />
                    <input 
                        placeholder = "Search or start new chat"
                        type = "text" 
                    /> 
                </div>
            </div>
            <div className = "sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            
            </div>
        </div>
    )
}

export default Sidebar
