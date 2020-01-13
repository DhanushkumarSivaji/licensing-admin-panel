import React, { useState,useEffect } from "react";
import Footer from '../layout/Footer'
const Login = () => {


  return (
    <div>
      <nav class="blue darken-1">
        <div class="container">
          <div class="nav-wrapper">
            <a href="index.html" class="brand-logo">
              RealInfo
            </a>
          </div>
        </div>
      </nav>

      <section class="section section-login">
        <div class="container">
          <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
              <div class="card-panel login blue darken-1 white-text center">
                <h2>Admin Login</h2>
                <form action="index.html">
                  <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <input type="email" id="email" />
                    <label class="white-text" for="email">
                      Email
                    </label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" id="password" />
                    <label class="white-text" for="password">
                      Password
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    style={{width:'80%'}}
                    class="btn btn-large btn-extended grey lighten-4 black-text"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default Login;
