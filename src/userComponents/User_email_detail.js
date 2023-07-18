import React from 'react'
import UserFooter from './UserFooter'
import User_header from './User_header'
const User_email_detail = () => {
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
          <div className="col-md-5 align-self-center">
            <h4 className="text-themecolor">Email Details</h4>
          </div>
          <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="breadcrumb-item active">Email Details</li>
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
          <div className="col-lg-12">
            <div className="card">
              <div className="row">
                <div className="col-xlg-2 col-lg-3 col-md-4">
                  <div className="card-body inbox-panel">
                    <a
                      href="/admin/compose-email"
                      className="btn btn-danger m-b-20 p-10 btn-block waves-effect waves-light"
                    >
                      Compose
                    </a>
                    <ul className="list-group list-group-full">
                      <li className="list-group-item active">
                        {" "}
                        <a href="javascript:void(0)">
                          <i className="mdi mdi-gmail" /> Inbox{" "}
                        </a>
                        <span className="badge badge-success ml-auto">6</span>
                      </li>
                      <li className="list-group-item">
                        <a href="javascript:void(0)">
                          {" "}
                          <i className="mdi mdi-star" /> Starred{" "}
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="javascript:void(0)">
                          {" "}
                          <i className="mdi mdi-send" /> Draft{" "}
                        </a>
                        <span className="badge badge-danger ml-auto">3</span>
                      </li>
                      <li className="list-group-item ">
                        <a href="javascript:void(0)">
                          {" "}
                          <i className="mdi mdi-file-document-box" /> Sent Mail{" "}
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a href="javascript:void(0)">
                          {" "}
                          <i className="mdi mdi-delete" /> Trash{" "}
                        </a>
                      </li>
                    </ul>
                    <h3 className="card-title m-t-40">Labels</h3>
                    <div className="list-group b-0 mail-list">
                      {" "}
                      <a href="javascript:void(0)" className="list-group-item">
                        <span className="fa fa-circle text-info m-r-10" />
                        Work
                      </a>{" "}
                      <a href="javascript:void(0)" className="list-group-item">
                        <span className="fa fa-circle text-warning m-r-10" />
                        Family
                      </a>{" "}
                      <a href="javascript:void(0)" className="list-group-item">
                        <span className="fa fa-circle text-purple m-r-10" />
                        Private
                      </a>{" "}
                      <a href="javascript:void(0)" className="list-group-item">
                        <span className="fa fa-circle text-danger m-r-10" />
                        Friends
                      </a>{" "}
                      <a href="javascript:void(0)" className="list-group-item">
                        <span className="fa fa-circle text-success m-r-10" />
                        Corporate
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-xlg-10 col-lg-9 col-md-8 bg-light border-left">
                  <div className="card-body">
                    <div
                      className="btn-group m-b-10 m-r-10"
                      role="group"
                      aria-label="Button group with nested dropdown"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary font-18"
                      >
                        <i className="mdi mdi-inbox-arrow-down" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary font-18"
                      >
                        <i className="mdi mdi-alert-octagon" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary font-18"
                      >
                        <i className="mdi mdi-delete" />
                      </button>
                    </div>
                    <div
                      className="btn-group m-b-10 m-r-10"
                      role="group"
                      aria-label="Button group with nested dropdown"
                    >
                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          className="btn btn-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="mdi mdi-folder font-18 " />{" "}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupDrop1"
                        >
                          {" "}
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Dropdown link
                          </a>{" "}
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Dropdown link
                          </a>{" "}
                        </div>
                      </div>
                      <div className="btn-group" role="group">
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          className="btn btn-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="mdi mdi-label font-18" />{" "}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="btnGroupDrop1"
                        >
                          {" "}
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Dropdown link
                          </a>{" "}
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Dropdown link
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button "
                      className="btn btn-secondary m-r-10 m-b-10"
                    >
                      <i className="mdi mdi-reload font-18" />
                    </button>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn m-b-10 btn-secondary font-18 dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        More{" "}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
                        {" "}
                        <a className="dropdown-item" href="javascript:void(0)">
                          Mark as all read
                        </a>{" "}
                        <a className="dropdown-item" href="javascript:void(0)">
                          Dropdown link
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-t-0">
                    <div className="card b-all shadow-none">
                      <div className="card-body">
                        <h3 className="card-title m-b-0">
                          Your message title goes here
                        </h3>
                      </div>
                      <div>
                        <hr className="m-t-0" />
                      </div>
                      <div className="card-body">
                        <div className="d-flex m-b-40">
                          <div>
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/users/1.jpg"
                                alt="user"
                                width={40}
                                className="img-circle"
                              />
                            </a>
                          </div>
                          <div className="p-l-10">
                            <h4 className="m-b-0">Pavan kumar</h4>
                            <small className="text-muted">
                              From: jonathan@domain.com
                            </small>
                          </div>
                        </div>
                        <p>
                          <b>Dear USer</b>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis,
                          sem.Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu. In
                          enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                          justo. Nullam dictum felis eu pede mollis pretium.
                          Integer tincidunt. Cras dapibus. Vivamus elementum
                          semper nisi.
                        </p>
                        <p>
                          enean leo ligula, porttitor eu, consequat vitae,
                          eleifend ac, enim. Aliquam lorem ante, dapibus in,
                          viverra quis, feugiat a, tellus. Phasellus viverra
                          nulla ut metus varius laoreet. Quisque rutrum. Aenean
                          imperdiet. Etiam ultricies nisi vel augue. Curabitur
                          ullamcorper ultricies nisi. Nam eget dui. Etiam
                          rhoncus. Maecenas tempus, tellus eget condimentum
                          rhoncus, sem quam semper libero, sit amet adipiscing
                          sem neque sed ipsum. Nam quam nunc, blandit vel,
                          luctus pulvinar,
                        </p>
                      </div>
                      <div>
                        <hr className="m-t-0" />
                      </div>
                      <div className="card-body">
                        <h4>
                          <i className="fa fa-paperclip m-r-10 m-b-10" />{" "}
                          Attachments <span>(3)</span>
                        </h4>
                        <div className="row">
                          <div className="col-md-2">
                            <a href="javascript:void(0)">
                              {" "}
                              <img
                                className="img-thumbnail img-responsive"
                                alt="attachment"
                                src="../assets/images/big/img1.jpg"
                              />{" "}
                            </a>
                          </div>
                          <div className="col-md-2">
                            <a href="javascript:void(0)">
                              {" "}
                              <img
                                className="img-thumbnail img-responsive"
                                alt="attachment"
                                src="../assets/images/big/img2.jpg"
                              />{" "}
                            </a>
                          </div>
                          <div className="col-md-2">
                            <a href="javascript:void(0)">
                              {" "}
                              <img
                                className="img-thumbnail img-responsive"
                                alt="attachment"
                                src="../assets/images/big/img3.jpg"
                              />{" "}
                            </a>
                          </div>
                        </div>
                        <div className="b-all m-t-20 p-20">
                          <p className="p-b-20">
                            click here to <a href="javascript:void(0)">Reply</a>{" "}
                            or <a href="javascript:void(0)">Forward</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Page Content */}
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
    <UserFooter/>
    </div>
  )
}

export default User_email_detail
