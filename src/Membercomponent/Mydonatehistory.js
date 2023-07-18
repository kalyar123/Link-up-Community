import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Member_footer from './Member_footer';
import Member_header from './Member_header';

const Mydonatehistory = () => {
    const [records, setRecords] = useState([]);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = () => {
    axios
      .get('http://localhost:9000/blood-donate/get')
      .then(res => {
        console.log(res);
        setRecords(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    const storedEmail = localStorage.getItem('email');
    setLoggedInUserEmail(storedEmail);
  };

  const loggedInUserRecords = loggedInUserEmail
    ? records.filter(record => record.email === loggedInUserEmail)
    : [];

    const handleDelete = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
          axios.delete(`http://localhost:9000/blood-donate/get/${id}`)
            .then(res => {
              console.log(res);
              // Update the records list by filtering out the deleted record
              const updatedRecords = records.filter(record => record._id !== id);
              setRecords(updatedRecords);
              alert('Record deleted successfully');
            })
            .catch(err => {
              console.log(err);
              // Handle errors if needed
            });
        } else {
          // User canceled deletion
        }
      };
      

  
    
  


  return (
    <div>
      <div>
    <Member_header />
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row page-titles"></div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">My blood requests</h1>
              <hr />
              <div className="table-responsive">
                
                <table className="table">
                  <thead>
                  <tr>
                        <th>Name</th>
                        <th>Mosque</th>
                        <th>Disease</th>
                        <th>Unit</th>
                        <th>Age</th>
                        <th>Blood</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>Status</th>
                       
                      </tr>
                  </thead>
                  <tbody>
                  {loggedInUserRecords.length > 0 ? (
  loggedInUserRecords.map(record => (
    <tr key={record.id}>
      <td>{record.name}</td>
                            <td>{record.mosque}</td>
                            <td>{record.disease}</td>
                            <td>{record.unit}</td>
                            <td>{record.age}</td>
                            <td>{record.blood}</td>
                            <td>{record.phoneno}</td>
                            <td>{record.email}</td>
                            <td>
                            <button
                                className="btn btn-darkcyan"
                                style={{ color: 'white', backgroundColor: 'darkcyan' }}
                                onClick={() => handleDelete(record._id, record.name)}
                              >
                                Delete
                              </button>
                            </td>
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
             
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Member_footer />
   
  </div>
    </div>
  )
}

export default Mydonatehistory
