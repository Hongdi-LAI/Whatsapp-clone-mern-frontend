import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages,setMessage] = useState([]);

  //fetching data from database
  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessage(response.data)
    });
  }, []);
  // linking database with client using Pusher
  useEffect(() => {
    const pusher = new Pusher('73179937325a3bd38d1a', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      //alert(JSON.stringify(data));
      setMessage([...messages, newMessage]);
    });
  }, [messages]);

  console.log(messages);

  return (
    <div className = "app">
      <div className = "app__body">
        <Sidebar />
        <Chat />
      </div>

    
    </div>
  );
}

export default App;
