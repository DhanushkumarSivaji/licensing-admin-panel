import React, { useEffect,onRef } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const Navbar = () => {
  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    
  }, []);



  return (
    <div>
      <nav className="blue darken-2">
        <div className="container">
          <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">
              RealInfo
            </a>
            <a href="#" data-activates="side-nav" className="button-collapse right">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="">
                <a href="index.html">Dashboard</a>
              </li>
              {/* <li>
                <a href="posts.html">Posts</a>
              </li>
              <li>
                <a href="categories.html">Categories</a>
              </li>
              <li>
                <a href="comments.html">Comments</a>
              </li> */}
              <li>
                <a href="users.html">Users</a>
              </li>
            </ul>

            <ul  id="side-nav" className="sidenav">
              <li>
                <div className="user-view">
                  <div className="background">
                    <img src="img/ocean.jpg" alt="" />
                  </div>
                  <a href="">
                    <img src="img/person1.jpg" alt="" className="circle" />
                  </a>
                  <a href="">
                    <span className="name white-text">John Doe</span>
                  </a>
                  <a href="">
                    <span className="email white-text">jdoe@gmail.com</span>
                  </a>
                </div>
              </li>
              <li>
                <a href="index.html">
                  <i className="material-icons">dashboard</i> Dashboard
                </a>
              </li>
              <li>
                <a href="posts.html">Posts</a>
              </li>
              <li>
                <a href="categories.html">Categories</a>
              </li>
              <li>
                <a href="comments.html">Comments</a>
              </li>
              <li>
                <a href="users.html">Users</a>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <a className="subheader">Account Controls</a>
              </li>
              <li>
                <a href="login.html" className="waves-effect">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
