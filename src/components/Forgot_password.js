import React from 'react'

const Forgot_password = () => {
  return (
    <div>
      <>
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  <div className="preloader">
    <div className="loader">
      <div className="loader__figure" />
      <p className="loader__label">Elite admin</p>
    </div>
  </div>
  {/* ============================================================== */}
  {/* Main wrapper - style you can find in pages.scss */}
  {/* ============================================================== */}
  <section id="wrapper">
    <div
      className="login-register"
      style={{
        backgroundImage: "url(../assets/images/background/login-register.jpg)"
      }}
    >
      <div className="login-box card">
        <div className="card-body">
          <form
            className="form-horizontal form-material"
            id="loginform"
            action="index.html"
          >
            <h3 className="box-title m-b-20">Forgot Password</h3>
            <div className="form-group ">
              <div className="col-xs-12">
                <input
                  className="form-control"
                  type="text"
                  required=""
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12">
                <input
                  className="form-control"
                  type="text"
                  required=""
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group text-center p-b-10">
              <div className="col-xs-12">
                <button
                  className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                  type="submit"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* ============================================================== */}
  {/* End Wrapper */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* All Jquery */}
  {/* ============================================================== */}
  {/* Bootstrap tether Core JavaScript */}
</>

    </div>
  )
}

export default Forgot_password
