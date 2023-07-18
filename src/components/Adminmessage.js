// import React from 'react'

// const Adminmessage = () => {
//   return (
//     <div>
//       <div className="page-wrapper">
//   {/* ============================================================== */}
//   {/* Container fluid  */}
//   {/* ============================================================== */}
//   <div className="container-fluid">
//     {/* ============================================================== */}
//     {/* Bread crumb and right sidebar toggle */}
//     {/* ============================================================== */}
//     <div className="row page-titles">
//       <div className="col-md-5 align-self-center">
//         <h4 className="text-themecolor">Chats</h4>
//       </div>
//       <div className="col-md-7 align-self-center text-right">
//         <div className="d-flex justify-content-end align-items-center">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item">
//               <a href="javascript:void(0)">Home</a>
//             </li>
//             <li className="breadcrumb-item active">Chats</li>
//           </ol>
//           <button
//             type="button"
//             className="btn btn-info d-none d-lg-block m-l-15"
//           >
//             <i className="fa fa-plus-circle" /> Create New
//           </button>
//         </div>
//       </div>
//     </div>
//     {/* ============================================================== */}
//     {/* End Bread crumb and right sidebar toggle */}
//     {/* ============================================================== */}
//     {/* ============================================================== */}
//     {/* Start Page Content */}
//     {/* ============================================================== */}
//     <div className="row">
//       <div className="col-12">
//         <div className="card m-b-0">
//           {/* .chat-row */}
//           <div className="chat-main-box">
//             {/* .chat-left-panel */}
//             <div className="chat-left-aside">
//               <div className="open-panel">
//                 <i className="ti-angle-right" />
//               </div>
//               <div className="chat-left-inner">
//                 <div className="form-material">
//                   <input
//                     className="form-control p-2"
//                     type="text"
//                     placeholder="Search Contact"
//                   />
//                 </div>
//                 <ul className="chatonline style-none ">
//                   <li>
//                     <a href="javascript:void(0)">
//                       <img
//                         src="../assets/images/users/1.jpg"
//                         alt="user-img"
//                         className="img-circle"
//                       />{" "}
//                       <span>
//                         Varun Dhavan{" "}
//                         <small className="text-success">online</small>
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" className="active">
//                       <img
//                         src="../assets/images/users/2.jpg"
//                         alt="user-img"
//                         className="img-circle"
//                       />{" "}
//                       <span>
//                         Genelia Deshmukh{" "}
//                         <small className="text-warning">Away</small>
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)">
//                       <img
//                         src="../assets/images/users/3.jpg"
//                         alt="user-img"
//                         className="img-circle"
//                       />{" "}
//                       <span>
//                         Ritesh Deshmukh{" "}
//                         <small className="text-danger">Busy</small>
//                       </span>
//                     </a>
//                   </li>
                 
