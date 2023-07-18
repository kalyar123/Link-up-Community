import React,{useState,useEffect} from 'react'

const Member_header = () => {

  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);


 
  return (
    <div>
        <>
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  <div className="preloader">
    <div className="loader">
      <div className="loader__figure" />
      <p className="loader__label">Member</p>
    </div>
  </div>
  {/* ============================================================== */}
  {/* Main wrapper - style you can find in pages.scss */}
  {/* ============================================================== */}
  <div id="main-wrapper">
    {/* ============================================================== */}
    {/* Topbar header - style you can find in pages.scss */}
    {/* ============================================================== */}
    <header className="topbar" style={{backgroundColor:'darkcyan'}}>
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        {/* ============================================================== */}
        {/* Logo */}
        {/* ============================================================== */}
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
           
            <b>
             
            {/* <img
                src="../assets/images/logoicon.png"
                alt="homepage"
                className="dark-logo"
              /> */}
              {/* Light Logo icon */}
              <img
                src="../assets/images/newlogo.jpg"
                alt="homepage"
                className="light-logo"
              />
             
            </b>
            {/*End Logo icon */}
            {/* Logo text */}
            <span>
              Linkup-Community
              
              {/* <img
                src="../assets/images/logo-text.png"
                alt="homepage"
                className="dark-logo"
              />
              
              <img
                src="../assets/images/logo-light-text.png"
                className="light-logo"
                alt="homepage"
              /> */}
            </span>{" "}
          </a>
        </div>
        {/* ============================================================== */}
        {/* End Logo */}
        {/* ============================================================== */}
        <div className="navbar-collapse">
          {/* ============================================================== */}
          {/* toggle and nav items */}
          {/* ============================================================== */}
          <ul className="navbar-nav mr-auto">
            {/* This is  */}
            <li className="nav-item">
              {" "}
              <a
                className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                href="javascript:void(0)"
              >
                <i className="ti-menu" />
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a
                className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                href="javascript:void(0)"
              >
                <i className="icon-menu" />
              </a>{" "}
            </li>
            {/* ============================================================== */}
            {/* Search */}
            {/* ============================================================== */}
            {/* <li className="nav-item">
              <form className="app-search d-none d-md-block d-lg-block">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search & enter"
                />
              </form>
            </li> */}
          </ul>
          {/* ============================================================== */}
          {/* User profile and search */}
          {/* ============================================================== */}
          <ul className="navbar-nav my-lg-0">
            {/* ============================================================== */}
            {/* Comment */}
            {/* ============================================================== */}
            {/* <li className="nav-item dropdown"> */}
              {/* <a
                className="nav-link dropdown-toggle waves-effect waves-dark"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="ti-email" />
                <div className="notify">
                  {" "}
                  <span className="heartbit" /> <span className="point" />{" "}
                </div>
              </a> */}
              {/* <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
               
              </div> */}
            {/* </li> */}

       
            


            {/* <li class="nav-item dropdown u-pro">
                        <a class="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" class=""/>
                             <span class="hidden-md-down">Mark &nbsp;</span>
                        </a>
                           
            </li> */}
            


<li class="nav-item dropdown u-pro">
          <a
            class="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
            href=""
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="../assets/images/users/adnan.jpg" alt="user" class="" />
            <span class="hidden-md-down" style={{color:'white'}}>  {email} &nbsp;</span>
          </a>
        </li>
           
           
           
            
                  
          
          
            {/* ============================================================== */}
            {/* End User Profile */}
            {/* ============================================================== */}
          </ul>
        </div>
      </nav>
    </header>
    {/* ============================================================== */}
    {/* End Topbar header */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
           
            {/* <li className="nav-small-cap">--- PERSONAL</li> */}
            <li>
              <a className="waves-effect waves-dark" href="/member">
                
                <span className="hide-menu">
                  Dashboard
                </span>
              </a>
             
            </li>
            <li>
              <a className="waves-effect waves-dark" href="/member/map">
               
                <span className="hide-menu">
                  Location
                </span>
              </a>
             
            </li>


            {/* <li>
              <a className="waves-effect waves-dark" href="http://localhost:3002/login">
              
                <span className="hide-menu">
                  Chat
                </span>
              </a>
             
            </li>
           */}
           
            
          
        
            <li>
              <a
                className="has-arrow waves-effect waves-dark"
                href=""
                aria-expanded="false"
              >
               
                <span className="hide-menu">Donation through member</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="/member/needypeople">For Needy People</a>
                </li>
                <li>
                  <a href="/member/needyhistory">Needy Donation History</a>
                </li>
                <li>
                  <a href="/member/mosque">For Mosque</a>
                </li>
                <li>
                  <a href="/member/mosquehistory">Mosque Donation History</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
               
                <span className="hide-menu">Blood</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="/member/blood-request">Blood request</a>
                </li>
                <li>
                  <a href="/member/blood-donate">Blood donate</a>
                </li>
                <li>
                  <a href="/member/blood-donate-history">Donation history</a>
                </li>
                <li>
                  <a href="/member/blood-request-history">Request history</a>
                </li>
                <li>
                  <a href="/member/mybloodrequest">My request history</a>
                </li>
                <li>
                  <a href="/member/myblooddonate">My donate history</a>
                </li>
              </ul>
            </li>


            <li>
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
               
                <span className="hide-menu">Mosque</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="/member/newmosque-request">New mosque request</a>
                </li>
                <li>
                  <a href="/member/newmosque-history">New mosque history</a>
                </li>
                <li>
                  <a href="/member/mosque-maintinance">Mosque maintinance request</a>
                </li>
                <li>
                  <a href="/member/maintinance-history">Maintinance history</a>
                </li>
              </ul>
            </li>

           
           
            
            
           
               
                
           
           
           
            <li>
              {" "}
              <a
                className="waves-effect waves-dark"
                href="http://localhost:3000"
                aria-expanded="false"
              >
                <span className="hide-menu">Log Out</span>
              </a>
            </li>
           
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    {/* ============================================================== */}
    {/* End Left Sidebar - style you can find in sidebar.scss  */}
    {/* ============================================================== */}
    {/* ============================================================== */}
   
   
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* End Wrapper */}
</>
    </div>



      
  )
}

export default Member_header
