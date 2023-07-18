import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Fbrfooter from './Fbrfooter';
// import Footer from './Footer';
// import Header from './Header';
const Fbrneedy = () => {
  // const totalFundAmountt = user.reduce((total, record) => {
  //   return total + parseInt(record.amount, 10);
  // }, 0);




 

  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('daily');

  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);


  useEffect(() => {
    axios.get('http://localhost:9000/needyfund/get')
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    filterUser(selectedFilter);
  }, [selectedFilter]);

  const filterUser = (filter) => {
    let filteredData = [];
    const currentDate = new Date();
  
    switch (filter) {
      case 'daily':
        filteredData = user.filter(record => {
          const recordDate = new Date(record.date);
          const isSameDay =
            recordDate.getDate() === currentDate.getDate() &&
            recordDate.getMonth() === currentDate.getMonth() &&
            recordDate.getFullYear() === currentDate.getFullYear();
          return isSameDay;
        });
        break;
  
      case 'weekly':
        const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        filteredData = user.filter(record => {
          const recordDate = new Date(record.date);
          return recordDate >= oneWeekAgo && recordDate <= currentDate;
        });
        break;
  
      case 'monthly':
        filteredData = user.filter(record => {
          const recordDate = new Date(record.date);
          return recordDate.getMonth() === currentDate.getMonth() &&
            recordDate.getFullYear() === currentDate.getFullYear();
        });
        break;
  
      case 'yearly':
        filteredData = user.filter(record => {
          const recordDate = new Date(record.date);
          return recordDate.getFullYear() === currentDate.getFullYear();
        });
        break;
  
      default:
        filteredData = user;
        break;
    }
  
    setFilteredUser(filteredData);
  };
  const totalFundAmount = filteredUser.reduce((total, record) => {
    return total + parseInt(record.amount, 10);
  }, 0);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
        

        <div className="preloader">
    <div className="loader">
      <div className="loader__figure" />
      <p className="loader__label">FBR</p>
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
          <a className="navbar-brand" href="index.html">
            {/* Logo icon */}
            <b>
             
            <img
                src="../assets/images/logoicon.png"
                alt="homepage"
                className="dark-logo"
              />
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
            
            
            {/* <li>
              <a className="waves-effect waves-dark" href="/admin">
                <i className="icon-speedometer" />
                <span className="hide-menu">
                  Mosque fund
                </span>
              </a>
             
            </li> */}

            <li>
              <a
                className="has-arrow waves-effect waves-dark"
                href="javascript:void(0)"
                aria-expanded="false"
              >
               
                <span className="hide-menu">FBR</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="/fbr/mosque"> Mosque fund</a>
                </li>
                <li>
                  <a href="/fbr/needypeople">Needy people fund</a>
                </li>
                <li>
                  <a href="/fbr/member/needypeople">Member needy people fund</a>
                </li>
                <li>
                  <a href="/fbr/member/mosque">Member mosque fund</a>
                </li>
                <li>
                  <a href="http://localhost:3000">Log out</a>
                </li>
              </ul>
            </li>

           
               
                
           
           
{/*            
            <li>
              {" "}
              <a
                className="waves-effect waves-dark"
                href="/admin/login"
                aria-expanded="false"
              >
                <i className="far fa-circle text-success" />
                <span className="hide-menu">Log Out</span>
              </a>
            </li> */}
           
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

    







       {/* Page wrapper  */}
        {/* ============================================================== */}
        <div className="page-wrapper y-5">
          {/* ============================================================== */}
          {/* Container fluid  */}
          {/* ============================================================== */}
          <div className="container-fluid">
            {/* ============================================================== */}
            {/* Bread crumb and right sidebar toggle */}
            {/* ============================================================== */}


           

              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">FBR check needy people fund</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mosque</th>
                            <th>Date</th>
                            <th>Transaction_Id</th>
                            <th>Amount</th>
                            <th>Account No</th>
                            <th>Donor Bank Name</th>
                           
                            
                            
                          </tr>
                        </thead>
                        <tbody>

                          {user.map((user)=>
                           <tr key={user.id}>
                          
                            
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.mosque}</td>
                           <td>{user.date}</td>
                           <td>{user.receipt}</td>
                           <td>{user.amount}</td>
                           <td>{user.accountno}</td>
                           <td>{user.easypaisano}</td>

                           
                         
                          
                        
                          
                         </tr>

                          )}
                        
                          
                        
                       
                         
                        </tbody>
                      </table>
                    </div>

                    <div>
              {/* <h2>Total Fund: {totalFundAmount}</h2> */}
            </div>

            {/* <div className="filters">
  
  <button
    onClick={() => handleFilterChange('weekly')}
    className={`btn btn-darkcyan m-l-15 ${selectedFilter === 'weekly' ? 'active' : ''}`}
    style={{backgroundColor:'darkcyan',color:'white'}}
  >
    Weekly
  </button>
  <button
    onClick={() => handleFilterChange('monthly')}
    className={`btn btn-darkcyan m-l-15 ${selectedFilter === 'monthly' ? 'active' : ''}`}
    style={{backgroundColor:'darkcyan',color:'white'}}
  >
    Monthly
  </button>
  <button
    onClick={() => handleFilterChange('yearly')}
    className={`btn btn-darkcyan m-l-15 ${selectedFilter === 'yearly' ? 'active' : ''}`}
    style={{backgroundColor:'darkcyan',color:'white'}}
  >
    Yearly
  </button>
  
</div> */}

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
                <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
                <div className="r-panel-body">
                  <ul id="themecolors" className="m-t-20">
                    <li><b>With Light sidebar</b></li>
                    <li><a href="javascript:void(0)" data-skin="skin-default" className="default-theme">1</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-green" className="green-theme">2</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-red" className="red-theme">3</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-blue" className="blue-theme working">4</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-purple" className="purple-theme">5</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-megna" className="megna-theme">6</a></li>
                    <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                    <li><a href="javascript:void(0)" data-skin="skin-default-dark" className="default-dark-theme ">7</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-green-dark" className="green-dark-theme">8</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-red-dark" className="red-dark-theme">9</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-blue-dark" className="blue-dark-theme">10</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-purple-dark" className="purple-dark-theme">11</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-megna-dark" className="megna-dark-theme ">12</a></li>
                  </ul>
                  <ul className="m-t-20 chatonline">
                    <li><b>Chat option</b></li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Right sidebar */}
           
          </div>
          {/* ============================================================== */}
          {/* End Container fluid  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        <Fbrfooter/>
    </div>
  )
}

export default Fbrneedy