//                 </ul>
//               </div>
//             </div>
//             {/* .chat-left-panel */}
//             {/* .chat-right-panel */}
//             <div className="chat-right-aside">
//               <div className="chat-main-header">
//                 <div className="p-3 b-b">
//                   <h4 className="box-title">Chat Message</h4>
//                 </div>
//               </div>
//               <div className="chat-rbox">
//                 <ul className="chat-list p-3">
//                   {/*chat Row */}
//                   <li>
//                     <div className="chat-img">
//                       <img src="../assets/images/users/1.jpg" alt="user" />
//                     </div>
//                     <div className="chat-content">
//                       <h5>James Anderson</h5>
//                       <div className="box bg-light-info">
//                         Lorem Ipsum is simply dummy text of the printing &amp;
//                         type setting industry.
//                       </div>
//                       <div className="chat-time">10:56 am</div>
//                     </div>
//                   </li>
//                   {/*chat Row */}
//                   <li>
//                     <div className="chat-img">
//                       <img src="../assets/images/users/2.jpg" alt="user" />
//                     </div>
//                     <div className="chat-content">
//                       <h5>Bianca Doe</h5>
//                       <div className="box bg-light-info">
//                         It’s Great opportunity to work.
//                       </div>
//                       <div className="chat-time">10:57 am</div>
//                     </div>
//                   </li>
//                   {/*chat Row */}
//                   <li className="reverse">
//                     <div className="chat-content">
//                       <h5>Steave Doe</h5>
//                       <div className="box bg-light-inverse">
//                         It’s Great opportunity to work.
//                       </div>
//                       <div className="chat-time">10:57 am</div>
//                     </div>
//                     <div className="chat-img">
//                       <img src="../assets/images/users/5.jpg" alt="user" />
//                     </div>
//                   </li>
//                   {/*chat Row */}
//                   <li className="reverse">
//                     <div className="chat-content">
//                       <h5>Steave Doe</h5>
//                       <div className="box bg-light-inverse">
//                         It’s Great opportunity to work.
//                       </div>
//                       <div className="chat-time">10:57 am</div>
//                     </div>
//                     <div className="chat-img">
//                       <img src="../assets/images/users/5.jpg" alt="user" />
//                     </div>
//                   </li>
//                   {/*chat Row */}
//                   <li>
//                     <div className="chat-img">
//                       <img src="../assets/images/users/3.jpg" alt="user" />
//                     </div>
//                     <div className="chat-content">
//                       <h5>Angelina Rhodes</h5>
//                       <div className="box bg-light-info">
//                         Well we have good budget for the project
//                       </div>
//                       <div className="chat-time">11:00 am</div>
//                     </div>
//                   </li>
//                   {/*chat Row */}
//                 </ul>
//               </div>
//               <div className="card-body border-top">
//                 <div className="row">
//                   <div className="col-8">
//                     <textarea
//                       placeholder="Type your message here"
//                       className="form-control border-0"
//                       defaultValue={""}
//                     />
//                   </div>
//                   <div className="col-4 text-right">
//                     <button
//                       type="button"
//                       className="btn btn-info btn-circle btn-lg"
//                     >
//                       <i className="fas fa-paper-plane" />{" "}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* .chat-right-panel */}
//           </div>
//           {/* /.chat-row */}
//         </div>
//       </div>
//     </div>
//     {/* ============================================================== */}
//     {/* End PAge Content */}
//     {/* ============================================================== */}
//     {/* ============================================================== */}
//     {/* Right sidebar */}
//     {/* ============================================================== */}
//     {/* .right-sidebar */}
//     <div className="right-sidebar">
//       <div className="slimscrollright">
//         <div className="rpanel-title">
//           {" "}
//           Service Panel{" "}
//           <span>
//             <i className="ti-close right-side-toggle" />
//           </span>{" "}
//         </div>
//         <div className="r-panel-body">
//           <ul id="themecolors" className="m-t-20">
//             <li>
//               <b>With Light sidebar</b>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-default"
//                 className="default-theme"
//               >
//                 1
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-green"
//                 className="green-theme"
//               >
//                 2
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-red"
//                 className="red-theme"
//               >
//                 3
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-blue"
//                 className="blue-theme working"
//               >
//                 4
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-purple"
//                 className="purple-theme"
//               >
//                 5
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-megna"
//                 className="megna-theme"
//               >
//                 6
//               </a>
//             </li>
//             <li className="d-block m-t-30">
//               <b>With Dark sidebar</b>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-default-dark"
//                 className="default-dark-theme "
//               >
//                 7
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-green-dark"
//                 className="green-dark-theme"
//               >
//                 8
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-red-dark"
//                 className="red-dark-theme"
//               >
//                 9
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-blue-dark"
//                 className="blue-dark-theme"
//               >
//                 10
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-purple-dark"
//                 className="purple-dark-theme"
//               >
//                 11
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 data-skin="skin-megna-dark"
//                 className="megna-dark-theme "
//               >
//                 12
//               </a>
//             </li>
//           </ul>
//           <ul className="m-t-20 chatonline">
//             <li>
//               <b>Chat option</b>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/1.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Varun Dhavan <small className="text-success">online</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/2.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Genelia Deshmukh <small className="text-warning">Away</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/3.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Ritesh Deshmukh <small className="text-danger">Busy</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/4.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Arijit Sinh <small className="text-muted">Offline</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/5.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Govinda Star <small className="text-success">online</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/6.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   John Abraham<small className="text-success">online</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/7.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Hritik Roshan<small className="text-success">online</small>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="javascript:void(0)">
//                 <img
//                   src="../assets/images/users/8.jpg"
//                   alt="user-img"
//                   className="img-circle"
//                 />{" "}
//                 <span>
//                   Pwandeep rajan <small className="text-success">online</small>
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     {/* ============================================================== */}
//     {/* End Right sidebar */}
//     {/* ============================================================== */}
//   </div>
//   {/* ============================================================== */}
//   {/* End Container fluid  */}
//   {/* ============================================================== */}
// </div>

//     </div>
//   )
// }

// export default Adminmessage
