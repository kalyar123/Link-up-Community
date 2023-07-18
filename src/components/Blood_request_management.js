import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Blood_request_management = () => {
  return (
    // 
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
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Blood request</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li class="breadcrumb-item active">Blood request</li>
                            </ol>
                            <button type="button" class="btn btn-info d-none d-lg-block m-l-15"><i
                                    class="fa fa-plus-circle"></i> Create New</button>
                        </div>
                    </div>
                </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Request for blood</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Phone No</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Blood Group</th>
                            <th>status</th>
                            <th>Update status</th>

                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                            
                            <td>Adnan</td>
                            <td>03083911279</td>
                            <td>Sargodha</td>
                            <td>85 village</td>
                            <td>AB+</td>
                            <td><span className="label label-primary">pending</span></td>
                            <td><button type="button" class="btn btn-info d-none d-lg-block m-l-15">Mark as complete</button></td>
                            {/* <div class="label label-table label-danger">Delete</div> */}
                          </tr>
                          <tr>
                            
                            <td>Adnan</td>
                            <td>03083911279</td>
                            <td>Sargodha</td>
                            <td>85 village</td>
                            <td>AB+</td>
                            <td><span className="label label-primary">pending</span></td>
                            <td><button type="button" class="btn btn-info d-none d-lg-block m-l-15">Mark as complete</button></td>
                            {/* <div class="label label-table label-danger">Delete</div> */}
                          </tr>
                          <tr>
                            
                            <td>Adnan</td>
                            <td>03083911279</td>
                            <td>Sargodha</td>
                            <td>85 village</td>
                            <td>AB+</td>
                            <td><span className="label label-primary">pending</span></td>
                            <td><button type="button" class="btn btn-info d-none d-lg-block m-l-15">Mark as complete</button></td>
                            {/* <div class="label label-table label-danger">Delete</div> */}
                          </tr>
                          <tr>
                            
                            <td>Adnan</td>
                            <td>03083911279</td>
                            <td>Sargodha</td>
                            <td>85 village</td>
                            <td>AB+</td>
                            <td><span className="label label-primary">pending</span></td>
                            <td><button type="button" class="btn btn-info d-none d-lg-block m-l-15">Mark as complete</button></td>
                            {/* <div class="label label-table label-danger">Delete</div> */}
                          </tr>
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

        <Footer/>
        
       
    </div>
  )
}

export default Blood_request_management;
