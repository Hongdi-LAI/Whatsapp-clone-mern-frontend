import { Avatar, IconButton } from '@material-ui/core'
import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios'
import db from './firebase'

function Chat({ messages }) {

    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if(roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (setRoomName
                (snapshot.data().name)));
        }
    }, [roomId]) 

    const sendMessage = async (e) => {
        e.preventDefault();
        // if no input and hit 'Enter' then do nothing
        if(input === ''){
            return;
        } else {
            await axios.post('/messages/new',{
                message: input,
                name: 'Demo App',
                timestamp: 'Just Now',
                received: true,
            });
        }
        //clear input folder
        setInput('');
    };

    return (
        <div className ="chat">
            <div className = "chat__header">
                <Avatar 
                    src = {'https://image.similarpng.com/very-thumbnail/2020/05/Modern-WhatsApp-icon-PNG.png'}
                    alt = ""
                />
                <div className = "chat__headerInfo">
                    <h3>{roomName}</h3>
                </div>
                <div className = "chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className = "chat__body">
                {messages?.map((message) => (
                    <p className = 
                    {`chat__message ${message.received && 'chat__receiver'}`}>
                        <span className = "chat__name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className = "chat__timestamp">
                            {message.timestamp}
                        </span>  
                    </p>
                ))}
            </div>

            <div className = "chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        value = {input}
                        onChange = {e => setInput(e.target.value)}
                        type = "text" 
                        placeholder = "Type in a message..."    
                    />
                    <button 
                        type = "submit"
                        onClick = {sendMessage} 
                    >
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
