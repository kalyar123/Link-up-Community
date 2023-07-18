import React from 'react'
import Member_footer from './Member_footer'
import Member_header from './Member_header'
const Member_email = () => {
  return (
    <div>
      <Member_header/>
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
            <h4 className="text-themecolor">Mailbox</h4>
          </div>
          <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="breadcrumb-item active">Mailbox</li>
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
                <div className="col-lg-3 col-md-4">
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
                <div className="col-lg-9 col-md-8 bg-light border-left">
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
                      <div className="inbox-center table-responsive">
                        <table className="table table-hover no-wrap">
                          <tbody>
                            <tr className="unread">
                              <td style={{ width: 40 }}>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox0"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox0"
                                  />
                                </div>
                              </td>
                              <td
                                style={{ width: 40 }}
                                className="hidden-xs-down"
                              >
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Hritik Roshan</td>
                              <td className="max-texts">
                                {" "}
                                <a href="/admin/email-detail">
                                  <span className="label label-info m-r-10">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> 12:30 PM </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox1"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox1"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star text-warning" />
                              </td>
                              <td className="hidden-xs-down">Genelia Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 13 </td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox2"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox2"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">
                                Ritesh Deshmukh
                              </td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-success">
                                    Elite
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 12 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox3"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox3"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Akshay Kumar</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-warning">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 12 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox4"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox4"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Hritik Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-info m-r-10">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 12 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox5"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox5"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star text-warning" />
                              </td>
                              <td className="hidden-xs-down">Genelia Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 11 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox6"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox6"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">
                                Ritesh Deshmukh
                              </td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-success">
                                    Elite
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 11 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox7"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox7"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Akshay Kumar</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-warning">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 11 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox8"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox8"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Hritik Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-info m-r-10">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 10 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox9"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox9"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star text-warning" />
                              </td>
                              <td className="hidden-xs-down">Genelia Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 10 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox10"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox10"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">
                                Ritesh Deshmukh
                              </td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-success">
                                    Elite
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 10 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox11"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox11"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Akshay Kumar</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-warning">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 09 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox12"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox12"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">Hritik Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-info m-r-10">
                                    Work
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 09 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox13"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox13"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star text-warning" />
                              </td>
                              <td className="hidden-xs-down">Genelia Roshan</td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 09 </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="checkbox14"
                                    defaultValue="check"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="checkbox14"
                                  />
                                </div>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-star-o" />
                              </td>
                              <td className="hidden-xs-down">
                                Ritesh Deshmukh
                              </td>
                              <td className="max-texts">
                                <a href="/admin/email-detail">
                                  <span className="label label-success">
                                    Elite
                                  </span>{" "}
                                  Lorem ipsum perspiciatis unde omnis iste natus
                                  error sit voluptatem
                                </a>
                              </td>
                              <td className="hidden-xs-down">
                                <i className="fa fa-paperclip" />
                              </td>
                              <td className="text-right"> May 09 </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
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
    <Member_footer/>
    </div>
  )
}

export default Member_email
