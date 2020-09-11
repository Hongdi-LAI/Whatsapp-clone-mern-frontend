import { Avatar, IconButton } from '@material-ui/core'
import React , {useState, useEffect} from 'react'
import './Chat.css'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {

    const [seed, setSeed] = useState('');
    
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);


    return (
        <div className ="chat">
            <div className = "chat__header">
                <Avatar 
                    src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}
                    alt = ""
                />
                <div className = "chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
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
                <p className = {`chat__message ${true && 'chat__receiver'}`}>
                    <span className = "chat__name">
                        Hongdi
                    </span>
                    This is a message
                    <span className = "chat__timestamp">
                        {new Date().toUTCString()}
                    </span>  
                </p>
            </div>

            <div className = "chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                        type = "text" 
                        placeholder = "Type in a message..."    
                    />
                    <button>Send a message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
