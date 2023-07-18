import axios from 'axios'
import React,{useState} from 'react'
import UserFooter from './UserFooter';
import User_header from './User_header';
import './Card.css'

const Userindex = () => {

  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  
  const handleCardClickmfund = () => {
    window.location.href = '/user/mosque';
  };
  const handleCardClickbrequest =()=>{
    window.location.href = '/user/blood-request';
  }
  const handleCardClickbdonate=()=>{
    window.location.href = '/user/blood-donate';
  }
  const handleCardClicknmrequest =()=>{
    window.location.href = '/user/mosque-request';
  }
  const handleCardClickchat =()=>{
    window.location.href = '/admin/chat';
  }
  const handleCardClicklocation =()=>{
    window.location.href = '/member/map';
  }
  const handleCardClicknfund=()=>{
    window.location.href = '/user/needypeople';
  }
  const handleCardClickmrequest =()=>{
    window.location.href = '/user/mosque-maintinance';
  }
 
  
  return (
    <div>
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
        
        <h1 >Dashboard</h1>
       </div>
      
       
       
 
       <div className="row">
 
 
 <div className="col-lg-3 col-md-6 zoomable-image">
<div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
<div className="zoomable-image" onClick={handleCardClickmfund}>
  <img className="card-img-top" src="../assets/images/users/fund.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
</div>
<div className="card-body zoomable-image">
  <h5 className="card-title" style={{ textAlign: 'center', color: 'darkcyan' }}>Mosque Fund</h5>
</div>
</div>
</div>


<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClickbrequest}>
     <img className="card-img-top" src="../assets/images/users/blood.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>Blood Request</h5>
   </div>
 </div>
</div>


<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClicknmrequest}>
     <img className="card-img-top" src="../assets/images/users/msjid.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>New Mosque Request</h5>
   </div>
 </div>
</div>


<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClicklocation}>
     <img className="card-img-top" src="../assets/images/users/adnan1.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>Location</h5>
   </div>
 </div>
</div>

{/* Add more columns for other cards */}
</div>

<br />

<div className="row" style={{ marginBottom: "10px" }}>


<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClicknfund}>
     <img className="card-img-top" src="../assets/images/users/needy.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>Needy Fund</h5>
   </div>
 </div>
</div>



<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClickchat}>
     <img className="card-img-top" src="../assets/images/users/adnan2.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>Chat</h5>
   </div>
 </div>
</div>



<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClickmrequest}>
     <img className="card-img-top" src="../assets/images/users/msjid1.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>Maintinance Request</h5>
   </div>
 </div>
</div>


<div className="col-lg-3 col-md-6 zoomable-image">
 <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', height: '200px',width:"200px" }}>
   <div className="zoomable-image" onClick={handleCardClickbdonate}>
     <img className="card-img-top" src="../assets/images/users/donate.jpg" alt="Card image cap" style={{ objectFit: 'contain', height: '100%' }} />
   </div>
   <div className="card-body zoomable-image">
     <h5 className="card-title" style={{textAlign:"center",color:"darkcyan"}}>Blood donate</h5>
   </div>
 </div>
</div>




{/* Add more columns for other cards */}
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
    </div>
  )
}

export default Userindex
