import axios from 'axios'
import React,{useState,useEffect} from 'react'

import User_header from './User_header';
import UserFooter from './UserFooter';
const Usermaintinancerequest = () => {
  const [errors, setErrors] = useState({});
  const [user,setUser]=useState({
    name:"",
    phoneno:"",
    date:"",
    amount:"",
    reason:"",
    email:""
  })
  const {name,phoneno,date,amount,reason,email}=user;
  const onInputChange=e=>{
    setUser({...user,[e.target.name]:e.target.value});
  }


  useEffect(() => {
    const fetchName = async () => {
      try {
        const emailFromLocalStorage = localStorage.getItem('email');
        if (emailFromLocalStorage) {
          const response = await axios.get('http://localhost:9000/fetchuser', {
            headers: { 'Content-Type': 'application/json' },
            params: { email: emailFromLocalStorage }
          });
  
          const data = response.data;
          console.log(data);
  
          if (data.success) {
            const { name, email } = data.user;
            console.log("name", name);
            setUser({ ...user, name, email });
          } else {
            console.error('Failed to fetch name:', data.error);
          }
        }
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
      }
    };
  
    fetchName();
  }, []);


 const onSubmit = async (e) => {
    e.preventDefault();
  
    let formIsValid = true;
    const newErrors = {};
  
    if (!name.trim()) {
      formIsValid = false;
      newErrors.name = "Please enter your name";
    }
    if (!email.trim()) {
      formIsValid = false;
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email";
    }
    if (!date) {
      formIsValid = false;
      newErrors.date = "Please enter the date";
    }
  
    // Validate 'date' field
    if (!amount) {
      formIsValid = false;
      newErrors.amount = "Please enter amount";
    }
  
  // Validate 'reason' field
if (!reason) {
  formIsValid = false;
  newErrors.reason = "Please enter the reason";
} else if (!/^[a-zA-Z\s]+$/.test(reason)) {
  formIsValid = false;
  newErrors.reason = "Please enter a valid reason (only alphabetic characters)";
}

  
    // Validate 'receipt' field
    if (!phoneno) {
      formIsValid = false;
      newErrors.phoneno = "Please enter the phone no";
    } else if (isNaN(phoneno)) {
      formIsValid = false;
      newErrors.phoneno = "Please enter a valid number for phone no";
    }
  
   
  
   
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        await axios.post('http://localhost:9000/maintinance', user);
        alert('Data inserted');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
       <>
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
                  <h3 className="card-title">User request for new mosque</h3>
                  <hr />
                  <div className="row p-t-20">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          placeholder="enter name"
                          name="name"
                          value={name}
                          readOnly
                          onChange={e => onInputChange(e)}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                      </div>
                    </div>
                    {/*/span*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Phone No</label>
                        <input
                          type="number"
                          id="firstName"
                          className={`form-control ${errors.phoneno ? "is-invalid" : ""}`}
                          placeholder="Enter phone no"
                          name="phoneno"
                          value={phoneno}
                          onChange={e => onInputChange(e)}
                        />
                        {errors.phoneno && <div className="invalid-feedback">{errors.phoneno}</div>}
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
                        <label className="control-label">Date</label>
                        <input
                          type="date"
                          className={`form-control ${errors.date ? "is-invalid" : ""}`}
                          placeholder="dd/mm/yyyy"
                          name="date"
                          value={date}
                          onChange={e => onInputChange(e)}
                        />
                        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                      </div>
                    </div>
                    {/*/span*/}


                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Amount</label>
                        <input
                          type="number"
                          id="firstName"
                          className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                          placeholder="Enter amount"
                          name="amount"
                          value={amount}
                          onChange={e => onInputChange(e)}
                        />
                        {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                      </div>
                    </div>
                    
                  </div>

                  <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Reason</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.reason ? "is-invalid" : ""}`}

                          placeholder="enter reason"
                          name="reason"
                          value={reason}
                          onChange={e => onInputChange(e)}
                        />
                        {errors.reason && <div className="invalid-feedback">{errors.reason}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                          type="email"
                          id="firstName"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          placeholder="enter email"
                          name="email"
                          value={email}
                          readOnly
                          onChange={e => onInputChange(e)}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                       
                      </div>
                    </div>
                    {/*/span*/}
                    
                  </div>
                  {/*/row*/}
                  <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-offset-3 col-md-9">
                          <button type="submit" className="btn btn-darkcyan" style={{backgroundColor:'darkcyan',color:'white'}}>
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
  <UserFooter/>
</>
    </div>
  )
}

export default Usermaintinancerequest
