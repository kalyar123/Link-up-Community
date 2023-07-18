// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:3000");

// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages([...messages, message]);
//     });
//   }, [messages]);

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleSendMessage = () => {
//     socket.emit("message", message);
//     setMessage("");
//   };

//   return (
//     <div>
//       {messages.map((message, index) => (
//         <div key={index}>{message}</div>
//       ))}
//       <input value={message} onChange={handleMessageChange} />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// }

// export default App;
