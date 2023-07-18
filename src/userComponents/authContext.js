import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; 
import { useHistory  } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
  });
  console.log("inside auth",authState)
  let history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        setAuthState({ isAuthenticated: false, token: null });
        localStorage.removeItem('token');
      } else {
        setAuthState({ isAuthenticated: true, token: token });
      }
    } else {
      setAuthState({ isAuthenticated: false, token: null });
    }
  }, []);
  const login = async (email,password) => {
    axios.post("http://localhost:9000/login",{email,password})
     .then(res => { 
      localStorage.setItem('token',res.data.token );
      setAuthState({ isAuthenticated: true, token: res.data.token });
      history.push('/');
     }).catch(error => {
        console.log("error",error);
      });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, token: null });
    localStorage.setItem('token','');
  };
  // Pass the authentication state and functions to the context provider
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
