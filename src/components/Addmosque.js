import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'

const Addmosque = () => {
  const [errors, setErrors] = useState({});
  
  const [user,setUser]=useState({
    mosquename:"",
    longitude:"",
    latitude:"",
    
  })

 
  const {mosquename,longitude,latitude}=user;
  const onInputChange=e=>{
    setUser({...user,[e.target.name]:e.target.value});
  }


  



  const onSubmit = async (e) => {
    e.preventDefault();
  
    let formIsValid = true;
    const newErrors = {};
  
    if (!mosquename.trim()) {
      formIsValid = false;
      newErrors.mosquename = "Please enter your mosque name";
    }
    
    // Validate 'amount' field
    if (!longitude) {
      formIsValid = false;
      newErrors.longitude = "Please enter the longitude";
    } 
    // else if (isNaN(age)) {
    //   formIsValid = false;
    //   newErrors.age = "Please enter a valid number of age";
    // }
  
    // Validate 'receipt' field
    if (!latitude) {
      formIsValid = false;
      newErrors.latitude = "Please enter the latitude";
    } 
    // else if (isNaN(phoneno)) {
    //   formIsValid = false;
    //   newErrors.phoneno = "Please enter a valid number for phone no";
    // }
  
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        await axios.post('http://localhost:9000/location', user);
        alert('Data inserted');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <>
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
      <div className="row page-titles">
       
      </div>
      {/* ============================================================== */}
      {/* End Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Start Page Content */}
      {/* ============================================================== */}
      {/* Row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            {/* <div className="card-header bg-info">
              <h4 className="m-b-0 text-white">Other Sample form</h4>
            </div> */}
            <div className="card-body">
              <form action="#" onSubmit={e => onSubmit(e)}>
                <div className="form-body">
                  <h3 className="card-title">Mosque Location</h3>
                  <hr />
                  <div className="row p-t-20">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Mosque Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.mosquename ? "is-invalid" : ""}`}

                          placeholder="enter mosque name"
                          name="mosquename"
                          value={mosquename}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.mosquename && <div className="invalid-feedback">{errors.mosquename}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                      </div>
                    </div>
                    
                    {/*/span*/}
                  </div>
                  {/*/row*/}
                  <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Longitude</label>
                        <input
                          type="number"
                          id="firstName"
                          className={`form-control ${errors.longitude ? "is-invalid" : ""}`}

                          placeholder="enter longitude"
                          name="longitude"
                          value={longitude}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.longitude && <div className="invalid-feedback">{errors.longitude}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                      </div>
                    </div>
                    {/*/span*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Latitude</label>
                        <input
                          type="number"
                          className={`form-control ${errors.latitude ? "is-invalid" : ""}`}

                          placeholder="enter latitude"
                          name="latitude"
                          value={latitude}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.latitude && <div className="invalid-feedback">{errors.latitude}</div>}
                      </div>
                    </div>
                    {/*/span*/}
                  </div>
                  {/*/row*/}
                 
                 
                  <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-offset-3 col-md-9">
                          <button type="submit" style={{backgroundColor:'darkcyan',color:'white'}}>
                            Submit
                          </button>
                          <button type="button" className="btn btn-inverse">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  
                  {/*/row*/}
                 
                </div>
                
              </form>
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
  <Footer/>
</>
    </div>
  )
}

export default Addmosque
