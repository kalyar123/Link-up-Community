import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import Header from './Header';
const Memberneedyfund = () => {

 

const [records,setRecords]=useState([])
  // const [user,setUser]=useState([]);
  useEffect(()=>{
     axios.get('http://localhost:9000/member/needyfund/get')
    .then(res =>{
      console.log(res)
      setRecords(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  //  const [confirmedRecords, setConfirmedRecords] = useState([]);

  // const handleConfirmClick = () => {
  //   const confirmed = records.filter(record => record.isConfirmed);
  //   setConfirmedRecords(confirmed);
  //   setRecords(records.filter(record => !record.isConfirmed));
  // };

  // const toggleConfirmation = (recordId) => {
  //   setRecords(prevRecords =>
  //     prevRecords.map(record => {
  //       if (record.id === recordId) {
  //         return { ...record, isConfirmed: !record.isConfirmed };
  //       }
  //       return { ...record, isConfirmed: false };
  //     })
  //   );
  // };
  
  
  

  const totalFundAmount = records.reduce((total, record) => {
    return total + parseInt(record.amount, 10);
  }, 0);

  // const confirmedTotalFundAmount = confirmedRecords.reduce((total, record) => {
  //   return total + parseInt(record.amount, 10);
  // }, 0);

  return (
    <div>
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


            <div class="row page-titles">
                   
                </div>


              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h1 className="card-title">Fund for needy people</h1>
                    <hr/>
                    <div className="table-responsive">

                 
                      <table className="table">
                        <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mosque</th>
                            <th>Date</th>
                            <th>Transaction_Id</th>
                            <th>Amount</th>
                            <th>Account No</th>
                            <th>Donor Bank Name</th>
                           
                            
                            {/* <th>Status</th>
                            <th>Update Status</th> */}
                          </tr>
                        </thead>
                        <tbody>
  {records.map(record => (
    <tr key={record.id}>
      <td>{record.name}</td>
      <td>{record.email}</td>
      <td>{record.mosque}</td>
      <td>{record.date}</td>
      <td>{record.receipt}</td>
      <td>{record.amount}</td>
      <td>{record.accountno}</td>
      <td>{record.easypaisano}</td>
      {/* <td>
        <input
          type="checkbox"
          checked={record.isConfirmed}
          onChange={() => toggleConfirmation(record.id)}
        />
      </td> */}
    </tr>
  ))}
</tbody>


                      </table>

                      
                    </div>
                    <br></br>

                    <div>
              <h2>Total Fund: {totalFundAmount}</h2>
            </div>

            <hr/>

            
            {/* <div>
              <h2>Total Confirmed Fund: {confirmedTotalFundAmount}</h2>
            </div> */}



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
                <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
                <div className="r-panel-body">
                  <ul id="themecolors" className="m-t-20">
                    <li><b>With Light sidebar</b></li>
                    <li><a href="javascript:void(0)" data-skin="skin-default" className="default-theme">1</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-green" className="green-theme">2</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-red" className="red-theme">3</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-blue" className="blue-theme working">4</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-purple" className="purple-theme">5</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-megna" className="megna-theme">6</a></li>
                    <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                    <li><a href="javascript:void(0)" data-skin="skin-default-dark" className="default-dark-theme ">7</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-green-dark" className="green-dark-theme">8</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-red-dark" className="red-dark-theme">9</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-blue-dark" className="blue-dark-theme">10</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-purple-dark" className="purple-dark-theme">11</a></li>
                    <li><a href="javascript:void(0)" data-skin="skin-megna-dark" className="megna-dark-theme ">12</a></li>
                  </ul>
                  <ul className="m-t-20 chatonline">
                    <li><b>Chat option</b></li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* End Right sidebar */}
           
          </div>
          {/* ============================================================== */}
          {/* End Container fluid  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* End Page wrapper  */}
        <Footer/>
    </div>
  )
}

export default Memberneedyfund













