import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import User_header from './User_header'
const Location = () => {
  
  return (
    <div>
      <>
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  <div className="preloader">
    <div className="loader">
      <div className="loader__figure" />
      <p className="loader__label">User</p>
    </div>
  </div>
  {/* ============================================================== */}
  {/* Main wrapper - style you can find in pages.scss */}
  {/* ============================================================== */}
  <div id="main-wrapper">
    {/* ============================================================== */}
    {/* Topbar header - style you can find in pages.scss */}
    {/* ============================================================== */}
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
            <h4 className="text-themecolor">Google Map</h4>
          </div>
          <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="breadcrumb-item active">Google Map</li>
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
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Simple Basic Map</h4>
                <div id="gmaps-simple" className="gmaps" />
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
                      Varun Dhavan{" "}
                      <small className="text-success">online</small>
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
                      Ritesh Deshmukh{" "}
                      <small className="text-danger">Busy</small>
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
                      Govinda Star{" "}
                      <small className="text-success">online</small>
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
                      Hritik Roshan
                      <small className="text-success">online</small>
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
    {/* footer */}
    {/* ============================================================== */}
    <footer className="footer">© 2019 Eliteadmin by themedesigner.in</footer>
    {/* ============================================================== */}
    {/* End footer */}
    {/* ============================================================== */}
  </div>
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
    {/* <!-- google maps api --> */}
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8"></script>
    <script src="../assets/node_modules/gmaps/gmaps.min.js"></script>
    <script src="../assets/node_modules/gmaps/jquery.gmaps.js"></script>
</>

    </div>
  )
}

export default Location
