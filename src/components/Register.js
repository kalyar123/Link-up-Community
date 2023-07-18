import axios from 'axios';
import React,{useState,useEffect}from 'react'
// import {NavLink} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from './Footer';
import Frontfooter from '../userComponents/Frontfooter';
const Register = () => {
  // const navigate = useNavigate();




  
  const [user, setUser] = useState({
    name:"",
    email:"",
    mosque:"",
    accountno:"",
    password:"",
    confirmpassword:""
  });
  let name, value;
  const handlechange = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }
  // const register = async (e) => {
  //   e.preventDefault();
  //    const { name,email,mosque,accountno,password,confirmpassword} = user;
  //    const res = await fetch('http://localhost:9000/admin-register', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body:JSON.stringify({
  //       name,email,mosque,accountno,password,confirmpassword  
  //      })

  //    });
            
  //    const data = await res.json();
  //    if(res.status === 422 || !data) {
  //     window.alert("invalid registeration");

      
  //    }
  //     else {
  //     window.alert("register Successfull");
  //     // console.log("Successful Registration")
  //     window.location.href = '/admin/login'
  //    }
  // }







  const register = async (e) => {
    e.preventDefault();
    const { name, email, mosque, accountno, password, confirmpassword } = user;
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }
  
    const res = await fetch('http://localhost:9000/admin-register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, mosque, accountno, password, confirmpassword
      })
    });
  
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration successful");
      window.location.href = '/admin/login';
    }
  };



  

  
  
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


  <div className="navbar-header m-t-10">
          <a className="navbar-brand y-5" href="index.html" style={{color:'black'}}>
            {/* Logo icon */}
            <b>
             
          
              {/* <img
                src="../assets/images/logo12.jpg"
                alt="homepage"
                className="light-logo"
                style={{marginLeft:'550px'}}
              /> */}
             
            </b>
            {/*End Logo icon */}
            {/* Logo text */}
            {/* <span>
              Linkup-Community
             
            </span>{" "} */}
          </a>
        </div>



  <section
    id="wrapper"
    className="login-register login-sidebar container my-5"
    style={{
      backgroundImage: "url(../assets/images/background/login-register.jpg)"
    }}
  >
    <div className="login-box card col-md-6 offset-md-3">
      <div className="card-body">
       
        <form
          className="form-horizontal form-material"
          id="loginform"
          action="index.html"
        >
          <h3 className="box-title m-t-40 m-b-0">Register Now</h3>
          <small>Create your account and enjoy</small>
          {console.log("User:",user)}
          <div className="form-group m-t-20">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="text"
                name="name"
                value={user.name}
                required=""
                placeholder="Name"
                onChange={handlechange}
              />
            </div>
         
          </div>
         
          <div className="form-group ">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="email"
                name="email"
                value={user.email}
                required=""
                placeholder="Email"
                onChange={handlechange}
                
              />
            </div>
           
          </div>
          <div className="form-group m-t-20">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="text"
                name="mosque"
                value={user.mosque}
                required=""
                placeholder="Mosque name"
                onChange={handlechange}
              />
            </div>
         
          </div>


          {/* <div className="form-group ">
            <div className="col-xs-12">
           
            <label className="control-label">Select your mosque</label>
                        <select className="form-control custom-select">
                          <option value="">Phas1 mosque</option>
                          <option value="">Jamilabad mosque</option>
                          <option value="">Phase2 mosque</option>
                          <option value="">Texila mosque</option>
                        </select>
              <input
                className="form-control"
                type="text"
                required=""
                placeholder="Email"
              />
            </div>
          </div> */}
           <div className="form-group ">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="number"
                name="accountno"
                value={user.accountno}
                required=""
                placeholder="Accountno"
                onChange={handlechange}
              />
            </div>
           
          </div>
          <div className="form-group ">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="password"
                name="password"
                value={user.password}
                required=""
                placeholder="Password"
                onChange={handlechange}
              />
            </div>
           
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="password"
                name="confirmpassword"
                value={user.confirmpassword}
                required=""
                placeholder="Confirm Password"
                onChange={handlechange}
              />
            </div>
           
          </div>
          {/* <div className="form-group row">
            <div className="col-md-12">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  I agree to all <a href="javascript:void(0)">Terms</a>
                </label>
              </div>
            </div>
          </div> */}
          <div className="form-group text-center m-t-20">
            <div className="col-xs-12">
              <button
                className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                type="button" 
                onClick={register}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="form-group m-b-0">
            <div className="col-sm-12 text-center">
              <p>
                Already have an account?{" "}
                <a href="/admin/login" className="text-info m-l-5">
                  <b>Sign In</b>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer/>
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

export default Register
