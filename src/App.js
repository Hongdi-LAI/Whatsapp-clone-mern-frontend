import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Pusher from 'pusher-js';
import axios from './axios';
import { useStateValue } from './StateProvider';
import SidebarChat from './SidebarChat';

function App() {

  // pull the user into the DataLayer
  const[{ user },dispatch] = useStateValue();
  const [messages, setMessage] = useState([]);
  

  //fetching data from Mongoose database
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

    return () => {
      // ensure we only have one subscriber
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  //console.log(messages);

  return (
    <div className = "app">
      {!user ? (
        <Login/>
      ):(
        <div className = "app__body">
          <Router>
            <Sidebar />
            <Switch>  
              <Route path = '/rooms/:roomId'>
                <Chat messages = {messages} />
              </Route>
              <Route path = '/'>
                <Chat messages = {messages}/>
              </Route>
            </Switch>
          </Router>
        </div>
      )}

    
    </div>
    
  );
}

export default App;
