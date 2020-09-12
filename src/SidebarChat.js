import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core';
import db from './firebase';
import {Link} from 'react-router-dom';

function SidebarChat({ addNewChat, id, name }) {

    const [seed, setSeed] = useState('');
    
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter a room name for the chat");
        
        if(roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    // if not addNewChat, show normal stuff
    // otherwise, show 'Add New Chat'
    return !addNewChat ? (
        <Link to = {`/rooms/${id}`}>
            <div className = "sidebarChat">
                <Avatar 
                    src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}
                    alt = ""
                />
                <div className = "sidebarChat__info">
                    <h2>{name}</h2>
                    <p>last message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div 
            onClick = {createChat}
            className = "sidebarChat"
        >
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
