import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Header from './Header';
const Mosquemaintinancemanagement = () => {
  const [user,setUser]=useState([]);
  useEffect(()=>{
     axios.get('http://localhost:9000/maintinance/get')
    .then(res =>{
      console.log(res)
      setUser(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <div>
       <Header/>
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


            <div class="row page-titles">
                  
                </div>


              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Maintinance mosque request history</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Phone No</th>
                            <th>Email</th>

                           

                          </tr>
                        </thead>
                        <tbody>

                          {user.map((user)=>
                           <tr key={user.id}>
                          
                            
                           <td>{user.name}</td>
                           <td>{user.amount}</td>
                           <td>{user.date}</td>
                           <td>{user.reason}</td>
                           <td>{user.phoneno}</td>
                           <td>{user.email}</td>


                           
                         
                          
                         
                          
                         </tr>

                          )}
                        
                          
                        
                       
                         
                        </tbody>
                      </table>
                    </div>
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
        <Footer/>
    </div>
  )
}

export default Mosquemaintinancemanagement
