import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Chat =() =>{
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">LET'S CHAT🌹</h1>
          <div><input placeholder="Name" className="joinInput" type="text" onChange={(event=>setName(event.target.value))} /></div>
          <div><input placeholder="Enter room no." className="joinInput mt-20" type="text" onChange={(event=>setRoom(event.target.value))} /></div>
          <Link onClick={event =>(!name || !room) ? event.preventDefault(): null} to={'/chat?name='+name+'&room='+room}>
          <button className="button mt-20" type="submit">Join</button>
          </Link>
        </div>
        </div>
    )
}

export default Chat;