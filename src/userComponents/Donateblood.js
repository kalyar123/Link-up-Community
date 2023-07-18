import axios from 'axios'
import React,{useState,useEffect} from 'react'
import UserFooter from './UserFooter'
import User_header from './User_header'

const Donateblood = () => {
  const [errors, setErrors] = useState({});
  
  const [user,setUser]=useState({
    name:"",
    mosque:"",
    disease:"",
    age:"",
    phoneno:"",
    unit:"",
    blood:"",
    email:"",
  })

 
  const {name,mosque,disease,age,phoneno,unit,blood,email}=user;
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
            const { name, email, mosque } = data.user;
            console.log("name", name);
            setUser({ ...user, name, email, mosque });
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
    if (!mosque.trim()) {
      formIsValid = false;
      newErrors.mosque = "Please enter the mosque name";
    }
  
   // Validate 'disease' field
if (!disease) {
  formIsValid = false;
  newErrors.disease = "Please enter disease";
} else if (!/^[a-zA-Z\s]+$/.test(disease)) {
  formIsValid = false;
  newErrors.disease = "Please enter a valid disease (only alphabetic characters)";
}

  
    // Validate 'amount' field
    if (!age) {
      formIsValid = false;
      newErrors.age = "Please enter the age";
    } else if (isNaN(age)) {
      formIsValid = false;
      newErrors.age = "Please enter a valid number of age";
    }
  
    // Validate 'receipt' field
    if (!phoneno) {
      formIsValid = false;
      newErrors.phoneno = "Please enter the phone no";
    } else if (isNaN(phoneno)) {
      formIsValid = false;
      newErrors.phoneno = "Please enter a valid number for phone no";
    }
  
    // Validate 'easypaisano' field
    if (!unit.trim()) {
      formIsValid = false;
      newErrors.unit = "Please enter the unit";
    }
  
    if (!blood) {
      formIsValid = false;
      newErrors.blood = "Please enter the blood";
    } else if (!/^[a-zA-Z\s+*/-]*$/.test(blood)) {
      formIsValid = false;
      newErrors.blood = "Please enter a valid blood (alphabetic characters and operators only)";
    }
    
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        await axios.post('http://localhost:9000/blood-donate', user);
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
                  <h3 className="card-title">Blood Donate</h3>
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
                        <label className="control-label">Disease (if any)</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.disease ? "is-invalid" : ""}`}

                          placeholder="enter disease"
                          name="disease"
                          value={disease}
                          
                          onChange={e => onInputChange(e)}
                        />
                         {errors.disease && <div className="invalid-feedback">{errors.disease}</div>}
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
                        <label className="control-label">Mosque</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.mosque ? "is-invalid" : ""}`}

                          placeholder="enter mosque"
                          name="mosque"
                          value={mosque}
                          readOnly
                          onChange={e => onInputChange(e)}
                        />
                         {errors.mosque && <div className="invalid-feedback">{errors.mosque}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                      </div>
                    </div>
                    {/*/span*/}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Age</label>
                        <input
                          type="number"
                          className={`form-control ${errors.age ? "is-invalid" : ""}`}

                          placeholder="enter age"
                          name="age"
                          value={age}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                      </div>
                    </div>
                    {/*/span*/}
                  </div>
                  {/*/row*/}
                  <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Blood</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.blood ? "is-invalid" : ""}`}

                          placeholder="enter disease"
                          name="blood"
                          value={blood}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.blood && <div className="invalid-feedback">{errors.blood}</div>}
                        <small className="form-control-feedback">
                          {" "}
                          This is inline help{" "}
                        </small>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Unit</label>
                        <input
                          type="number"
                          className={`form-control ${errors.unit ? "is-invalid" : ""}`}

                          placeholder="enter unit"
                          name="unit"
                          value={unit}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.unit && <div className="invalid-feedback">{errors.unit}</div>}
                      </div>
                    </div>
                  
                  </div>
                  <div className="row">
                   
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Phone No</label>
                        <input
                          type="number"
                          className={`form-control ${errors.phoneno ? "is-invalid" : ""}`}

                          placeholder="enter phone no"
                          name="phoneno"
                          value={phoneno}
                          onChange={e => onInputChange(e)}
                        />
                         {errors.phoneno && <div className="invalid-feedback">{errors.phoneno}</div>}
                      </div>
                    </div>

                    <div className="col-md-6">
                     <div className="form-group">
                       <label className="control-label">Email</label>
                       <input
                         type="email"
                        
                         className={`form-control ${errors.email ? "is-invalid" : ""}`}

                         name="email"
                         value={email}
                         readOnly
                         onChange={e => onInputChange(e)}
                       />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      
                     </div>
                   </div>
                  
                  </div>
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
  <UserFooter/>
</>
    </div>
  )
}

export default Donateblood
