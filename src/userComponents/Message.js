import axios from 'axios'


import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import UserFooter from './UserFooter';
import User_header from './User_header';
const socket = io('http://localhost:5000');



const Message = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');
  // const [message, setMessage] = useState('');
  const [message, setMessage] = useState('');
const [reply, setReply] = useState('');




  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const searchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:9000/users?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = () => {

    axios.post('/messages', { message })
    .then(response => {
      setReply(response.data);
    })
    .catch(error => {
      console.log(error);
    });


    socket.emit('messages', { to: selectedUser._id, text: newMessage });
    setMessages((prevMessages) => [...prevMessages, { from: 'me', text: newMessage }]);
    setNewMessage('');
  };


  
  return (
    <div>
      <>
      <User_header/>
  {/* Page wrapper  */}
  {/* ============================================================== */}
  <div className="page-wrapper">
    {/* ============================================================== */}
    {/* Container fluid  */}
    {/* ============================================================== */}
    <div className="container-fluid">
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Chats</h4>
        </div>
        <div className="col-md-7 align-self-center text-right">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="breadcrumb-item active">Chats</li>
            </ol>
            <button
              type="button"
              className="btn btn-info d-none d-lg-block m-l-15"
            >
              <i className="fa fa-plus-circle" /> Create New
            </button>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Start Page Content */}
      {/* ============================================================== */}
      <div className="row">
        <div className="col-12">
          <div className="card m-b-0">
            {/* .chat-row */}
            <div className="chat-main-box">
              {/* .chat-left-panel */}
              <div className="chat-left-aside">
                <div className="open-panel">
                  <i className="ti-angle-right" />
                </div>
                <div className="chat-left-inner">
                  <div className="form-material">
                    <input
                      
                      className="form-control p-2"
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search Contact"
                    />
                    <button onClick={searchUsers}>Search</button>
                  </div>
                  <ul className="chatonline style-none ">
                  {searchResults.map((user) => (
                     <li key={user._id} onClick={() => setSelectedUser(user)}>
                     <a href="javascript:void(0)">
                       <img
                         src="../assets/images/users/1.jpg"
                         alt="user-img"
                         className="img-circle"
                       />{" "}
                       <span>
                         {/* Varun Dhavan{" "} */}
                         {user.name}
                         <small className="text-success">online</small>
                       </span>
                     </a>
                   </li>
                  ))}
                   
                 
                  </ul>
                </div>
              </div>
              <div className="chat-right-aside">
                <div className="chat-main-header">
                  <div className="p-3 b-b">
                    <h4 className="box-title">Chat Message</h4>
                  </div>
                </div>
                <div className="chat-rbox">
                
                  <ul className="chat-list p-3">
                  {messages.map((message, index) => (
                      <li key={index}>
                      <div className="chat-img">
                        <img src="../assets/images/users/1.jpg" alt="user" />
                      </div>
                      <div className="chat-content">
                        <h5>Chatting with {selectedUser.name}</h5>
                        <div className="box bg-light-info">
                        {message.from === 'me' ? 'Me' : selectedUser.name}: {message.text}
                        </div>
                        <div className="chat-time">10:56 am</div>
                      </div>
                    </li>
                  ))}
                    {/*chat Row */}
                  
                   
                  </ul>
                </div>
                <div className="card-body border-top">
                  <div className="row">
                    <div className="col-8">
                      <textarea
                        type="text" value={newMessage} 
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message here"
                        className="form-control border-0"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-4 text-right">
                      <button onClick={sendMessage}
                        type="button"
                        className="btn btn-info btn-circle btn-lg"
                      >
                        <i className="fas fa-paper-plane" />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* .chat-right-panel */}
            </div>
            {/* /.chat-row */}
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End PAge Content */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Right sidebar */}
      {/* ============================================================== */}
      {/* .right-sidebar */}
      <div className="right-sidebar">
        <div className="slimscrollright">
          <div className="rpanel-title">
            {" "}
            Service Panel{" "}
            <span>
              <i className="ti-close right-side-toggle" />
            </span>{" "}
          </div>
          <div className="r-panel-body">
            <ul id="themecolors" className="m-t-20">
              <li>
                <b>With Light sidebar</b>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-default"
                  className="default-theme"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-green"
                  className="green-theme"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-red"
                  className="red-theme"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-blue"
                  className="blue-theme working"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-purple"
                  className="purple-theme"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-megna"
                  className="megna-theme"
                >
                  6
                </a>
              </li>
              <li className="d-block m-t-30">
                <b>With Dark sidebar</b>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-default-dark"
                  className="default-dark-theme "
                >
                  7
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-green-dark"
                  className="green-dark-theme"
                >
                  8
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-red-dark"
                  className="red-dark-theme"
                >
                  9
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-blue-dark"
                  className="blue-dark-theme"
                >
                  10
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-purple-dark"
                  className="purple-dark-theme"
                >
                  11
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-skin="skin-megna-dark"
                  className="megna-dark-theme "
                >
                  12
                </a>
              </li>
            </ul>
            <ul className="m-t-20 chatonline">
              <li>
                <b>Chat option</b>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/1.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Varun Dhavan <small className="text-success">online</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/2.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Genelia Deshmukh{" "}
                    <small className="text-warning">Away</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/3.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Ritesh Deshmukh <small className="text-danger">Busy</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/4.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Arijit Sinh <small className="text-muted">Offline</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/5.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Govinda Star <small className="text-success">online</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/6.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    John Abraham<small className="text-success">online</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/7.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Hritik Roshan<small className="text-success">online</small>
                  </span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/users/8.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span>
                    Pwandeep rajan{" "}
                    <small className="text-success">online</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ============================================================== */}
      {/* End Right sidebar */}
      {/* ============================================================== */}
    </div>
    {/* ============================================================== */}
    {/* End Container fluid  */}
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* End Page wrapper  */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  <UserFooter/>

  <script src="../assets/node_modules/jquery/jquery-3.2.1.min.js"></script>
    {/* <!-- Bootstrap tether Core JavaScript --> */}
    <script src="../assets/node_modules/popper/popper.min.js"></script>
    <script src="../assets/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    {/* <!-- slimscrollbar scrollbar JavaScript --> */}
    <script src="dist/js/perfect-scrollbar.jquery.min.js"></script>
    {/* <!--Wave Effects --> */}
    <script src="dist/js/waves.js"></script>
    {/* <!--Menu sidebar --> */}
    <script src="dist/js/sidebarmenu.js"></script>
    {/* <!--stickey kit --> */}
    <script src="../assets/node_modules/sticky-kit-master/dist/sticky-kit.min.js"></script>
    <script src="../assets/node_modules/sparkline/jquery.sparkline.min.js"></script>
    {/* <!--Custom JavaScript --> */}
    <script src="dist/js/custom.min.js"></script>
    <script src="dist/js/pages/chat.js"></script>
</>

    </div>
  )
}

export default Message
