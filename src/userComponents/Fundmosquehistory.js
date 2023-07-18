import axios from 'axios';
import React, { useEffect, useState } from 'react'

import UserFooter from './UserFooter';
import User_header from './User_header';


const Fundmosquehistory = () => {
   

  const [records, setRecords] = useState([]);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:9000/fund/get')
      .then(res => {
        console.log(res);
        setRecords(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    const storedEmaill = localStorage.getItem('email');
    setLoggedInUserEmail(storedEmaill);
  }, []);

  const loggedInUserRecords = loggedInUserEmail
    ? records.filter(record => record.email === loggedInUserEmail)
    : [];
  
  const totalFundAmount = loggedInUserRecords.reduce((total, record) => {
    return total + parseInt(record.amount, 10);
  }, 0);

  
  

  return (
    <div>
    <User_header/>
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row page-titles"></div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Fund for mosque</h1>
              <hr />
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
                      {/* <th>Confirmation</th> */}
                    </tr>
                  </thead>
                  <tbody>
                  {loggedInUserRecords.length > 0 ? (
  loggedInUserRecords.map(record => (
    <tr key={record.id}>
      <td>{record.name}</td>
      <td>{record.email}</td>
      <td>{record.mosque}</td>
      <td>{record.date}</td>
      <td>{record.receipt}</td>
      <td>{record.amount}</td>
      <td>{record.accountno}</td>
      <td>{record.easypaisano}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="8">No records found for the current member.</td>
  </tr>
)}
                  </tbody>
                </table>
              </div>
              {/* <div>
                <button className="btn btn-primary" onClick={handleConfirmClick}>
                  Confirm Selected
                </button>
              </div> */}
             <h3>Total Fund Amount: {totalFundAmount}</h3>
              {/* <h3>Confirmed Fund Amount: {confirmedTotalFundAmount}</h3> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <UserFooter/>
   
  </div>
  )
}

export default Fundmosquehistory







