import React, { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mosque, setMosque] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMosqueChange = (event) => {
    setMosque(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmpassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !mosque || !password || !confirmpassword) {
      setErrorMessage("Please fill in all fields.");
    } else if (name.toLowerCase() === "mosque" && password !== confirmpassword) {
      setErrorMessage("Passwords do not match.");
    } else if (email && !isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage(
        ""
      );
      // Submit form data here
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Mosque:
          <input type="text" value={mosque} onChange={handleMosqueChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;