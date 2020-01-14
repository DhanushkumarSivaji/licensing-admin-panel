import React,{useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () =>{


  useEffect(()=>{
    // Init Materialize JS
    M.AutoInit();
    document.addEventListener('DOMContentLoaded',function(){
      var elems = document.querySelectorAll('.sidenav')
      var instances = M.Sidenav.init(elems,{})
  })
  })
    return (
        <div>
            <nav class="blue darken-2">
            <div class="container">
            <div class="nav-wrapper">
            <a href="index.html" class="brand-logo">BrandName</a>
            <a href="#" data-target="slide-out" class="sidenav-trigger button-collapse show-on-large right"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li >
                    <a href="index.html">Dashboard</a>
                </li>
                <li>
                    <a href="posts.html">Posts</a>
                </li>
                <li>
                    <a href="categories.html">Categories</a>
                </li>
                <li>
                    <a href="users.html">Users</a>
                </li>
            </ul>
            </div>
            </div>
            </nav>
            <ul id="slide-out" class="sidenav ">
            <li>
            <div class="user-view">
              <div class="background">
                <img src="img/ocean.jpg" alt=""/>
              </div>
              <a href="#">
                <img src="img/person1.jpg" alt="" class="circle"/>
              </a>
              <a href="#">
                <span class="name white-text">John Doe</span>
              </a>
              <a href="#">
                <span class="email white-text">jdoe@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a href="index.html">
              <i class="material-icons">dashboard</i> Dashboard</a>
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
            <div class="divider"></div>
          </li>
          <li>
            <a class="subheader">Account Controls</a>
          </li>
          <li>
            <a href="login.html" class="waves-effect">Logout</a>
          </li>
  </ul>

        </div>
    )
}


export default  Navbar;