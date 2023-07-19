import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  
  const [user, setUser ] = useState({});

  useEffect(()=> {
            
    if(localStorage.getItem('token')) {
        GetUser();

    }
 },[]);


 const GetUser = async()  => {
  axios.defaults.headers.common.Authorization= localStorage.getItem("token");
  const res =await axios.post("http://127.0.0.1:5000/getUser");
  setUser(res.data.user);
 }
 const logoutHandle = async()  => {
  localStorage.removeItem("token");
  window.location.reload();

 }

    return(
        <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ backgroundColor: "#2874f0" }}>
        <div className="header text-end ">

          <div className=" me-3  mt-1 mb-1">
 

          <div className=""> <a href="/" >
             <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" className="flpp"/>
              </a></div>

<div>  <a href="" className=" exp text-white text-decoration-none">Explore
 <span className="pppl" style={{ color: "#ffe500" }}>Plus</span> </a>  

 <img src="/assets/images/plus.png" className="plls" /></div>

          </div>

      
        
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-ybs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex w-50" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search For more products, brands and more"
              aria-label="Search"
            />

           
             <a href="/login"
              className="btn btn-outline-success"
              type="submit"
              style={{ background: "white", color: "#2874f0" }}
            >
              Login
            </a>
              
          

            <a href="/Register"
              className="btn btn-outline-success"
              type="submit"
              style={{ background: "white", color: "#2874f0" }}
            >
              Register
            </a>


         
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
                href="#"
              >
                Become a seller
              </a>
            </li>
           
              <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
               
              </a>
              <ul className="dropdown-menu">
              
              
                <li>
                  <a className="dropdown-item" 
                 onClick={logoutHandle}
                   href="#">
                    Logout
                  </a>
                </li>


                <li>
                  <a className="dropdown-item"  href="Profile">
                   My Profile
                  </a>
                </li>
                
              </ul>
          

            </li>
           
                     
           
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
                href="#"
              >
                Cart
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
                href="profile"
              >
                profile
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>


        </>
    )
}

export default Header;
