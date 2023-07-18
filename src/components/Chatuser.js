import { Link } from 'react-router-dom';
import React, {useState} from 'react'

const Chatuser = () => {
  const [name,setName]=useState('');
  const [room,setRoom]=useState('');
  return (
    <div>
       <div className="join-container">
    <header className="join-header">
      <h1>
        <i className="fas fa-smile" /> ChatCord
      </h1>
    </header>
    <main className="join-main">
      <form action="">
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={(event)=>setName(event.target.value)}
            // name="username"
            id="username"
            placeholder="Enter username..."
            required=""
          />
        </div>
        <div className="form-control">
          <label htmlFor="room">Room</label>
          <input
            type="text"
            onChange={(event)=>setRoom(event.target.value)}
            // name="room"
            id="room"
            placeholder="Enter room..."
            required=""
          />
        </div>
        <Link onClick={event=>(!name || !room)? event.preventDefault():null} to={`/admin/chat?name=${name} && room=${room}`} >
        <button type="submit" className="btn">
          Join Chat
        </button>
        </Link>
      </form>
    </main>
  </div>
    </div>
  )
}

export default Chatuser
