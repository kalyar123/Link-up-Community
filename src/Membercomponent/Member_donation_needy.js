import axios from 'axios'
import React,{useState,useEffect} from 'react'


import Member_footer from './Member_footer'
import Member_header from './Member_header';
const Fund_donation_needy = () => {
  const [errors, setErrors] = useState({});


  const [user, setUser] = useState({
    name: '',
    email: '',
    mosque: '',
    date: '',
    receipt: '',
    amount: '',
    accountno: '',
    easypaisano: ''
  });

  

  const { name, email, mosque, date, receipt, amount, accountno, easypaisano } = user;

  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const onInputChange = (e) => {
    const { name, value } = e.target;
  
    // Validate easypaisano field to accept only alphabetic text
    if (name === 'easypaisano' && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // If input contains non-alphabetic characters, do not update the state
    }
  
    setUser({ ...user, [name]: value });
  };

 

  useEffect(() => {
    const fetchName = async () => {
      try {
        const emailFromLocalStorage = localStorage.getItem('email');
        if (emailFromLocalStorage) {
          const response = await axios.get('http://localhost:9000/member/fetchuser', {
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
  
    // Validate 'date' field
    if (!date) {
      formIsValid = false;
      newErrors.date = "Please select a date";
    }
  
    // Validate 'amount' field
    if (!amount) {
      formIsValid = false;
      newErrors.amount = "Please enter the amount";
    } else if (isNaN(amount)) {
      formIsValid = false;
      newErrors.amount = "Please enter a valid number for amount";
    }
  
    // Validate 'receipt' field
    if (!receipt) {
      formIsValid = false;
      newErrors.receipt = "Please enter the transaction ID";
    } else if (isNaN(receipt)) {
      formIsValid = false;
      newErrors.receipt = "Please enter a valid number for transaction ID";
    }
  
    // Validate 'easypaisano' field
    if (!easypaisano.trim()) {
      formIsValid = false;
      newErrors.easypaisano = "Please enter the donor bank name";
    }
  
    // Validate 'accountno' field
    if (!accountno) {
      formIsValid = false;
      newErrors.accountno = "Please enter the account number";
    } else if (isNaN(accountno)) {
      formIsValid = false;
      newErrors.accountno = "Please enter a valid number for account number";
    }
  
    setErrors(newErrors);
  
    if (formIsValid) {
      try {
        await axios.post('http://localhost:9000/member/needyfund', user);
        alert('Data inserted');
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  return (
    <div>
      <>
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
            {/* action="#" */}
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-body">
                  <h3 className="card-title">Fund donation for mosque</h3>
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
                        {/* {emailError && <p style={{ color: 'red' }}>{emailError}</p>} */}
                      </div>
                    </div>
                    {/*/span*/}
                  </div>
                  {/*/row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group has-success">
                        <label className="control-label">Mosque</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.mosque ? "is-invalid" : ""}`}

                          placeholder="enter mosque name"
                          name="mosque"
                          value={mosque}
                          readOnly
                          onChange={e => onInputChange(e)}
                        />
                         {errors.mosque && <div className="invalid-feedback">{errors.mosque}</div>}

                        {/* <select className="form-control custom-select">
                          <option value="">Phas1 mosque</option>
                          <option value="">Jamilabad mosque</option>
                          <option value="">Phase2 mosque</option>
                          <option value="">Texila mosque</option>
                        </select> */}
                        <small className="form-control-feedback">
                          {" "}
                          Select your mosque{" "}
                        </small>{" "}
                      </div>
                    </div>
                    {/*/span*/}
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
                  </div>
                  {/*/row*/}
                  <div className="row">
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

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Transaction_Id</label>
                        <input
                          type="number"
                          id="firstName"
                          className={`form-control ${errors.receipt ? "is-invalid" : ""}`}
                          placeholder="transaction id"
                          name="receipt"
                          value={receipt}
                          onChange={e => onInputChange(e)}
                        />
                       {errors.receipt && <div className="invalid-feedback">{errors.receipt}</div>}
                      </div>
                    </div>
                    
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Donor Bank Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-control ${errors.easypaisano ? "is-invalid" : ""}`}

                          placeholder="bank name"
                          name="easypaisano"
                          value={easypaisano}
                          onChange={e => onInputChange(e)}
                        />
                       {errors.easypaisano && <div className="invalid-feedback">{errors.easypaisano}</div>}
                       
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="control-label">Account No</label>
                        <input
                          type="number"
                          id="firstName"
                          className={`form-control ${errors.accountno? "is-invalid" : ""}`}

                          placeholder="recipt no"
                          name="accountno"
                          value={accountno}
                          onChange={e => onInputChange(e)}
                        />
                       {errors.accountno && <div className="invalid-feedback">{errors.accountno}</div>}
                       
                      </div>
                    </div>
                    
                  </div>
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
  <Member_footer/>
  </>

    </div>
  )
}

export default Fund_donation_needy
