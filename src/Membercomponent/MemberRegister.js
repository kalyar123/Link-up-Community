import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MemberRegister = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mosque: "",
    accountno: "",
    password: "",
    confirmpassword: "",
    phoneno: ""
  });

  const [mosques, setMosques] = useState([]);

  useEffect(() => {
    const fetchMosques = async () => {
      try {
        const response = await axios.get('http://localhost:9000/location/get');
        if (response.status === 200) {
          setMosques(response.data);
        }
      } catch (error) {
        console.log('Error occurred while fetching mosque data:', error.message);
      }
    };

    fetchMosques();
  }, []);

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { name, email, mosque, accountno, password, confirmpassword, phoneno } = user;
    if (!name || !email || !mosque || !accountno || !password || !confirmpassword || !phoneno) {
      toast.error("Please fill in all fields");
      return;
    }

     const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(name)) {
    toast.error("Name should contain only alphabets");
    return;
  }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Invalid email address");
    return;
  }

  // Account number validation
  const accountNoRegex = /^\d{14}$/;
  if (!accountNoRegex.test(accountno)) {
    toast.error("Account number must be 14 digits");
    return;
  }

  // Phone number validation
  const phoneNoRegex = /^(\+92|0)?[0-9]{10}$/;
  if (!phoneNoRegex.test(phoneno)) {
    toast.error("Invalid phone number. Phone number must be 11 digits of Pakistan");
    return;
  }

  // Password validation
  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    toast.error("Password must be at least 8 characters long and contain both letters and numbers");
    return;
  }



  // if (password.length < 8) {
  //   toast.error("Password must be at least 8 characters long");
  //   return;
  // }

  if (password !== confirmpassword) {
    toast.error("Password and confirm password do not match");
    return;
  }

    try {
      const selectedMosque = mosques.find((m) => m.mosquename === mosque);
      if (!selectedMosque) {
        toast.error("Invalid mosque selection");
        return;
      }

      // const res = await axios.get(`http://localhost:9000/member-register/mosque/${selectedMosque._id}`);
      // if (res.data.isRegistered) {
      //   toast.error("Mosque already has a registered member");
      //   return;
      // }

      const registerRes = await axios.post('http://localhost:9000/member-register', {
        name,
        email,
        mosque: selectedMosque.mosquename, // Pass the mosque ID instead of name
        accountno,
        password,
        confirmpassword,
        phoneno
      });

      if (registerRes.status === 201) {
        toast.success("Registration successful");
        window.location.href = '/member/login';
      } else {
        toast.error(registerRes.data.error || "email already exist");
      }
    } catch (error) {
      console.log('Error occurred during registration:', error.message);
      toast.error("email already exist");
    }
  };




  const isMosqueOptionDisabled = (mosqueId) => {
    const selectedMosque = mosques.find((m) => m._id === mosqueId);
    if (selectedMosque) {
      return selectedMosque.isRegistered; // Disable the option if the mosque is already registered
    }
    return false;
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
            <select
                      className="form-control"
                      name="mosque"
                      value={user.mosque}
                      required
                      onChange={handlechange}
                    >
                      <option value="">Select Mosque</option>
                      {mosques.map((mosque) => (
                        <option
                          key={mosque._id}
                          value={mosque.mosquename}
                          disabled={isMosqueOptionDisabled(mosque.mosquename)}
                        >
                          {mosque.mosquename}
                        </option>
                      ))}
                    </select>
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

          <div className="form-group">
            <div className="col-xs-12">
              <input
                className="form-control"
                type="number"
                name="phoneno"
                value={user.phoneno}
                required=""
                placeholder="enter number"
                onChange={handlechange}
              />
            </div>
           
          </div>
        
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
                <a href="/member/login" className="text-info m-l-5">
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

export default MemberRegister
