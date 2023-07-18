import React,{useState,useEffect,useContext}from 'react'
import Header from '../components/Header';
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // const [user,setUser]=useState({
  //   email:"",
  //   password:""
  // })
  // const handlechange=e=>{
  //   const {name,value}=e.target
  //   setUser({
  //     ...user,
  //     [name]:value
  //   })
  // }
  // const handlesubmit=async()=>{
    
  //   if( Validate()){
  //     const {email,password}= user;
  //     const {datauser}=await axios.post('http://localhost:9000/login',{
  //       email,password
  //     })
  //     if(datauser.status===false){
  //       console.log("error");
  //      toast.error(datauser.msg,toastoptions);
  //     }
  //     else{
  //       console.log("true");
  //       window.location.href = '/user/email';
  //     }
  //     // if(datauser.status===true){
  //     //  localStorage.setItem("chat-app-user",JSON.stringify(datauser.user))
  //     //  window.location.href = '/user/email'
      
  //     // }
  //  }
    
  // }
  // const toastoptions = {
  //   position:"bottom-right",
  //   autoClose:8000,
  //   pauseOnHover:true,
  //   draggable:true,
  //   theme:"dark"
  // }
  // const Validate = () => {
  //   const {email,password}= user;
  //   const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
  //   if(email===""){
  //     toast.error("email is required",toastoptions);
  //     return false;
  //   }else if(!emailRegex.test(email)){
  //     toast.error("this email is not valid",toastoptions);
  //     return false;
  //   }else if(password===""){
  //     toast.error("password is required",toastoptions);
  //     return false;
  //   }
  //   return true;

  // };


  


 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const username = 'usama@gmail.com';
  const userpassword ='usama';
  const loginUser = async (e) => {
    e.preventDefault();
    if(!email || !password){
      window.alert('please fill properly')
    }
    else if(email === username && password === userpassword){
      window.alert("login Successfull");
      window.location.href = '/admin'
    }
    else{
      window.alert("Enter correct email or password");
    }

    // const res = await fetch("http://localhost:9000/admin-logins", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    // const data = res.json();
    // if (res.status === 422 || !data) {
    //   window.alert("invalid Credentials");
    // } else if (!email || !password) {
    //   window.alert("plz filled property");
    // } else {
    //   window.alert("login Successfull");
    //   window.location.href = '/admin'
     
    // }

    localStorage.setItem('email',email);
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
      <p className="loader__label">User</p>
    </div>
  </div>
  {/* ============================================================== */}
  {/* Main wrapper - style you can find in pages.scss */}
  {/* ============================================================== */}
  <section
    id="wrapper"
    className="login-register login-sidebar container mt-5"
    style={{
      backgroundImage: "url(../assets/images/background/login-register.jpg)"
    }}
  >
    

    <div className="login-box card col-md-6 offset-md-3">
      <div className="card-body">
        <form
          className="form-horizontal form-material text-center"
          id="loginform"
          action=""
        >
          <a href="javascript:void(0)" className="db">
           <h1>Login</h1>
          </a>
          {/* {console.log('User:',user)} */}
          <div className="form-group m-t-40">
            <div className="col-xs-12">
              <input
                className="form-control"
                name="email"
                value={email}
                type="email"
                required={true}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                required={true}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <div className="d-flex no-block align-items-center">
                {/* <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div> */}
                {/* <div className="ml-auto">
                  <a
                    href="forgotpassword"
                    id="to-recover"
                    className="text-muted"
                  >
                    <i className="fas fa-lock m-r-5" /> Forgot pwd?
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="form-group text-center m-t-20">
            <div className="col-xs-12">
              <button
                className="btn btn-info btn-lg btn-block text-uppercase btn-rounded"
                type="submit"
                onClick={loginUser}
              >
                
                Log In
              </button>
            </div>
          </div>
        
          {/* <div className="form-group m-b-0">
            <div className="col-sm-12 text-center">
              Don't have an account?{" "}
              <a href="/admin/register" className="text-primary m-l-5">
                <b>Sign Up</b>
              </a>
            </div>
          </div> */}
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
  {/*Custom JavaScript */}
</>

    </div>
  )
}

export default Login;
