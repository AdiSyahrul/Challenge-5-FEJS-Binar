import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarBrand } from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Search from './components/Search';
import {Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  const tokenLocalStorage = localStorage.getItem("token");
  const [token, setToken] = useState(tokenLocalStorage);
  return (
    <div className='web-movie'>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={"931577766913-ncu5lvh4h4gmn0sbjc2e6jkl8roruk6a.apps.googleusercontent.com"}>
        <BrowserRouter>
          <div style ={{
            display : "flex",
            background : "black",
            padding : '5px 0 5px 5 px',
            fontSize: '20px'
          }}>
            <div className = "navbrand" style ={{ margin : '20px'}}>
              <NavbarBrand href="/">Movies Web</NavbarBrand>
            </div>
            <div style ={{ margin : '10px'}}>
              <NavLink className="navlink" to="/login" style={({ isActive }) => ({ 
                color: isActive ? 'red' : 'white' })}>
                Login
              </NavLink>
            </div>
            <div style ={{ margin : '10px'}}>
              <NavLink to="/register" style={({ isActive }) => ({ 
                color: isActive ? 'red' : 'white' })}>
                Register
              </NavLink>
            </div>
            <div style ={{ margin : '10px'}}>
              <NavLink to="/search" style={({ isActive }) => ({ 
                color: isActive ? 'red' : 'white' })}>
                Search
              </NavLink>
            </div>
          </div>
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/login" element ={<Login token={token} setToken={setToken}/>}/>
            <Route path="/register" element ={<Register token={token} setToken={setToken} />}/>
            <Route path="/search" element ={<Search token={token} setToken={setToken} />}/>
          </Routes>
        </BrowserRouter>   
      </GoogleOAuthProvider>
    </Provider>
  </div>
  );
}

export default App;